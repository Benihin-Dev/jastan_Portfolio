"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

interface btnText {
  left: string;
  right: string;
}

export default function DualToggleButtons({ left, right }: btnText) {
  const [active, setActive] = useState<"left" | "right">("left");

  return (
    <div className="flex border-b-2 border-white bg-white/10 backdrop-blur-[5px] rounded-full gap-[10px] p-[10px] w-[367px] h-[82px] items-center justify-center">
      {/* left Button */}
      <a
        href="https://drive.google.com/drive/folders/1d6qd-R6WRXn3c1IJHFkpBB2As0Ru5CnF?usp=sharing"
        target="black"
      >
        <button
          onMouseEnter={() => setActive("left")}
          className={`group flex items-center justify-center gap-2.5 px-5 py-2.5 rounded-[60px] transition-all duration-300 ease-in-out cursor-pointer
          ${
            active === "left"
              ? "bg-[#FD853A] text-white font-medium text-[25px] w-[208px] h-[62px] border border-[#D0D5DD] shadow-md"
              : "bg-transparent text-white font-light text-[18px] w-[129px] h-[54px]"
          }`}
        >
          {left}
          <ArrowUpRight
            size={16}
            className={`transition-all duration-300 ${
              active === "left"
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-1 group-hover:opacity-100"
            }`}
          />
        </button>
      </a>
      {/* right Me Button */}
      <button
        onMouseEnter={() => setActive("right")}
        className={`group flex items-center justify-center gap-2.5 px-5 py-2.5 rounded-[60px] transition-all duration-300 ease-in-out cursor-pointer
          ${
            active === "right"
              ? "bg-[#FD853A] text-white font-medium text-[25px] w-[208px] h-[62px] border border-[#D0D5DD] shadow-md"
              : "bg-transparent text-white font-light text-[18px] w-[129px] h-[54px]"
          }`}
      >
        {right}
        <ArrowUpRight
          size={16}
          className={`transition-all duration-300 ${
            active === "right"
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-1 group-hover:opacity-100"
          }`}
        />
      </button>
    </div>
  );
}
