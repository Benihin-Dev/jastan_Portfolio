"use client";

import React, { useEffect, useState } from "react";

// Google Review link that opens after the popup
const FEEDBACK_URL = "https://g.page/r/CaGmieHCmSRvEBM/review";

// Same Apps Script web app URL used by the rest of the site.
// If you deploy a NEW version/URL for the feedback script, paste it here.
const SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycby8DlP6chgNOSzYhBCxIzOwKJejGEexHr_yfIDo5RTfrRi2dt53JVQgDj7sPwywrAAj_A/exec";

const TITLES = [
  "Mr.",
  "Ms.",
  "Mrs.",
  "Miss.",
  "Mx.",
  "Dr.",
  "Prof.",
  "Rev.",
  "Fr.",
  "Sr.",
];

interface FeedbackPopupProps {
  open: boolean;
  onClose: () => void;
}

const fieldClass =
  "w-full text-[16px] text-[#1b1b18] bg-white border-2 border-[#e4dccb] rounded-xl px-3.5 py-3 outline-none transition focus:border-[#d9822b] focus:shadow-[0_0_0_4px_rgba(217,130,43,0.2)]";
const labelClass =
  "block text-[12px] font-semibold uppercase tracking-[0.06em] text-[#6b675c] mt-3 mb-1.5";

export default function FeedbackPopup({ open, onClose }: FeedbackPopupProps) {
  const [salutation, setSalutation] = useState("");
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [country, setCountry] = useState("");

  // Close on Escape
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  const openFeedback = () => {
    window.open(FEEDBACK_URL, "_blank", "noopener,noreferrer");
  };

  const handleGo = () => {
    const details = {
      type: "feedbackVisitor", // tells the Apps Script to use the "Feedback Menu" tab
      salutation,
      name: name.trim(),
      role: role.trim(),
      country: country.trim(),
    };

    // Open the review link first (must happen directly inside the click,
    // otherwise browsers may block it as a popup).
    openFeedback();

    // Save to Google Sheet only if the visitor typed something.
    if (details.salutation || details.name || details.role || details.country) {
      fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "text/plain" },
        body: JSON.stringify(details),
        keepalive: true,
      }).catch((err) => console.error("Feedback details not saved:", err));
    }

    setSalutation("");
    setName("");
    setRole("");
    setCountry("");
    onClose();
  };

  const handleSkip = () => {
    openFeedback();
    onClose();
  };

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-[100] flex items-center justify-center p-[18px] bg-black/55 backdrop-blur-[3px]"
      role="dialog"
      aria-modal="true"
      aria-labelledby="feedback-title"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-[380px] max-h-[92%] overflow-y-auto bg-[#fffdf8] text-[#1b1b18] border-[5px] border-[#1b1b18] rounded-[26px] pt-[34px] px-6 pb-6 shadow-[0_20px_50px_rgba(0,0,0,0.4)]"
      >
        {/* Close button: black corner tab with white X */}
        <button
          onClick={onClose}
          aria-label="Close"
          className="group absolute -top-px -right-px w-[62px] h-[56px] bg-[#1b1b18] rounded-tr-[20px] rounded-bl-[60px_46px] flex items-start justify-end pt-[9px] pr-2.5 cursor-pointer"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            className="w-[26px] h-[26px] stroke-[#fffdf8] transition-transform duration-200 group-hover:rotate-90"
            strokeWidth={4.5}
            strokeLinecap="round"
          >
            <path d="M5 5l14 14M19 5L5 19" />
          </svg>
        </button>

        <div className="text-[34px] leading-none">🐘</div>
        <h2
          id="feedback-title"
          className="mt-1.5 mb-1 text-[22px] font-semibold pr-11"
        >
          How was your experience?
        </h2>
        <p className="mb-4 text-[14px] leading-[1.45] text-[#6b675c]">
          Tell us a little about yourself, then share your feedback.
        </p>

        <label htmlFor="fb-name" className={labelClass}>
          Name <span className="font-normal normal-case opacity-80">(optional)</span>
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
            id="fb-name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            autoComplete="name"
            className={`${fieldClass} flex-1 min-w-0`}
          />
        </div>

        <label htmlFor="fb-role" className={labelClass}>
          Role <span className="font-normal normal-case opacity-80">(optional)</span>
        </label>
        <input
          id="fb-role"
          type="text"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          placeholder="e.g. Traveller, Photographer, Student"
          className={fieldClass}
        />

        <label htmlFor="fb-country" className={labelClass}>
          Country <span className="font-normal normal-case opacity-80">(optional)</span>
        </label>
        <input
          id="fb-country"
          type="text"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          placeholder="Where are you from?"
          autoComplete="country-name"
          className={fieldClass}
        />

        <button
          onClick={handleGo}
          className="block w-full mt-5 text-center text-[16px] font-bold text-white bg-gradient-to-br from-[#d9822b] to-[#c4651a] rounded-[14px] py-[15px] shadow-[0_8px_18px_rgba(217,130,43,0.4)] cursor-pointer active:scale-[0.98] transition"
        >
          Go to Feedback →
        </button>
        <button
          onClick={handleSkip}
          className="block mx-auto mt-3 text-[14px] font-semibold text-[#2f6b3f] underline cursor-pointer"
        >
          Skip &amp; go directly to feedback
        </button>

        <div className="mt-4 px-3.5 py-3 rounded-xl bg-[#d9822b]/10 border-l-4 border-[#d9822b] text-[13px] leading-[1.5]">
          📝 <b>Note:</b> If you like, you can share these personal details, or
          you can skip this and go directly to feedback.
        </div>
      </div>
    </div>
  );
}
