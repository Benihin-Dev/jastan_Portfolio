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

/**
 * 3D envelope: floats and tilts, the flap opens, the letter rises out, a pen appears and
 * writes on it, then the letter slides back in and the flap closes. Pure CSS 3D, no images.
 * It is absolutely positioned and may overflow the box, so it never changes the box height.
 */
function MailEnvelope3D() {
  return (
    <div className="env3d-scene pointer-events-none absolute right-1 top-1/2 z-10 h-[74px] w-[88px] -translate-y-[47px] select-none" aria-hidden="true">
      <style>{`
        .env3d-scene { perspective: 380px }
        .env3d-float { position: absolute; left: 16px; top: 28px; width: 56px; height: 38px; transform-style: preserve-3d;
          animation: env3d-tilt 7s ease-in-out infinite }
        .env3d-shadow { position: absolute; left: 18px; top: 66px; width: 52px; height: 7px; border-radius: 50%;
          background: rgba(120, 70, 20, .28); filter: blur(2px); animation: env3d-shadow 7s ease-in-out infinite }
        .env3d-back, .env3d-front, .env3d-letter, .env3d-flap, .env3d-flap-open { position: absolute; left: 0; width: 100%; box-sizing: border-box }
        .env3d-back { top: 0; height: 100%; border-radius: 4px; background: linear-gradient(180deg, #c4651a, #a9540f); transform: translateZ(0) }
        .env3d-letter { top: 4px; height: 33px; left: 5px; width: 46px; border-radius: 3px; background: #fffdf8;
          box-shadow: 0 1px 3px rgba(0,0,0,.2); transform: translateZ(1px); animation: env3d-letter 7s ease-in-out infinite;
          padding: 7px 6px 0; display: flex; flex-direction: column; gap: 4px }
        .env3d-letter i { display: block; height: 2.5px; border-radius: 2px; background: #c9bfa8; transform-origin: 0 50%; transform: scaleX(0) }
        .env3d-letter i:nth-child(1) { width: 60%; background: #d9822b; animation: env3d-w1 7s ease-in-out infinite }
        .env3d-letter i:nth-child(2) { width: 92%; animation: env3d-w2 7s ease-in-out infinite }
        .env3d-letter i:nth-child(3) { width: 74%; animation: env3d-w3 7s ease-in-out infinite }
        .env3d-front { top: 0; height: 100%; border-radius: 4px; transform: translateZ(2px);
          background: linear-gradient(160deg, #f8c58b, #eaa45a);
          clip-path: polygon(0 0, 50% 58%, 100% 0, 100% 100%, 0 100%) }
        .env3d-flap, .env3d-flap-open { height: 22px }
        .env3d-flap { top: 0; transform-origin: 50% 0; transform: translateZ(3px);
          background: linear-gradient(180deg, #e08a30, #c96f1c); clip-path: polygon(0 0, 100% 0, 50% 100%);
          animation: env3d-flap 7s ease-in-out infinite }
        .env3d-flap-open { top: -22px; transform-origin: 50% 100%; transform: translateZ(0.5px) scaleY(0);
          background: linear-gradient(0deg, #f3d9b4, #e9c795); clip-path: polygon(50% 0, 100% 100%, 0 100%);
          animation: env3d-flap-open 7s ease-in-out infinite }
        .env3d-pen { position: absolute; left: 0; top: 0; width: 22px; height: 22px; opacity: 0; transform-origin: 0 100%;
          transform: translate3d(60px, -45px, 6px); animation: env3d-pen 7s ease-in-out infinite }
        .env3d-spark { position: absolute; width: 7px; height: 7px; background: #d9822b; opacity: 0;
          clip-path: polygon(50% 0, 62% 38%, 100% 50%, 62% 62%, 50% 100%, 38% 62%, 0 50%, 38% 38%);
          animation: env3d-spark 7s ease-out infinite }
        @keyframes env3d-tilt {
          0%, 100% { transform: translateY(0) rotateX(14deg) rotateY(-22deg) }
          50% { transform: translateY(-5px) rotateX(10deg) rotateY(22deg) }
        }
        @keyframes env3d-shadow {
          0%, 100% { transform: scaleX(1); opacity: .9 }
          50% { transform: scaleX(.8); opacity: .6 }
        }
        @keyframes env3d-flap {
          0%, 8% { transform: translateZ(3px) scaleY(1) }
          14%, 82% { transform: translateZ(3px) scaleY(0) }
          90%, 100% { transform: translateZ(3px) scaleY(1) }
        }
        @keyframes env3d-flap-open {
          0%, 12% { transform: translateZ(0.5px) scaleY(0) }
          18%, 80% { transform: translateZ(0.5px) scaleY(1) }
          86%, 100% { transform: translateZ(0.5px) scaleY(0) }
        }
        @keyframes env3d-letter {
          0%, 18% { transform: translateZ(1px) translateY(0) }
          34%, 66% { transform: translateZ(1px) translateY(-30px) }
          84%, 100% { transform: translateZ(1px) translateY(0) }
        }
        @keyframes env3d-w1 { 0%, 36% { transform: scaleX(0) } 44%, 90% { transform: scaleX(1) } 92%, 100% { transform: scaleX(0) } }
        @keyframes env3d-w2 { 0%, 45% { transform: scaleX(0) } 52%, 90% { transform: scaleX(1) } 92%, 100% { transform: scaleX(0) } }
        @keyframes env3d-w3 { 0%, 53% { transform: scaleX(0) } 60%, 90% { transform: scaleX(1) } 92%, 100% { transform: scaleX(0) } }
        @keyframes env3d-pen {
          0%, 32% { opacity: 0; transform: translate3d(58px, -48px, 6px) rotate(0deg) }
          36% { opacity: 1; transform: translate3d(11px, -40px, 6px) rotate(0deg) }
          44% { opacity: 1; transform: translate3d(31px, -40px, 6px) rotate(-4deg) }
          45% { opacity: 1; transform: translate3d(11px, -33px, 6px) rotate(0deg) }
          52% { opacity: 1; transform: translate3d(42px, -33px, 6px) rotate(-4deg) }
          53% { opacity: 1; transform: translate3d(11px, -27px, 6px) rotate(0deg) }
          60% { opacity: 1; transform: translate3d(37px, -27px, 6px) rotate(-4deg) }
          65%, 100% { opacity: 0; transform: translate3d(62px, -50px, 6px) rotate(10deg) }
        }
        @keyframes env3d-spark {
          0%, 60% { opacity: 0; transform: scale(.3) }
          68% { opacity: 1; transform: scale(1.1) }
          84%, 100% { opacity: 0; transform: scale(.4) translateY(-6px) }
        }
        @media (prefers-reduced-motion: reduce) {
          .env3d-float, .env3d-shadow, .env3d-letter, .env3d-letter i, .env3d-flap, .env3d-flap-open, .env3d-pen, .env3d-spark { animation: none }
          .env3d-float { transform: rotateX(14deg) rotateY(-14deg) }
        }
      `}</style>

      <span className="env3d-shadow" />
      <span className="env3d-spark" style={{ left: "6px", top: "6px" }} />
      <span className="env3d-spark" style={{ left: "76px", top: "10px", animationDelay: ".15s" }} />
      <span className="env3d-spark" style={{ left: "62px", top: "0px", animationDelay: ".3s" }} />

      <div className="env3d-float">
        <div className="env3d-back" />
        <div className="env3d-flap-open" />
        <div className="env3d-letter">
          <i />
          <i />
          <i />
        </div>
        <div className="env3d-front" />
        <div className="env3d-flap" />
        <svg viewBox="0 0 24 24" className="env3d-pen">
          <path d="M3 21 18 6" stroke="#1b1b18" strokeWidth="5" strokeLinecap="round" />
          <path d="M13.5 10.5 18 6" stroke="#d9822b" strokeWidth="5.4" strokeLinecap="round" />
          <path d="M1 23 5.2 19.6 3.4 17.8Z" fill="#d9822b" />
        </svg>
      </div>
    </div>
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
        className={`relative mt-4 rounded-xl border-l-4 px-3.5 py-3 bg-[#d9822b]/10 ${
          errors.email ? "border-[#d64545]" : "border-[#d9822b]"
        }`}
      >
        <div className="pr-24">
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
           className={`w-full truncate text-[14px] leading-[1.5] text-[#1b1b18] outline-none ${
  email.trim()
    ? "bg-[#fff1df] rounded-md"
    : "bg-transparent"
}`}
          />
        </div>
        <MailEnvelope3D />
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
className={`w-[84px] shrink-0 text-[15px] font-semibold text-[#1b1b18] border-2 rounded-xl px-2 py-3 outline-none cursor-pointer focus:border-[#d9822b] ${
  salutation
    ? "bg-[#fff1df] !border-[#d9822b]"
    : "bg-white border-[#e4dccb]"
}`}
        >
          <option value="">Title</option>
          {TITLES.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
<input
  type="text"
  value={name}
  onChange={(e) => setName(e.target.value)}
  className={`${fieldClass} flex-1 min-w-0 ${
    errors.name
      ? errorFieldClass
      : name.trim()
        ? "!border-[#d9822b]"
        : ""
  }`}
  style={{
    backgroundColor: name.trim() ? "#fff1df" : "#ffffff",
  }}
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
className={`w-full h-[48px] text-[16px] text-black px-4 rounded-xl border-2 outline-none cursor-pointer shadow-[0_1px_3px_rgba(0,0,0,0.12)] ${
  errors.purpose
    ? "bg-white ring-2 ring-[#d64545] border-[#d64545]"
    : purpose
      ? "bg-[#fff1df] border-[#d9822b]"
      : "bg-white border-transparent focus:ring-2 focus:ring-[#d9822b]/50"
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
  errors.description
    ? errorFieldClass
    : description.trim()
      ? "bg-[#fff1df] !border-[#d9822b]"
      : ""
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

