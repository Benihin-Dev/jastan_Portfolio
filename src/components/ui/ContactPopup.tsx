"use client";

import React, { useEffect, useRef, useState } from "react";

const SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycby8DlP6chgNOSzYhBCxIzOwKJejGEexHr_yfIDo5RTfrRi2dt53JVQgDj7sPwywrAAj_A/exec";

const PURPOSE_OPTIONS = [
  "Safari Booking",
  "Nature Walk",
  "Village Tour",
  "Wild Animal Info",
  "Other",
];

const TITLES = ["Mr.", "Ms.", "Mrs.", "Miss.", "Mx.", "Dr.", "Prof.", "Rev.", "Fr.", "Sr."];
const MIN_OTHER = 3;
const MAX_MESSAGE = 150;

/** Single paw print icon */
function PawIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="currentColor" aria-hidden="true">
      <ellipse cx="14" cy="28" rx="6" ry="8" transform="rotate(-20 14 28)" />
      <ellipse cx="26" cy="14" rx="6" ry="8.5" transform="rotate(-6 26 14)" />
      <ellipse cx="40" cy="14" rx="6" ry="8.5" transform="rotate(6 40 14)" />
      <ellipse cx="52" cy="28" rx="6" ry="8" transform="rotate(20 52 28)" />
      <path d="M32 29c-8 0-17 9-17 17 0 6 5 8 10 7 3-.7 5-1.5 7-1.5s4 .8 7 1.5c5 1 10-1 10-7 0-8-9-17-17-17Z" />
    </svg>
  );
}

interface ContactPopupProps {
  email: string;
  onClose: () => void;
}

interface FormErrors {
  email?: string;
  name?: string;
  purpose?: string;
  description?: string;
}

const fieldClass =
  "w-full text-[16px] text-[#1b1b18] bg-white border-2 border-[#e4dccb] rounded-xl px-3.5 py-3 outline-none transition placeholder:text-[#a8a293] focus:border-[#d9822b] focus:shadow-[0_0_0_4px_rgba(217,130,43,0.2)]";
const errorFieldClass =
  "!border-[#d64545] focus:!shadow-[0_0_0_4px_rgba(214,69,69,0.15)]";
const labelClass =
  "block text-[12px] font-semibold uppercase tracking-[0.06em] text-[#6b675c] mt-4 mb-1.5";

/** Round orange close button with a ring; spins on hover. */
function CloseTab({ onClose }: { onClose: () => void }) {
  return (
    <button
      type="button"
      onClick={onClose}
      aria-label="Close"
      className="group absolute top-4 right-4 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-gradient-to-br from-[#f29a45] to-[#c4651a] text-white shadow-[0_6px_14px_rgba(217,130,43,0.45)] ring-4 ring-[#d9822b]/20 transition duration-300 hover:scale-110 hover:from-[#1b1b18] hover:to-[#1b1b18] hover:ring-[#1b1b18]/15 active:scale-95"
    >
      <svg
        viewBox="0 0 24 24"
        className="h-5 w-5 transition-transform duration-300 group-hover:rotate-180"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.8"
        strokeLinecap="round"
        aria-hidden="true"
      >
        <path d="M6 6l12 12M18 6L6 18" />
      </svg>
    </button>
  );
}

