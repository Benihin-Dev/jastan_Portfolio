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
  date,
  priority = false,
}) => {
  return (
    // <div className=" w-full md:scale-80">
    //   <a href={link} target="blank">
    //     <div className="relative w-full  rounded-3xl gap-[10px] overflow-hidden items-start group ">
    //       <Image
    //         src={image}
    //         alt="image"
    //         width={416}
    //         height={432}
    //         className="w-full h-full object-cover cursor-pointer transition-all duration-400"
    //         priority={priority}
    //       />
    //       <div className="absolute z-30 bottom-0 w-[22%] aspect-square bg-[#ffffff] right-0  rounded-full flex items-center justify-center translate ">
    //         <div className="rounded-full flex items-center justify-center  w-full h-full bg-[#1D2939] group-hover:bg-[#FD853A] transition-all duration-300">
    //           <ArrowUpLeft className="transition-all size-[70%] duration-300 stroke-white stroke-1 rotate-90  " />
    //         </div>
    //       </div>

    //       <div className="absolute  rounded-3xl w-full h-4/5 top-0 group-hover:-translate-y-[50%] md:group-hover:translate-y-[0%] md:-translate-y-[50%] duration-400 transition-all left-0 z-20 bg-gradient-to-b from-[#2a512ad1]  md:from-[#2a512ade]  flex to-transparent ">
    //         <div className=" w-full px-5 md:px-10 md:py-10 py-5">
    //           <p className=" text-sm md:text-xl scale-y-130 text-[#6bc255] tracking-[2px]">
    //             {name}
    //           </p>
    //           <p className=" text-sm md:text-2xl italic text-[#cdcdcd] leading-4 md:leading-6">
    //             {title}
    //           </p>
    //         </div>
    //       </div>
    //     </div>
    //   </a>
    // </div>
    <div className=" w-full md:px-5 pb-2 ">
      <a href={link}>
        <div className=" w-full px-5 py-8 cursor-pointer group duration-300 transition-all  bg-white shadow-[6px_6px_2px_-2px_#bababa]">
          <div className=" w-full h-fit overflow-hidden">
            <Image
              src={image}
              alt="image"
              width={426}
              height={300}
              className="w-full h-full group-hover:scale-110  object-cover cursor-pointer bg-[#bababa] transition-all duration-400"
              priority={priority}
            />
          </div>
          <div className=" w-full pt-5">
            <h2 className=" font-semibold text-xl text-[#262626] scale-y-110 pb-1">
              {name}
            </h2>
            <p className=" text-gray-500  font-thin">
              {date} | <span className=" italic"> {title}</span>
            </p>
          </div>
        </div>
      </a>
    </div>
  );
};

export default Blog;
