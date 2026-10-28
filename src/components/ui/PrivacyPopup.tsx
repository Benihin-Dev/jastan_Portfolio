"use client";

import React, { useEffect } from "react";
import { X } from "lucide-react";

export default function PrivacyPopup({ onClose }: { onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div
      onClick={(e) => e.stopPropagation()}
      role="dialog"
      aria-modal="true"
      aria-labelledby="privacy-title"
      className="relative w-full max-h-[85vh] overflow-y-auto custom-scrollbar bg-white rounded-2xl shadow-xl shadow-[#313131] p-6 sm:p-8 text-[14px] sm:text-[15px] leading-relaxed text-[#344054]"
    >
      <button
        onClick={onClose}
        aria-label="Close"
        className="group absolute top-3 right-3 size-10 rounded-full bg-[#FD853A] hover:bg-[#e46e24] flex items-center justify-center cursor-pointer transition-colors duration-300"
      >
        <X
          size={20}
          className="text-white transition-transform duration-300 group-hover:rotate-90"
        />
      </button>

      <h2
        id="privacy-title"
        className="text-2xl sm:text-3xl font-semibold text-[#171717] pr-12"
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
    </div>
  );
  
}