const ContactPopup = ({ email: initialEmail, onClose }: ContactPopupProps) => {
  const [email, setEmail] = useState(initialEmail);
  const [salutation, setSalutation] = useState("");
  const [name, setName] = useState("");
  const [purpose, setPurpose] = useState("");
  const [description, setDescription] = useState("");
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const isSubmitting = useRef(false);

  // Close on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim()))
      newErrors.email = "Please enter a valid email.";
    if (!name.trim()) newErrors.name = "Name is required.";
    if (!purpose) newErrors.purpose = "Please select a purpose.";
    const msg = description.trim();
    if (purpose === "Other" && msg.length < MIN_OTHER)
      newErrors.description = `Please tell me a little more (at least ${MIN_OTHER} characters).`;
    else if (msg.length > MAX_MESSAGE)
      newErrors.description = `Please keep it under ${MAX_MESSAGE} characters.`;
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validate() || isSubmitting.current) return;
    isSubmitting.current = true;
    setStatus("loading");
    try {
      await fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "text/plain" },
        body: JSON.stringify({
          type: "contactRequest",
          email: email.trim(),
          salutation,
          name: name.trim(),
          purpose,
          description: description.trim(),
        }),
      });
      setStatus("success");
    } catch (err) {
      console.error("Contact request failed:", err);
      setStatus("error");
    } finally {
      isSubmitting.current = false;
    }
  };

  const cardClass =
    "relative w-full max-h-[92vh] overflow-y-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden bg-[#fffdf8] text-[#1b1b18] rounded-[26px] pt-[34px] px-6 pb-6 shadow-[0_20px_50px_rgba(0,0,0,0.4)]";

  if (status === "success") {
    return (
      <div
        className={`${cardClass} text-center`}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        <CloseTab onClose={onClose} />
        <div className="mx-auto mt-4 mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-[#d9822b]/10 text-[34px]">
          🐘
        </div>
        <h2 className="text-[20px] font-semibold">Thank you!</h2>
        <p className="mt-2 mb-5 text-[14px] leading-[1.5] text-[#6b675c] break-words">
          Your message has been sent. I&apos;ll get back to you at{" "}
          <span className="font-semibold text-[#1b1b18]">{email.trim()}</span> soon.
        </p>
        <button
          type="button"
          onClick={onClose}
          className="block w-full text-center text-[16px] font-bold text-white bg-gradient-to-br from-[#d9822b] to-[#c4651a] rounded-[14px] py-[15px] shadow-[0_8px_18px_rgba(217,130,43,0.4)] cursor-pointer active:scale-[0.98] transition"
        >
          Close
        </button>
      </div>
    );
  }

  return (
    <div
      className={cardClass}
      onClick={(e) => e.stopPropagation()}
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-title"
    >
      <CloseTab onClose={onClose} />

      <h2
        id="contact-title"
        className="mt-1.5 mb-1 flex items-center gap-2 text-[18px] font-semibold pr-14"
      >
        <PawIcon className="h-9 w-9 shrink-0 text-[#d9822b]" />
        <span>Get in touch</span>
      </h2>
      <p className="mb-2 text-[14px] leading-[1.45] text-[#6b675c]">
        Tell me what you need and I&apos;ll reply by email.
      </p>

      <div
        className={`mt-4 flex items-center gap-2.5 rounded-xl border-l-4 px-3.5 py-3 bg-[#d9822b]/10 ${
          errors.email ? "border-[#d64545]" : "border-[#d9822b]"
        }`}
      >
        <svg
          viewBox="0 0 24 24"
          className="h-7 w-7 shrink-0 text-[#d9822b]"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="m3 7 9 6 9-6" />
        </svg>
        <div className="min-w-0 flex-1">
          <label
            htmlFor="cp-email"
            className="block text-[13px] font-bold uppercase tracking-[0.06em] text-[#1b1b18]"
          >
            Reply to
          </label>
          <input
            id="cp-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"
            className="w-full bg-transparent text-[14px] leading-[1.5] text-[#1b1b18] outline-none"
          />
        </div>
      </div>
      {errors.email && (
        <p className="mt-1 text-[12px] text-[#d64545]">{errors.email}</p>
      )}

      <label htmlFor="cp-name" className={labelClass}>
        Name
      </label>
      <div className="flex gap-2">
        <select
          value={salutation}
          onChange={(e) => setSalutation(e.target.value)}
          aria-label="Title"
          className="w-[84px] shrink-0 text-[15px] font-semibold text-[#1b1b18] bg-white border-2 border-[#e4dccb] rounded-xl px-2 py-3 outline-none cursor-pointer focus:border-[#d9822b]"
        >
          <option value="">Title</option>
          {TITLES.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
        <input
          id="cp-name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name"
          autoComplete="name"
          className={`${fieldClass} flex-1 min-w-0 ${errors.name ? errorFieldClass : ""}`}
        />
      </div>
      {errors.name && (
        <p className="mt-1 text-[12px] text-[#d64545]">{errors.name}</p>
      )}

      <label htmlFor="cp-purpose" className={labelClass}>
        Purpose
      </label>
      <select
        id="cp-purpose"
        value={purpose}
        onChange={(e) => setPurpose(e.target.value)}
        className={`w-full h-[48px] bg-white text-[16px] text-black px-4 rounded-xl border-none outline-none cursor-pointer shadow-[0_1px_3px_rgba(0,0,0,0.12)] ${
          errors.purpose ? "ring-2 ring-[#d64545]" : "focus:ring-2 focus:ring-[#d9822b]/50"
        }`}
      >
        <option value="">Select Purpose</option>
        {PURPOSE_OPTIONS.map((p) => (
          <option key={p} value={p}>
            {p}
          </option>
        ))}
      </select>
      {errors.purpose && (
        <p className="mt-1 text-[12px] text-[#d64545]">{errors.purpose}</p>
      )}

      <label htmlFor="cp-desc" className={labelClass}>
        Message{" "}
        <span className="font-normal normal-case opacity-80">
          {purpose === "Other" ? "(required)" : "(optional)"}
        </span>
      </label>
      <textarea
        id="cp-desc"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder={
          purpose === "Other"
            ? "Please tell me what you need..."
            : "Tell me a bit more (optional)..."
        }
        maxLength={MAX_MESSAGE}
        rows={4}
        className={`${fieldClass} resize-none ${
          errors.description ? errorFieldClass : ""
        }`}
      />
      <div className="mt-1 flex justify-between gap-3 text-[12px]">
        <span className="text-[#d64545]">{errors.description}</span>
        <span className="shrink-0 text-[#a8a293]">
          {description.length}/{MAX_MESSAGE}
        </span>
      </div>

      {status === "error" && (
        <p className="mt-3 text-[13px] text-[#d64545]">
          Something went wrong. Please try again.
        </p>
      )}

      <button
        type="button"
        onClick={handleSubmit}
        disabled={status === "loading"}
        className="block w-full mt-5 text-center text-[16px] font-bold text-white bg-gradient-to-br from-[#d9822b] to-[#c4651a] rounded-[14px] py-[15px] shadow-[0_8px_18px_rgba(217,130,43,0.4)] cursor-pointer active:scale-[0.98] transition disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "loading" ? "Sending..." : "Send Request →"}
      </button>

      <p className="mt-4 text-center text-[13px] font-medium leading-[1.5] text-[#2f6b3f]">
        I use your details only to answer you.
      </p>
    </div>
  );
};

export default ContactPopup;

