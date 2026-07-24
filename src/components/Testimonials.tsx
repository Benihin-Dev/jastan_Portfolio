"use client";
import React, { useEffect, useState } from "react";
import SliderForReview from "@/components/SliderForReview";
import Image from "next/image";
import CustomeText from "@/components/ui/CustomeText";
import { reviews } from "../data/data";
import { Review } from "@/data/data";
import FormForReview from "./ui/FormForReview";
import { ArrowUpRight, CopyPlus, CircleFadingPlus } from "lucide-react";
import AllTestimonials from "./ui/AllTestimonials";

const SHEET_API_URL =
  "https://script.google.com/macros/s/AKfycbz-xZziHZR0U5_AuKoM7xP5HEgvQ6rC6Hp6t6-exZihfGruWgPqmKXrU5r1X7kFLnhj/exec";

interface SheetRow {
  name?: string;
  role?: string;
  country?: string;
  rating?: string | number;
  description?: string;
}

export default function Testimonials() {
  const [reviewData, setReviewData] = useState<Review[]>(reviews);
  async function fetchReviews() {
    try {
      const res = await fetch(SHEET_API_URL);

      if (!res.ok) {
        throw new Error(`Request failed with status ${res.status}`);
      }

      const data: SheetRow[] = await res.json();

      if (!Array.isArray(data) || data.length === 0) {
        throw new Error("No data returned from sheet");
      }

      const mapped: Review[] = data.map((row: SheetRow) => ({
        name: row.name || "",
        role: row.role || "",
        country: row.country || "",
        rating: Number(row.rating) || 0,
        desc: row.description || "",
      }));

      setReviewData(mapped);
    } catch (err) {
      console.error("Failed to fetch reviews, using fallback data:", err);
      setReviewData(reviews);
    }
  }
  useEffect(() => {
    fetchReviews();
  }, []);

  async function handleSubmit(formData: {
    name: string;
    role: string;
    country: string;
    rating: string;
    description: string;
  }) {
    try {
      await fetch(SHEET_API_URL, {
        method: "POST",
        mode: "no-cors",
        body: JSON.stringify(formData),
      });
      fetchReviews();
      return { status: "sent" };
    } catch (err) {
      console.error("Submit failed:", err);
      return { status: "error" };
    }
  }

  //   for form
  const [popUpState, setPopUpState] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const closePopup = () => {
    setPopUpState(false); // triggers fade-out transition
    setTimeout(() => setIsVisible(false), 300); // matches duration-300, then unmounts/hides
  };

  //   for show all reviews
  const [showAll, setShowAll] = useState(false);
  const [showAllVisible, setShowAllVisible] = useState(false);

  const openAllTestimonials = () => {
    setShowAllVisible(true);
    requestAnimationFrame(() => setShowAll(true));
  };

  const closeAllTestimonials = () => {
    setShowAll(false);
    setTimeout(() => setShowAllVisible(false), 100);
  };

  return (
    <div className="relative flex flex-col w-full items-center pt-16 sm:pb-10 gap-10 bg-[#171717]">
      <Image
        src="/Frame 77.svg"
        alt="image"
        fill
        className="object-cover opacity-50"
      />

      <div className="flex flex-col w-full max-w-[1299px] items-center gap-4 z-10 px-2">
        <div className="flex flex-col items-center max-w-full sm:max-w-[448px]">
          <CustomeText
            title="Testimonials That"
            className="font-medium text-[28px] sm:text-[36px] lg:text-[48px] text-[#FCFCFD] text-center"
          />
          <div className="flex flex-wrap gap-2.5 justify-center">
            <CustomeText
              title="Reflect My"
              className="font-medium text-[28px] sm:text-[36px] lg:text-[48px] text-[#FCFCFD]"
            />
            <CustomeText
              title="Journey"
              className="font-medium text-[28px] sm:text-[36px] lg:text-[48px] text-[#FD853A]"
            />
          </div>
        </div>
      </div>

      <div className="bottom-[20%] left-0 right-0 w-full z-10">
        {/* for Desktop */}
        <div className="hidden lg:flex 2xl:hidden w-full justify-center">
          <SliderForReview data={reviewData} type="normal" viewPort="desktop" />
        </div>{" "}
        <div className="hidden 2xl:flex w-full justify-center">
          <SliderForReview
            data={reviewData}
            type="normal"
            viewPort="L-desktop"
          />
        </div>
        {/* for Tablet */}
        <div className="hidden md:block lg:hidden w-full">
          <SliderForReview data={reviewData} type="normal" viewPort="tablet" />
        </div>
        {/* for Mobile */}
        <div className="md:hidden w-full">
          <SliderForReview data={reviewData} type="normal" viewPort="mobile" />
          <div className="w-full -translate-y-24">
            <SliderForReview
              data={reviewData.toReversed()}
              type="rotate"
              viewPort="mobile"
            />
          </div>
        </div>
        {/* Btn */}
        <div className=" w-full flex items-center justify-end -translate-y-16 sm:translate-y-0">
          <div className="flex items-center justify-center gap-2 scale-80 translate-x-[10%] sm:translate-x-0 sm:scale-100">
            {/* left Button */}
            <a href="https://g.page/r/CaGmieHCmSRvEBM/review">
              <button
                className={`group flex items-center justify-center gap-2.5 px-5 py-2.5 rounded-xl transition-all duration-300 ease-in-out cursor-pointer bg-white/10 backdrop-blur-[5px] text-[white] border border-[#c9c9c994] shadow-md  hover:bg-[#ffffff70]  hover:text-[#000000] `}
              >
                {" "}
                <span className=" whitespace-nowrap">Share Your Sighting</span>
                <CopyPlus
                  size={16}
                  className={`transition-all duration-300 opacity-100 translate-x-0 group-hover:opacity-100`}
                />
              </button>
            </a>

            {/* right Me Button */}
            <button
              onClick={openAllTestimonials}
              className={`group cursor-pointer flex items-center justify-center gap-2.5 px-5 py-2.5 rounded-l-xl transition-all duration-300 bg-[#fd853aa6] text-white border border-[#a8a8a8] shadow-md  hover:bg-[#fd853a] `}
            >
              <span className=" whitespace-nowrap">Explore All Stories</span>
              <ArrowUpRight
                size={16}
                className={`transition-all duration-300 opacity-100 translate-x-0 group-hover:opacity-100`}
              />
            </button>
          </div>
        </div>
      </div>
      <a href="https://g.page/r/CaGmieHCmSRvEBM/review">
        <div className=" absolute -top-0 -translate-y-1/2 left-5 size-[64px] cursor-pointer hover:scale-110 border border-[#f2f4f7] focus:scale-110 duration-300 flex items-center justify-center bg-[#fd853ae2] backdrop-blur-[14px] rounded-full z-[60]">
          <CircleFadingPlus className=" font-thin size-12 text-[#000000] " />
        </div>
      </a>
      {/* Form for get reviews */}
      {isVisible && (
        <div
          onClick={closePopup}
          className={`transition-opacity duration-200 w-full h-full bg-[#18181874] backdrop-blur-[5px] fixed top-0 left-0 flex justify-center items-center z-61 ${
            popUpState ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            className={`transition-all duration-300 w-full z-[62] ${
              popUpState ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
          >
            <FormForReview
              onSubmit={async (formData) => {
                const result = await handleSubmit(formData);
                return result;
              }}
              closePopup={closePopup}
            />
          </div>
          <Image
            src="/Frame 77.svg"
            alt="image"
            fill
            className="object-cover opacity-90 sm:hidden"
          />
        </div>
      )}
      {/* List all reviews */}
      {showAllVisible && (
        <div
          onClick={closeAllTestimonials}
          className={`transition-all duration-200 w-full h-screen bg-[#18181874] backdrop-blur-[5px] fixed top-0 left-0 flex justify-center items-center z-[65] ${
            showAll ? "opacity-100 " : "opacity-0 "
          }`}
        >
          <AllTestimonials
            reviews={reviewData}
            onClose={closeAllTestimonials}
          />
          <Image
            src="/Frame 77.svg"
            alt="image"
            fill
            className="object-cover opacity-100"
          />
        </div>
      )}
    </div>
  );
}
