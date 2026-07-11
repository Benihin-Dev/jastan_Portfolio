"use client";
import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { blogs } from "@/data/data";
import Blog from "./ui/Blog";

interface SliderForBlogProps {
  viewPort: "desktop" | "tablet" | "mobile" | string;
}

export default function SliderForBlog({ viewPort }: SliderForBlogProps) {
  const slides = blogs.map((item) => item);
  const sliderRef = useRef<Slider>(null);

  // Test by applying styles directly
  const dotStyles = {
    width: "35px",
    height: "3px",
    borderRadius: "5%",
    backgroundColor: "#a0a0a0",
  };

  const activeDotStyles = {
    ...dotStyles,
    backgroundColor: "#000000",
  };

  return (
    <div className={` w-full px-1 sm:px-0  pb-10  h-full  relative  `}>
      <Slider
        ref={sliderRef}
        dots={false}
        infinite={true}
        arrows={false}
        slidesToShow={
          viewPort === "desktop" ? 3 : viewPort === "tablet" ? 2 : 1
        }
        slidesToScroll={1}
        autoplay={true}
        autoplaySpeed={6000}
        speed={500}
        dotsClass="slick-dots custom-dots top-[85%] md:left-[110px] lg:left-[210px] md:top-[-20%] "
        customPaging={(i) => {
          const currentSlide = (
            sliderRef.current as unknown as {
              innerSlider?: { state: { currentSlide: number } };
            }
          )?.innerSlider?.state.currentSlide;

          return (
            <div
              className="flex items-center justify-center gap-10"
              style={i === currentSlide ? activeDotStyles : dotStyles}
            ></div>
          );
        }}
        responsive={[
          {
            breakpoint: 768,
            settings: {
              slidesToShow:
                viewPort === "desktop" ? 3 : viewPort === "tablet" ? 2 : 1,
            },
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow:
                viewPort === "desktop" ? 3 : viewPort === "tablet" ? 2 : 1,
            },
          },
        ]}
      >
        {slides.map((item, i) => (
          <div key={i} className={` w-full h-full px-5 md:px-0  `}>
            <Blog
              name={item.name}
              image={item.image}
              title={item.title}
              link={item.link}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
