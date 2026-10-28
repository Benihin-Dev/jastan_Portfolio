"use client";

import React, { useEffect } from "react";
import { X, ArrowLeft } from "lucide-react";

export default function PrivacyPopup({ onClose }: { onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  // Close the popup, then scroll smoothly to the Home section
  const goHome = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    onClose();
    document
      .getElementById("home")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div
      onClick={(e) => e.stopPropagation()}
      role="dialog"
      aria-modal="true"
      aria-labelledby="privacy-title"
      className="relative w-full max-h-[85vh] overflow-y-auto custom-scrollbar bg-white rounded-2xl shadow-xl shadow-[#313131] p-6 sm:p-8 text-[14px] sm:text-[15px] leading-relaxed text-[#344054]"
    >
      {/* Close button */}
      <button
        onClick={onClose}
        aria-label="Close"
        className="group absolute top-4 right-4 size-11 rounded-full bg-[#FD853A] text-white flex items-center justify-center cursor-pointer shadow-[0_4px_12px_rgba(253,133,58,0.45)] ring-4 ring-[#FD853A]/20 transition-all duration-300 hover:bg-[#e46e24] hover:ring-[#FD853A]/40 hover:scale-110 active:scale-95 focus-visible:outline-none focus-visible:ring-[#171717]/30"
      >
        <X
          size={22}
          strokeWidth={2.5}
          className="transition-transform duration-300 group-hover:rotate-90"
        />
      </button>

      <h2
        id="privacy-title"
        className="text-2xl sm:text-3xl font-semibold text-[#171717] pr-16"
      >
        Privacy Policy
      </h2>
      <p className="text-xs text-[#98A2B3] mt-1 mb-4">
        Last updated: October 2026
      </p>

      <h3 className="text-base font-semibold text-[#171717] mt-4 mb-1">
        What I collect
      </h3>
      <p>
        If you use the contact form, I receive the name, email address, purpose
        and message you type. If you use the feedback form, I receive the
        optional title, name, role and country you type. This information is
        stored in a Google Sheet that only I can access.
      </p>

      <h3 className="text-base font-semibold text-[#171717] mt-4 mb-1">
        How I use it
      </h3>
      <p>
        I use your details only to reply to you and to show feedback on this
        website. I do not sell or share your information with anyone else.
      </p>

      <h3 className="text-base font-semibold text-[#171717] mt-4 mb-1">
        Analytics
      </h3>
      <p>
        This site uses Vercel Analytics to count visits and see which pages are
        viewed. It does not use advertising cookies.
      </p>

      <h3 className="text-base font-semibold text-[#171717] mt-4 mb-1">
        Your choices
      </h3>
      <p>
        You can ask me to delete anything you sent by emailing
        jastanric@outlook.com.
      </p>

      {/* Back to home link */}
      <div className="mt-6 pt-4 border-t border-[#EAECF0]">
        <a
          href="#home"
          onClick={goHome}
          className="group inline-flex items-center gap-2 font-semibold text-[#FD853A] underline underline-offset-4 transition-colors duration-300 hover:text-[#e46e24]"
        >
          <ArrowLeft
            size={18}
            className="transition-transform duration-300 group-hover:-translate-x-1"
          />
          Go back to Home
        </a>
      </div>
    </div>
  );
}
