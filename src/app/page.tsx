import Navbar from "@/components/Navbar";
import CustomeText from "@/components/ui/CustomeText";
import DualToggleButtons from "@/components/ui/DualButtons";
import Image from "next/image";
import { Star } from "lucide-react";
import ClientOnly from "@/components/ui/ClientOnly";
import Testimonials from "@/components/Testimonials";
import Education from "@/components/Education";
import SliderForBlog from "@/components/SliderForBlog";
import Contact from "@/components/Contact";
import HireMe from "@/components/HireMe";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full bg-white py-10 flex flex-col items-center justify-start">
      <div className=" fixed z-[99] top-7 left-0 w-full">
        <Navbar />
      </div>

      {/* Hero Section */}
      <div
        id="home"
        className="group flex flex-col md:flex-row w-full  px-4 sm:px-6 md:px-8 gap-6 sm:gap-8 md:gap-[71px] items-center justify-center mt-20 scroll-mt-[100px] "
      >
        <div className="hidden lg:flex flex-col w-[328px] h-[138px] items-start justify-start transition-transform duration-300 ease-in-out group-hover:-translate-y-[250px] group-focus:-translate-y-[250px]">
          <div className="text-[#344054] text-[36px] leading-none">&quot;</div>
          <div className="text-[#344054] text-[16px] w-full font-medium leading-snug relative">
            <p className="absolute top-0 left-0 w-[130%]">
              Passionate about discovering the wonders of nature through
              wildlife, forestry, and environmental science.
            </p>
          </div>
        </div>

        <div className="relative w-full flex flex-col items-center justify-center   ">
          <div className="flex w-full flex-col items-center justify-center  transition-all  duration-300 ease-in-out group-hover:translate-y-[280px] group-hover:opacity-0 px-4 sm:px-0 ">
            <ClientOnly>
              <button className="h-[45px] px-[26px] py-[13px] translate-y-0 md:translate-y-10 rounded-full border border-[#171717] flex items-center justify-center bg-white mt-5 lg:mt-10">
                Hello!
              </button>
            </ClientOnly>
            <div className="flex flex-col sm:flex-row sm:gap-2 items-center sm:items-end mb-1 mt-6 sm:mt-8 ">
              <CustomeText
                title="I'm"
                className="text-[#171717] font-semibold text-5xl md:text-7xl xl:text-[74px]"
              />
              <div className="flex items-end">
                <CustomeText
                  title="Jastan Ric"
                  className="text-[#FD853A] font-semibold text-5xl md:text-7xl xl:text-[74px]"
                />
                <CustomeText
                  title=","
                  className="text-[#171717] font-semibold text-5xl md:text-7xl xl:text-[74px]"
                />
              </div>
            </div>
            <CustomeText
              title="Environmental Steward"
              className="text-[#171717] font-semibold text-5xl md:text-7xl xl:text-[74px] scale-y-110  text-center"
            />
          </div>

          <div className="relative w-full max-w-[952px] mt-16 aspect-[3/2] flex flex-col items-center justify-center  mx-auto px-4">
            <div className="absolute bottom-0 z-0 w-[90%] max-w-[812px] aspect-[2/1] overflow-hidden flex items-center justify-center pointer-events-auto">
              <div className="absolute w-full h-full bg-[#FEB273] rounded-t-full" />
            </div>

            <div className="absolute z-10 transition-all duration-500 ease-in-out opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-105">
              <Image
                src="/Frame 68.svg"
                alt="Frame Decoration"
                width={1024}
                height={688}
                className="object-contain w-full h-auto"
                priority
              />
            </div>

            <Image
              src="/jastanR3.png"
              alt="jastanRic"
              width={888}
              height={888}
              quality={90}
              className="absolute bottom-0 z-20 w-full  translate-y-10 sm:w-10/12 md:w-10/12 lg:w-11/12 xl:w-10/12 mx-auto h-auto object-cover"
              priority
            />

            <div className="absolute bottom-[10%] z-50 w-full scale-75 md:scale-100 flex justify-center">
              <DualToggleButtons left="Resume" right="Hire Me" />
            </div>
          </div>
        </div>

        <div className="hidden lg:flex w-[169px] h-[125px] flex-col items-end justify-end gap-2 transition-transform duration-300 ease-in-out group-hover:-translate-y-[250px]">
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={32} fill="#FD853A" stroke="#FD853A" />
            ))}
          </div>
          <h1 className="text-[32px] font-bold text-[#171717] leading-none whitespace-nowrap">
            Naturalist
          </h1>
          <p className="text-sm text-[#171717]"> Wildlife Enthusiast</p>
        </div>
      </div>

      {/* About Me */}
      <div
        id="about"
        className="relative flex flex-col w-full mb-10 z-30 items-center px-6 sm:px-6 md:px-16 lg:px-20  bg-[#171717] rounded-[30px] sm:rounded-[50px] overflow-hidden scroll-mt-[100px] "
      >
        <Image
          src="/Frame 77.svg"
          alt="image"
          fill
          className="object-cover absolute opacity-50"
        />
        <div className="flex gap-2.5 z-10 pt-5 w-full items-start max-w-7xl">
          <CustomeText
            title="About"
            className="font-medium text-3xl sm:text-4xl lg:text-5xl text-[#FCFCFD]"
          />
          <CustomeText
            title="Me"
            className="font-medium text-3xl sm:text-4xl lg:text-5xl text-[#FD853A]"
          />
        </div>
        <div className=" w-full flex items-center justify-between max-w-[120 0px] 2xl: max-w-7xl">
          <div className="w-full lg:w-[70%] xl:w-[60% py-10 xl:py-0 flex flex-col  items-center justify-between gap-6 relative z-10">
            <div className="relative flex  justify-center items-center w-full rounded-[37px] lg:rounded-[40px] bg-white/10 backdrop-blur-[15px] border border-white/50  transition-colors duration-300 ease-in-out overflow-hidden text-justify p-10 text-gray-300 xl:text-lg">
              <p className=" w-full">
                I am a graduate of the Faculty of Technology at University of
                Sri Jayewardenepura, Sri Lanka, specializing in Industrial
                Biosystems Technology. I am currently pursuing a Master&apos;s
                degree in Forestry and Environmental Management to further
                enhance my knowledge and expertise in sustainable natural
                resource management, forest conservation, and environmental
                stewardship. I am passionate about Wildlife, Forestry,
                Environmental Conservation, and Scientific Research and I
                continuously strive to expand my skills and contribute
                meaningfully to the protection and sustainable management of
                natural ecosystems.
              </p>
            </div>
          </div>
          <div className=" hidden lg:flex w-[30%] xl:w-[40%] items-end justify-end">
            <Image
              src="/jastan2.png"
              alt="jastanRic"
              width={920}
              height={66}
              className="relative z-20 w-full xl:w-10/12 2xl:w-8/12 scale-120 xl:scale-110 2xl:-translate-y-5 translate-y-2 mx-auto h-auto object-containt translate-x-10"
              priority
            />{" "}
          </div>
        </div>
      </div>

      {/* My Educational Qualification */}
      <div id="qualification" className="scroll-mt-[50px] ">
        <Education />
      </div>

      {/* Hire Me */}
      <HireMe />

      {/* Testimonials */}
      <Testimonials />

      {/* Contact */}
      <div className="scroll-mt-[100px] ">
        <Contact />
      </div>

      {/* Skills Slider */}
      {/* <div className="relative w-full h-[147px] rounded-tl-4xl rounded-br-4xl overflow-hidden">
          <div className="absolute w-[5000px] h-[63px] bg-white -rotate-2 -mt-2 md:mt-0 md:-rotate-[1.9deg] z-10 -ml-2 flex items-center">
            <div className="marquee flex gap-8 w-max">
              {[...skills, ...skills].map((skill, index) => (
                <div
                  key={index}
                  className="flex items-center gap-5 text-[#000000] text-[48px] whitespace-nowrap"
                >
                  <svg
                    width="34"
                    height="34"
                    viewBox="0 0 35 35"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.4828 0.257982L21.715 12.3411L34.2082 16.5003L22.1251 21.7324L17.9659 34.2256L12.7337 22.1425L0.240553 17.9833L12.3237 12.7512L16.4828 0.257982Z"
                      fill="#FD853A"
                    />
                  </svg>
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div> */}

      {/* Blog */}
      <div
        id="blogs"
        className="flex flex-col w-full h-fit items-center gap-12 sm:px-5 md:px-[71px] bg-[#f2f4f7] py-10 relative"
      >
        <div className="  w-full flex flex-col  lg:flex-row items-center justify-between gap-6">
          <div className="w-full pb-20 md:pb-10 md:flex  items-start justify-center space-x-2.5 text-center lg:text-lef translate-y-10">
            <CustomeText
              title="Read my latest"
              className="font-medium text-4xl sm:text-5xl lg:text-6xl text-[#344054]"
            />
            <CustomeText
              title="blog..."
              className="font-medium text-4xl sm:text-5xl lg:text-6xl text-[#FD853A]"
            />
          </div>
          {/* <a href="https://thecanofy.blogspot.com/" target="blank">
            <OrangeButton title="See All" className=" " />
          </a> */}
        </div>
        <div className=" w-full md:hidden">
          <SliderForBlog viewPort="mobile" />
        </div>
        <div className=" w-full hidden md:block lg:hidden">
          <SliderForBlog viewPort="tablet" />
        </div>
        <div className=" w-full hidden lg:block">
          <SliderForBlog viewPort="desktop" />
        </div>
        <div className=" w-full flex items-center  justify-center">
          <a href="https://thecanofy.blogspot.com/" target="blank">
            <button className="w-full scale-90 md:w-fit cursor-pointer sm:w-auto px-6 py-4 rounded-[20px] border border-[#151515] text-[#151515] font-semibold text-2xl sm:text-[28px] transition-all duration-300 hover:bg-[#151515] hover:text-white focus:bg-[#151515] focus:text-white">
              LEARN MORE
            </button>
          </a>
        </div>
        <div className="w-full h-52 absolute top-[100%] z-0 left-0  bg-[#f2f4f7]"></div>
      </div>
    </div>
  );
}
