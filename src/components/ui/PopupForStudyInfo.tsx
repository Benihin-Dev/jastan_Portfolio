import React from "react";
import Image from "next/image";

export default function PopupForStudyInfo() {
  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className="w-11/12 sm:w-10/12 lg:w-8/12 py-10 rounded-2xl shadow-xl shadow-[#313131] h-fit bg-white  mx-auto flex flex-col items-start gap-6 px-2 sm:px-5 text-[14px]  text-center lg:text-[16px] text-[#344054]"
    >
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
        I completed my Bachelor&apos;s degree with a specialization in{" "}
        <span className=" bg-[#FD853A] text-white">
          {" "}
          Industrial Biosystems Technology.
        </span>{" "}
        Throughout my degree, I gained comprehensive knowledge in molecular
        biology, microbiology, biotechnology, biopharmaceuticals, animal and
        plant cell culture, and bioprocess technology. As part of my
        undergraduate studies, I conducted research in the field of aquaculture
        titled{" "}
        <span className=" bg-[#FD853A] text-white">
          {" "}
          &quot;Impact of Salinity Levels on the Growth Rate of Saline Tilapia
          in Cement Tanks.&quot;
        </span>{" "}
        This research was published at the{" "}
        <span className=" bg-[#FD853A] text-white">
          {" "}
          International Conference on Innovation and Emerging Technologies
          (ICIET) 2025,
        </span>{" "}
        marking an important milestone in my academic journey.
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

      <div className=" w-20 relative mx-auto   pb-5   ">
        <Image
          src="/borderDes.png"
          alt="message icon"
          className=" absolute  top-0 left-1/2 -translate-1/2 mt-3   h-auto"
          width={160}
          height={20}
        />
      </div>
    </div>
  );
}
