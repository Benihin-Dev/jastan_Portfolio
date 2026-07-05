"use client";
import React, { useEffect, useState } from "react";
import SliderForReview from "@/components/SliderForReview";
import Image from "next/image";
import CustomeText from "@/components/ui/CustomeText";
import { reviews } from "../data/data";
import { Review } from "@/data/data";
import FormForReview from "./ui/FormForReview";
import { ArrowUpRight } from "lucide-react";

const SHEET_API_URL =
  "https://script.google.com/macros/s/AKfycbz-xZziHZR0U5_AuKoM7xP5HEgvQ6rC6Hp6t6-exZihfGruWgPqmKXrU5r1X7kFLnhj/exec";

export default function Testimonials() {
  const [reviewData, setReviewData] = useState<Review[]>(reviews);
  async function fetchReviews() {
    try {
      const res = await fetch(SHEET_API_URL);

      if (!res.ok) {
        throw new Error(`Request failed with status ${res.status}`);
      }

      const data = await res.json();
      console.log(data);

      if (!Array.isArray(data) || data.length === 0) {
        throw new Error("No data returned from sheet");
      }

      const mapped: Review[] = data.map((row: any) => ({
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

  const handleClick = () => {
    handleSubmit({
      name: "You",
      country: "South Korea",
      role: "Wildlife Photographer",
      rating: "5",
      description:
        "Jastan's knowledge of local wildlife is incredible. Highly recommend his guided tours.",
    })
      .then((result) => console.log("Submitted:", result))
      .catch((err) => console.error("Error:", err));
  };

  return (
    <div className="relative flex flex-col w-full items-center pt-16 pb-10 gap-10 bg-[#171717] overflow-hidden">
      <Image
        src="/Frame 77.svg"
        alt="image"
        fill
        className="object-cover opacity-50"
      />

      <div className="flex flex-col w-full max-w-[1299px] items-center gap-4 z-10 px-2">
        <div
          onClick={() => {
            handleClick();
          }}
          className="flex flex-col items-center max-w-full sm:max-w-[448px]"
        >
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
        <p className="w-full max-w-[742px] text-[16px] sm:text-[18px] lg:text-[20px] text-[#F9FAFB] text-center leading-[1.6] px-2">
          Insights and feedback from professors, research collaborators, and
          peers who&apos;ve supported my path in environmental science and
          wildlife conservation.
        </p>
      </div>

      <div className="bottom-[20%] left-0 right-0 w-full z-10">
        {/* for Desktop */}
        <div className="hidden lg:flex w-full justify-center">
          <SliderForReview data={reviewData} type="normal" viewPort="desktop" />
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
        <div className=" w-full flex items-center justify-center">
          <div className="flex border border-[#ffffff83] bg-white/10 backdrop-blur-[5px] rounded-xl gap-[10px] ppx] items-center justify-center">
            {/* left Button */}
            <button
              className={`group flex items-center justify-center gap-2.5 px-5 py-2.5 rounded-[60px] transition-all duration-300 ease-in-out cursor-pointer bg-[#FD853A] text-white font-medium text-[25px] border border-[#D0D5DD] shadow-md  `}
            >
              Add Review +
            </button>

            {/* right Me Button */}
            <button
              className={`group flex items-center justify-center gap-2.5 px-5 py-2.5 rounded-[60px] transition-all duration-300 bg-[#FD853A] text-white font-medium text-[25px] w-[208px] h-[62px] border border-[#D0D5DD] shadow-md  `}
            >
              View all reviews
              <ArrowUpRight
                size={16}
                className={`transition-all duration-300 opacity-100 translate-x-0 group-hover:opacity-100`}
              />
            </button>
          </div>
        </div>
      </div>
      <div className=" w-full hidden">
        <FormForReview />
      </div>
    </div>
  );
}
