"use client";
import React from "react";
import CustomeText from "@/components/ui/CustomeText";
import Image from "next/image";
import ClientOnly from "@/components/ui/ClientOnly";

export default function HireMe() {
  return (
    <div className="w-full flex flex-col lg:flex-row items-center justify-between px-6 lg:px-[80px] py-20 lg:py-[122px] bg-[#F2F4F7] rounded-[32px] lg:rounded-[50px] gap-12 lg:gap-[96px]">
      <div className="w-full  max-w-[500px] flex flex-col lg:items-end gap-8">
        <div className="flex flex-wrap text-4xl sm:text-5xl lg:text-6xl font-semibold gap-2">
          <CustomeText title="Why" className="text-[#344054]" />
          <CustomeText title="Hire me" className="text-[#FD853A]" />
          <CustomeText title="?" className="text-[#344054]" />
        </div>

        <p className="text-[#98A2B3] lg:text-right text-base sm:text-lg lg:text-xl leading-relaxed max-w-lg">
          I am passionate about wildlife and have strong field awareness
          developed through my academic background. My ability to understand
          animal behavior and communicate clearly adds value in creating an
          informative, safe, and memorable wildlife experience.
        </p>

        <div className="flex flex-col sm:flex-row lg:justify-end gap-8 w-full">
          <div className="flex flex-col">
            <CustomeText
              title="Flora"
              className="text-[32px] sm:text-[36px] font-medium text-[#1D2939]"
            />
            <CustomeText
              title="Plant Expertise"
              className="text-lg text-[#667085]"
            />
          </div>
          <div className="flex flex-col">
            <CustomeText
              title="Fauna"
              className="text-[32px] sm:text-[36px] font-medium text-[#1D2939]"
            />
            <CustomeText
              title="Animal Expertise"
              className="text-lg text-[#667085]"
            />
          </div>
        </div>

        <ClientOnly>
          <button
            onClick={() =>
              document.getElementById("contact")?.scrollIntoView({
                behavior: "smooth",
                block: "start",
              })
            }
            className="w-full md:w-fit cursor-pointer sm:w-auto px-6 py-4 rounded-[20px] border border-[#151515] text-[#151515] font-semibold text-2xl sm:text-[28px] transition-all duration-300 hover:bg-[#151515] hover:text-white focus:bg-[#151515] focus:text-white"
          >
            Hire me
          </button>
        </ClientOnly>
      </div>
      <div className="relative w-full max-w-xl  aspect-square group mx-auto lg:mx-0">
        <Image
          src="/jastan1.png"
          alt="Hire me"
          fill
          className="object-contain z-20 transition-all duration-300 ease-in-out group-hover:translate-y-3"
          priority
        />
        <div className=" absolute w-3/5 h-[70%] translate-1/3 z-10 rounded-[20%] bg-[#feb173] top-0 left-0">
          <div className=" relative w-full h-full"></div>
        </div>
        <Image
          src="/Property 1=Variant2.svg"
          alt="Hire me"
          fill
          className="object-contain absolute -translate-y-[15px] transition-all duration-300 ease-in-out opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-110"
          priority
        />
      </div>
    </div>
  );
}
