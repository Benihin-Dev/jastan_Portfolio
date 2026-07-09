import Image from "next/image";
import React from "react";
import { Blog as BlogType } from "../../data/data";

interface BlogProps extends BlogType {
  priority?: boolean;
}

const Blog: React.FC<BlogProps> = ({
  image,
  name,
  title,
  link,
  priority = false,
}) => {
  return (
    <div className="flex flex-col w-full items-start gap-[35px]  scale-80">
      <a href={link} target="blank">
        <div className="relative w-full  gap-[10px] rounded-4xl overflow-hidden items-start group ">
          <Image
            src={image}
            alt="image"
            width={416}
            height={432}
            className="w-full h-full object-cover cursor-pointer group-hover:scale-103 transition-all duration-400"
            priority={priority}
          />
          {/* <div className="absolute z-30 bottom-0 size-32 bg-[#ffffff00] right-0  rounded-full flex items-center justify-center translate-1/9 ">
            <div className="rounded-full bg-[#1D2939] group-hover:bg-[#FD853A] transition-all duration-300">
              <ArrowButton
                className="transition-all duration-300 stroke-white -rotate-45"
                height={100}
                width={100}
              />
            </div>
          </div> */}
          <div className="absolute w-full h-full top-0 group-hover:translate-y-[50%] duration-400 transition-all left-0 z-20 bg-gradient-to-t from-[#2a512ad3] flex items-end to-transparent ">
            <div className=" w-full px-5 md:px-10 md:py-10 py-5">
              <p className=" text-2xl font-semibold text-[#72be5f] tracking-[2px]">
                {name}
              </p>
              <p className=" text-3xl italic text-white leading-6">{title}</p>
            </div>
          </div>
        </div>
      </a>
      {/* <div className="flex flex-col gap-[35px] items-start">
        <ClientOnly>
          <button className="w-[196px] h-[54px] rounded-3xl flex items-center justify-center px-[32px] py-[15px] bg-[#F2F4F7] text-[#000000] text-[20px]">
            {button}
          </button>
        </ClientOnly>

        <div className="flex items-start gap-[35px]">
          <div className="flex items-center gap-2.5">
            <span className="bg-[#FD853A] w-[9px] h-[9px] rounded-full"></span>
            <span className="text-[#344054] text-[20px]">{name}</span>
          </div>
          <div className="flex items-center gap-2.5">
            <span className="bg-[#FD853A] w-[9px] h-[9px] rounded-full"></span>
            <span className="text-[#344054] text-[20px]">{date}</span>
          </div>
        </div>

        <h3 className="w-[416px] h-[84px] text-[32px] text-[#344054]">
          {title ?? 'Design Unraveled: Behind the Scenes of UI/UX Magic'}
        </h3>
      </div> */}
    </div>
  );
};

export default Blog;
