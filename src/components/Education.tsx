"use client";
import React, { useState } from "react";
import CustomeText from "@/components/ui/CustomeText";
import { experiences } from "@/data/data";
import PopupForStudyInfo from "@/components/ui/PopupForStudyInfo";
import { Link } from "lucide-react";

export default function Education() {
  const [popUpState, setPopUpState] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const handlePopup = (index: number) => {
    if (index === 1) {
      setIsVisible(true);
      // slight delay so the element is mounted before opacity transitions in
      requestAnimationFrame(() => setPopUpState(true));
    }
  };

  const closePopup = () => {
    setPopUpState(false); // triggers fade-out transition
    setTimeout(() => setIsVisible(false), 300); // matches duration-300, then unmounts/hides
  };
  return (
    <div className="w-full flex flex-col items-start mx-auto pb-10 md:pb-16 lg:pb-0">
      <div className="w-full pb-16 md:pb-10 md:flex items-start justify-center space-x-2.5 text-center lg:text-lef translate-y-10">
        <CustomeText
          title="My"
          className="font-medium text-[32px] sm:text-5xl lg:text-6xl text-[#344054]"
        />
        <CustomeText
          title="Educational Qualification"
          className="font-medium text-[32px] sm:text-5xl lg:text-6xl text-[#FD853A]"
        />
      </div>
      <div className="w-11/12 mx-auto sm:px-5 pt-10 lg:hidden">
        {experiences.map((exp, index) => (
          <div
            key={index}
            onClick={() => {
              handlePopup(index);
            }}
            className="mb-8 last:mb-0"
          >
            <div className="flex items-start gap-4 relative">
              <div className="relative flex-shrink-0 mt-2">
                <div className="w-6 h-6 rounded-full border-2 border-dashed border-[#1D2939] bg-white" />
                <div
                  className={`absolute top-1 left-1 w-4 h-4 rounded-full ${exp.dotColor}`}
                />
              </div>

              <div className="flex-1">
                <CustomeText
                  title={exp.company}
                  className="font-semibold text-[#1D2939] text-[20px] sm:text-[24px] mb-1 pr-5"
                />
                <CustomeText
                  title={exp.duration}
                  className="text-[#98A2B3] text-[14px] sm:text-[16px] mb-2"
                />
                <CustomeText
                  title={exp.role}
                  className="font-semibold text-[#1D2939] text-[18px] sm:text-[20px] mb-2"
                />
                {exp.desc && (
                  <CustomeText
                    title={exp.desc}
                    className="text-[#98A2B3] text-[14px] sm:text-[16px] leading-relaxed"
                  />
                )}
              </div>
              <div
                className={` absolute left-[100%] -translate-x-5 text-gray-500 xl:left-[90%] top-0 translate-y-1/3 hover:text-[#FD853A]  duration-300 ${index === 1 ? "block" : "hidden"}`}
              >
                <Link className="size-5" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full hidden scale-75 -translate-x-8 lg:flex justify-evenly">
        <div className="flex flex-col justify-between w-[500px] gap-[60px]">
          {experiences.map((exp, index) => (
            <div key={index} className="flex flex-col gap-[14px] relative">
              <CustomeText
                title={exp.role}
                className="font-semibold text-[#1D2939] text-[40px] opacity-0"
              />
              {exp.desc && (
                <CustomeText
                  title={exp.desc}
                  className="text-2xl text-[#98A2B3] opacity-0"
                />
              )}
              <div key={index} className="flex flex-col gap-[14px] absolute">
                <CustomeText
                  title={exp.company}
                  className="font-semibold text-[#1D2939] text-[40px]"
                />
                <CustomeText
                  title={exp.duration}
                  className="text-2xl text-[#98A2B3]"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="relative flex -translate-x-5 flex-col items-center justify-between">
          <div className="absolute top-0 bottom-0 w-[2px] border-l-2 border-dashed border-[#1D2939]" />
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={` relative flex items-center justify-center w-12 h-12 ${index === 1 ? "-translate-y-[160%]" : index === 2 ? "-translate-y-[180%]" : "translate-0"} `}
            >
              <div className="absolute w-12 h-12 rounded-full border-2 border-dashed border-[#1D2939] bg-white" />
              <div className={`w-9 h-9 rounded-full z-10 ${exp.dotColor}`} />
            </div>
          ))}
        </div>
        <div
          className={` flex flex-col justify-between w-[500px] lg:w-[500px] xl:w-[600px] 2xl:w-[700px] gap-[60px] translate-x-10`}
        >
          {experiences.map((exp, index) => (
            <div
              key={index}
              onClick={() => {
                handlePopup(index);
              }}
              className={`flex flex-col gap-[14px] relative ${index === 1 ? "cursor-pointer group duration-300" : ""} `}
            >
              <CustomeText
                title={exp.role}
                className="font-semibold text-[#1D2939] text-[40px] group-hover:text-[#FD853A]  duration-300"
              />
              {exp.desc && (
                <CustomeText
                  title={exp.desc}
                  className="text-2xl text-[#98A2B3] "
                />
              )}
              <div
                className={` absolute left-[100%] text-gray-500 xl:left-[90%] top-0 translate-y-1/2 hover:text-[#FD853A]  duration-300 ${index === 1 ? "block" : "hidden"}`}
              >
                <Link className="size-8" />
              </div>
            </div>
          ))}
        </div>
      </div>
      {isVisible && (
        <div
          onClick={closePopup}
          className={`transition-opacity duration-200 w-full h-full bg-[#18181874] backdrop-blur-[5px] fixed top-0 left-0 flex justify-center items-center z-[69] ${
            popUpState ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            // onClick={(e) => e.stopPropagation()}
            className={`transition-all duration-300 ${
              popUpState ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
          >
            <PopupForStudyInfo />
            <div className="w-11/12 sm:w-10/12 lg:w-8/12 mx-auto mt-1 flex items-center justify-center">
              <button
                onClick={closePopup}
                className={`group flex items-center w-full sm:w-fit justify-center gap-2.5 px-10 py-2.5 rounded-[60px] transition-all duration-300 ease-in-out cursor-pointerborder-white bg-[#ffffff59]  backdrop-blur-[5px]  hover:bg-[#FD853A]  text-white border border-[white]"
          }`}
              >
                Close
                {/* <X size={16} className={`transition-all duration-300 `} /> */}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
