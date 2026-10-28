"use client";

import React, { useEffect, useState } from "react";

// Google Review link that opens after the popup
const FEEDBACK_URL = "https://g.page/r/CTknMOMTPqYaEBM/review";

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
        className="relative w-full max-w-[380px] max-h-[98%] overflow-y-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden bg-[#fffdf8] text-[#1b1b18] rounded-[26px] pt-[34px] px-6 pb-6 shadow-[0_20px_50px_rgba(0,0,0,0.4)]"
      >
        {/* Close button: smooth black corner tab + brush-stroke white cross */}
        <button
          onClick={onClose}
          aria-label="Close"
          className="group pointer-events-none absolute top-0 right-0 block h-24 w-24 leading-[0]"
        >
          <svg viewBox="0 0 96 96" className="h-24 w-24" fill="none">
            <path
              d="M0 0H96V96A22 22 0 0 0 74 74H50A38 38 0 0 1 12 36V22A22 22 0 0 0 0 0Z"
              fill="#1b1b18"
              className="pointer-events-auto cursor-pointer"
            />
            <g
              style={{ transformOrigin: "58px 38px" }}
              className="pointer-events-none transition-transform duration-300 group-hover:rotate-90"
            >
              <g
                transform="translate(58 38) rotate(-4)"
                fill="#fffdf8"
                className="transition-colors duration-300 group-hover:fill-[#d9822b]"
              >
                <path d="M-19 14C-20 11-17 9-12 5C-4 -1 7 -9 16 -15C18 -16.5 21 -17.5 22 -15C23 -13 21 -11 19 -9.5C10 -3 1 4 -8 13C-10 15.5-12 17.5-15 17C-18 16.5-19 15.5-19 14Z" />
                <path d="M-13 -14C-12 -16.5-9 -15-7 -13C-1 -7 5 1 12 9.5C14 12 15.5 14 13.5 15.5C11 17 8.5 16 6.5 14C0 7-6 1-11 -7C-12 -8.5-13.5 -9-14.5 -9.5C-15.5 -10-13.8 -11-13.8 -11.8C-14.2 -12.5-13.4 -13.2-13 -14Z" />
              </g>
            </g>
          </svg>
        </button>

      <h2
          id="feedback-title"
          className="mt-1.5 mb-1 flex items-center gap-2 text-[18px] font-semibold pr-14"
        >
          <span className="text-[30px] leading-none">🐘</span>
          <span>How was your experience?</span>
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
}"use client";

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
        className="relative w-full max-w-[380px] max-h-[92%] overflow-y-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden bg-[#fffdf8] text-[#1b1b18] rounded-[26px] pt-[34px] px-6 pb-6 shadow-[0_20px_50px_rgba(0,0,0,0.4)]"
      >
        {/* Close button: smooth black corner tab + brush-stroke white cross */}
        <button
          onClick={onClose}
          aria-label="Close"
          className="group pointer-events-none absolute top-0 right-0 block h-24 w-24 leading-[0]"
        >
          <svg viewBox="0 0 96 96" className="h-24 w-24" fill="none">
            <path
              d="M0 0H96V96A22 22 0 0 0 74 74H50A38 38 0 0 1 12 36V22A22 22 0 0 0 0 0Z"
              fill="#1b1b18"
              className="pointer-events-auto cursor-pointer"
            />
            <g
              style={{ transformOrigin: "58px 38px" }}
              className="pointer-events-none transition-transform duration-300 group-hover:rotate-90"
            >
              <g
                transform="translate(58 38) rotate(-4)"
                fill="#fffdf8"
                className="transition-colors duration-300 group-hover:fill-[#d9822b]"
              >
                <path d="M-19 14C-20 11-17 9-12 5C-4 -1 7 -9 16 -15C18 -16.5 21 -17.5 22 -15C23 -13 21 -11 19 -9.5C10 -3 1 4 -8 13C-10 15.5-12 17.5-15 17C-18 16.5-19 15.5-19 14Z" />
                <path d="M-13 -14C-12 -16.5-9 -15-7 -13C-1 -7 5 1 12 9.5C14 12 15.5 14 13.5 15.5C11 17 8.5 16 6.5 14C0 7-6 1-11 -7C-12 -8.5-13.5 -9-14.5 -9.5C-15.5 -10-13.8 -11-13.8 -11.8C-14.2 -12.5-13.4 -13.2-13 -14Z" />
              </g>
            </g>
          </svg>
        </button>

        <div className="text-[34px] leading-none">🐘</div>
        <h2
          id="feedback-title"
          className="mt-1.5 mb-1 text-[22px] font-semibold pr-14"
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
