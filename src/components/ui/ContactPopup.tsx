"use client";

import React, { useState, useRef } from "react";
import { IoClose } from "react-icons/io5";

const SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycby8DlP6chgNOSzYhBCxIzOwKJejGEexHr_yfIDo5RTfrRi2dt53JVQgDj7sPwywrAAj_A/exec";

const PURPOSE_OPTIONS = [
  "Safari Booking",
  "Nature Walk",
  "Village Tour",
  "Wild Animal Info",
  "Other",
];

interface ContactPopupProps {
  email: string;
  onClose: () => void;
}

interface FormErrors {
  name?: string;
  purpose?: string;
  description?: string;
}

const ContactPopup = ({ email, onClose }: ContactPopupProps) => {
  const [name, setName] = useState("");
  const [purpose, setPurpose] = useState("");
  const [description, setDescription] = useState("");
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const isSubmitting = useRef(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!name.trim()) newErrors.name = "Name is required.";
    if (!purpose) newErrors.purpose = "Please select a purpose.";
    if (!description.trim())
      newErrors.description = "Please add a short description.";
    else if (description.trim().length < 10)
      newErrors.description = "Please provide a bit more detail.";
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
          email,
          name,
          purpose,
          description,
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

  if (status === "success") {
    return (
      <div
        className="w-full bg-[#272727] rounded-2xl p-6 sm:p-8 text-white text-center"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-[22px] font-semibold text-[#FD853A] mb-2">
          Thank you!
        </h2>
        <p className="text-[15px] text-[#CFCFCF] mb-6 break-all">
          Your message has been sent. I&apos;ll get back to you at{" "}
          <span className="whitespace-nowrap">{email}</span> soon.
        </p>
        <button
          onClick={onClose}
          className="px-5 py-2.5 rounded-full bg-[#FD853A] hover:bg-[#e46e24] transition-colors font-medium"
        >
          Close
        </button>
      </div>
    );
  }

  return (
    <div
      className="w-full bg-[#272727] rounded-2xl p-6 sm:p-8 text-white relative"
      onClick={(e) => e.stopPropagation()}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-[#CFCFCF] hover:text-white transition-colors"
        aria-label="Close"
      >
        <IoClose size={22} />
      </button>

      <p className="text-[13px] text-[#9A9A9A] mb-1">Sending as</p>
      <p className="text-[16px] font-medium text-[#FD853A] mb-6 break-all">
        {email}
      </p>

      <div className="flex flex-col gap-4">
        <div>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your Name"
            className="w-full h-[46px] bg-white text-black text-[14px] px-4 rounded-[8px] border-none outline-none"
          />
          {errors.name && (
            <p className="text-red-400 text-[12px] mt-1">{errors.name}</p>
          )}
        </div>

        <div>
          <select
            value={purpose}
            onChange={(e) => setPurpose(e.target.value)}
            className="w-full h-[46px] bg-white text-black text-[14px] px-4 rounded-[8px] border-none outline-none"
          >
            <option value="">Select Purpose</option>
            {PURPOSE_OPTIONS.map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </select>
          {errors.purpose && (
            <p className="text-red-400 text-[12px] mt-1">{errors.purpose}</p>
          )}
        </div>

        <div>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Tell me a bit more..."
            rows={4}
            className="w-full bg-white text-black text-[14px] px-4 py-3 rounded-[8px] border-none outline-none resize-none"
          />
          {errors.description && (
            <p className="text-red-400 text-[12px] mt-1">
              {errors.description}
            </p>
          )}
        </div>

        {status === "error" && (
          <p className="text-red-400 text-[13px]">
            Something went wrong. Please try again.
          </p>
        )}

        <button
          onClick={handleSubmit}
          disabled={status === "loading"}
          className="w-full h-[48px] rounded-full bg-[#FD853A] hover:bg-[#e46e24] transition-colors font-semibold disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {status === "loading" ? "Sending..." : "Submit"}
        </button>
      </div>
    </div>
  );
};

export default ContactPopup;
