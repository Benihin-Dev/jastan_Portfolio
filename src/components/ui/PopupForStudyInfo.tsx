import React from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

function CertificateIcon({ size = 22, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M15 15m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
      <path d="M13 17.5v4.5l2 -1.5l2 1.5v-4.5" />
      <path d="M10 19h-5a2 2 0 0 1 -2 -2v-10c0 -1.1 .9 -2 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -1 1.73" />
      <path d="M6 9l12 0" />
      <path d="M6 12l3 0" />
      <path d="M6 15l2 0" />
    </svg>
  );
}

export default function PopupForStudyInfo({ onClose }: { onClose: () => void }) {
  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className="relative overflow-hidden w-11/12 sm:w-10/12 lg:w-8/12 py-10 rounded-2xl shadow-xl shadow-[#313131] h-fit bg-white  mx-auto flex flex-col items-start gap-6 px-2 sm:px-5 text-[14px]  text-center lg:text-[16px] text-[#344054]"
    >
      {/* Close button: black corner tab + brush-stroke white cross (same as feedback popup) */}
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

      <div className=" relative w-20  mx-auto pb-5 ">
        <Image
          src="/borderDes.png"
          alt="message icon"
          className=" absolute rotate-180  top-0 left-1/2 -translate-1/2  h-auto"
          width={160}
          height={20}
        />
      </div>
      <p className=" w-full">
        I completed my Bachelor&apos;s degree with a specialization in
        Industrial Biosystems Technology. Throughout my degree, I gained
        comprehensive knowledge in molecular biology, microbiology,
        biotechnology, biopharmaceuticals, animal and plant cell culture, and
        bioprocess technology. As part of my undergraduate studies, I conducted
        research in the field of aquaculture titled &quot;Impact of Salinity
        Levels on the Growth Rate of Saline Tilapia in Cement Tanks.&quot; This
        research was published at the International Conference on Innovation and
        Emerging Technologies (ICIET) 2025, marking an important milestone in my
        academic journey.
      </p>
      <p className=" w-full">
        Ric, SCJ (2025). Impact of salinity levels on the growth rate of saline
        tilapia in cement tanks. In Proceedings of the International Conference
        on Innovation and Emerging Technologies (ICIET 2025) (p. 66). Faculty of
        Technology, University of Sri Jayewardenepura.
        <br />{" "}
        <a
          href="https://iciet.sjp.ac.lk/conference-proceedings/"
          className="text-blue-500 underline wrap-normal"
        >
          https://iciet.sjp.ac.lk/conference-proceedings/
        </a>
      </p>
      <a
        href="https://iciet.sjp.ac.lk/conference-proceedings/"
        target="_blank"
        rel="noopener noreferrer"
        className="group mx-auto flex items-center justify-center gap-2 px-8 py-[15px] text-[16px] font-bold text-white bg-gradient-to-br from-[#d9822b] to-[#c4651a] rounded-[14px] shadow-[0_8px_18px_rgba(217,130,43,0.4)] cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-[0_12px_24px_rgba(217,130,43,0.55)] active:scale-[0.98]"
      >
        <CertificateIcon size={22} />
        Published at ICIET 2025
        <ArrowUpRight
          size={20}
          className="transition-transform duration-300 group-hover:rotate-45"
        />
      </a>
    </div>
  );
}
