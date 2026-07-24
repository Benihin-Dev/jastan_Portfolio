"use client";
import React, { useState } from "react";
import ClientOnly from "@/components/ui/ClientOnly";
import CustomeText from "@/components/ui/CustomeText";
import Image from "next/image";

const APPS_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbz-xZziHZR0U5_AuKoM7xP5HEgvQ6rC6Hp6t6-exZihfGruWgPqmKXrU5r1X7kFLnhj/exec";

export default function Contact() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "sent" | "error">(
    "idle",
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    setStatus("loading");
    try {
      await fetch(APPS_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "text/plain" },
        body: JSON.stringify({ type: "contact", email }),
      });
      // no-cors means the response body is opaque, so we optimistically assume success
      setStatus("sent");
      setEmail("");
    } catch (err) {
      console.error("Contact submission failed:", err);
      setStatus("error");
    }
  };

  return (
    <div className="w-full bg-white flex flex-col items-center justify-center py-16 lg:pb-20 scale-100 lg:scale-85 px-4 sm  lg:px-[60px] gap-10">
      <div className="w-fit max-w-5xl text-center flex flex-col items-center gap-4">
        <div className="flex flex-wrap whitespace-nowrap justify-center items-center gap-3 sm:gap-4 relative">
          <CustomeText
            title="Your Gateway to the "
            className="font-semibold text-3xl sm:text-4xl md:text-[60px] lg:text-[64px] text-[#344054]"
          />
          <CustomeText
            title="Wild"
            className="font-semibold text-3xl sm:text-4xl md:text-[60px] lg:text-[64px] text-[#FD853A]"
          />
        </div>
        <p className=" text-center text-[#98A2B3] lg:max-w-none max-w-l md:max-w-2xl">
          Join my WhatsApp Channel for exclusive safari updates, wildlife
          discoveries, and educational content.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-3xl flex md:flex-row items-center justify-between px-3 py-2 md:px-6 md:py-4 rounded-full border duration-300 transition-all hover:border-[#7f7f7f8e]  border-[#E4E7EC] bg-[white]"
      >
        <div className="w-9 h-9 md:w-[50px] md:h-[50px] flex items-center justify-center rounded-full bg-[#eeebe7a8] shrink-0">
          <Image
            src="/whatsapp.svg"
            alt="message icon"
            width={28}
            height={28}
          />
        </div>

        <ClientOnly>
          <input
            type="email"
            required
            disabled
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Join My Channel"
            className="w-full md:flex-1 px-4 py-2 rounded-full sm:text-center md:text-left text-base sm:text-lg outline-none bg-transparent text-[#1D2939] placeholder:text-[#667085]"
          />
          <a
            href="https://whatsapp.com/channel/0029Vb8Ui719mrGlCeEiwj43"
            target="_blank"
            rel="noopener noreferrer"
            className="w-fit px-6 md:px-12 py-1 md:py-3 rounded-full bg-[#FD853A] hover:bg-[#e4752f] text-white text-lg font-semibold transition duration-300 inline-block text-center disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {status === "loading" ? "Sending..." : "Explore"}
          </a>
        </ClientOnly>
      </form>

      {status === "sent" && (
        <p className="text-sm text-green-600 -mt-6">
          Thanks! I&apos;ll be in touch soon.
        </p>
      )}
      {status === "error" && (
        <p className="text-sm text-red-600 -mt-6">
          Something went wrong. Please try again.
        </p>
      )}
    </div>
  );
}
