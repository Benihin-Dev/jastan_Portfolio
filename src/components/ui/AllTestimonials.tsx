"use client";
import React from "react";
import { Star, Link } from "lucide-react";
import { Review } from "@/data/data";

interface AllTestimonialsProps {
  reviews: Review[];
  onClose?: () => void;
}

export default function AllTestimonials({
  reviews,
  onClose,
}: AllTestimonialsProps) {
  return (
    <div
      onClick={onClose}
      className="fixed top-0 left-0 w-full h-screen  bg-[#00000067] z-[65] flex items-center justify-center px-4 sm:px-6 lg:px-10 py-10"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-[1200px] h-full flex flex-col gap-4"
      >
        <div className="flex items-center justify-between">
          <h2 className="text-[20px] sm:text-[24px] lg:text-[28px] font-semibold text-[#ffffff]">
            All Testimonials
          </h2>
          {onClose && (
            <button
              onClick={onClose}
              className="text-[#98A2B3] hover:text-[#FD853A] transition-colors text-[30px] -translate-x-1/2 leading-none"
              aria-label="Close"
            >
              &times;
            </button>
          )}
        </div>

        <div className="w-full flex-1 overflow-y-auto rounded-2xl custom-scrollbar">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-5 lg:gap-6 pb-4">
            {reviews.map((review, index) => (
              <div
                onClick={() => {
                  window.location.href =
                    "https://g.page/r/CaGmieHCmSRvEBM/review";
                }}
                key={index}
                className="flex flex-col gap-3 bg-white rounded-2xl p-5 sm:p-6 relative shadow-sm border border-[#EAECF0]  hover:border-[#FD853A] duration-150"
              >
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      size={16}
                      className={
                        star <= review.rating
                          ? "text-[#FD853A] fill-[#FD853A]"
                          : "text-[#D0D5DD]"
                      }
                    />
                  ))}
                </div>

                <p className="text-[13px] sm:text-[14px] text-[#475467] leading-relaxed">
                  {review.desc}
                </p>

                <div className="flex flex-col mt-auto pt-2 relative">
                  <span className="text-[14px] sm:text-[15px] font-semibold text-[#1D2939]">
                    {review.name}
                  </span>
                  <span className="text-[12px] sm:text-[13px] text-[#98A2B3]">
                    {review.role}
                    {review.country ? ` · ${review.country}` : ""}
                  </span>
                  <a href="https://g.page/r/CaGmieHCmSRvEBM/review">
                    <div className=" w-10 absolute bottom-0 right-0 text-gray-500">
                      <Link className=" size-4 translate-x-full cursor-pointer hover:scale-110 duration-300 hover:text-[#FD853A] transition-all" />
                    </div>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
