import Navbar from "@/components/Navbar";
import CustomeText from "@/components/ui/CustomeText";
import DualToggleButtons from "@/components/ui/DualButtons";
import Image from "next/image";
import { Star } from "lucide-react";
import OrangeButton from "@/components/ui/OrangeButton";
import { blogs } from "../data/data";
import { GenericSlider } from "@/components/ui/GenericSlider";
import ClientOnly from "@/components/ui/ClientOnly";
import Testimonials from "@/components/Testimonials";
import Education from "@/components/Education";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full bg-white py-10 flex flex-col items-center justify-start">
      <Navbar />

      {/* Hero Section */}
      <div className="group flex flex-col md:flex-row w-full  px-4 sm:px-6 md:px-8 gap-6 sm:gap-8 md:gap-[71px] items-center justify-center mt-6 ">
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
          <div className="flex w-full flex-col items-center justify-center  transition-all  duration-300 ease-in-out group-hover:translate-y-[280px] group-hover:opacity-0 px-4 sm:px-0">
            <ClientOnly>
              <button className="h-[45px] px-[26px] py-[13px] translate-y-0 md:translate-y-10 rounded-full border border-[#171717] flex items-center justify-center bg-white mt-10">
                Hello!
              </button>
            </ClientOnly>
            <div className="flex flex-col sm:flex-row sm:gap-2 items-center sm:items-end mb-1 mt-6 sm:mt-8">
              <CustomeText
                title="I'm"
                className="text-[#171717] font-semibold text-4xl sm:text-5xl md:text-7xl xl:text-[74px]"
              />
              <div className="flex items-end">
                <CustomeText
                  title="Jastan Ric"
                  className="text-[#FD853A] font-semibold text-4xl sm:text-5xl md:text-7xl xl:text-[74px]"
                />
                <CustomeText
                  title=","
                  className="text-[#171717] font-semibold text-4xl sm:text-5xl md:text-7xl xl:text-[74px]"
                />
              </div>
            </div>
            <CustomeText
              title="Environmental Steward"
              className="text-[#171717] font-semibold text-4xl sm:text-5xl md:text-7xl xl:text-[74px] scale-y-110  text-center"
            />
          </div>

          <div className="relative w-full max-w-[952px] aspect-[3/2] flex flex-col items-center justify-center -translate-y-[10%] sm:-translate-y-[15%] md:-translate-y-[20%] mx-auto px-4">
            <div className="absolute bottom-0 z-0 w-[90%] max-w-[812px] aspect-[2/1] overflow-hidden flex items-center justify-center pointer-events-auto">
              <div className="absolute w-full h-full bg-[#FEB273] rounded-t-full" />
            </div>

            <div className="absolute z-10 transition-all duration-500 ease-in-out opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-105">
              <Image
                src="/Frame 68.svg"
                alt="Frame Decoration"
                width={1017}
                height={688}
                className="object-contain w-full h-auto"
                priority
              />
            </div>

            <Image
              src="/girl.svg"
              alt="abhiruchi"
              width={952}
              height={636}
              className="relative z-20 w-full h-auto object-contain mt-5"
              priority
            />

            <div className="absolute bottom-[10%] z-30 w-full hidden md:flex justify-center">
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
      {/* <div className="w-full md:w-11/12 mx-auto flex flex-col items-start gap-6 px-2 sm:px-0 pb-0 -translate-y-10 text-[16px] sm:text-[18px] text-center lg:text-[20px] text-[#344054]">
        <p className=" w-full">
          I am a graduate of the Faculty of Technology at{" "}
          <span className=" bg-[#FD853A] text-white">
            University of Sri Jayewardenepura,
          </span>{" "}
          Sri Lanka, specializing in Industrial Biosystems Technology. I am
          currently pursuing a Master&apos;s degree in{" "}
          <span className=" bg-[#FD853A] text-white">
            {" "}
            Forestry and Environmental Management
          </span>{" "}
          to further enhance my knowledge and expertise in sustainable natural
          resource management, forest conservation, and environmental
          stewardship. I am passionate about{" "}
          <span className=" bg-[#FD853A] text-white"> Wildlife,</span>{" "}
          <span className=" bg-[#FD853A] text-white"> Forestry,</span>{" "}
          <span className=" bg-[#FD853A] text-white">
            Environmental Conservation,{" "}
          </span>
          and{" "}
          <span className=" bg-[#FD853A] text-white">Scientific Research</span>{" "}
          and I continuously strive to expand my skills and contribute
          meaningfully to the protection and sustainable management of natural
          ecosystems.
        </p>
      </div> */}
      <div className="relative flex flex-col w-full gap-16 sm:gap-[96px] items-center px-4 sm:px-6 lg:px-[71px] py-16 sm:py-[60px] bg-[#171717] rounded-[30px] sm:rounded-[50px] overflow-hidden  -mt-12 lg:-mt-28">
        <Image
          src="/Frame 77.svg"
          alt="image"
          fill
          className="object-cover absolute opacity-50"
        />

        <div className="w-full flex flex-col items-start justify-between gap-6 relative z-10">
          <div className="flex gap-2.5">
            <CustomeText
              title="About"
              className="font-medium text-3xl sm:text-4xl lg:text-5xl text-[#FCFCFD]"
            />
            <CustomeText
              title="Me"
              className="font-medium text-3xl sm:text-4xl lg:text-5xl text-[#FD853A]"
            />
          </div>
          <div className="relative flex  justify-center items-center   w-full rounded-[37px] lg:rounded-[40px] bg-white/10 backdrop-blur-[15px] border border-white/50  transition-colors duration-300 ease-in-out overflow-hidden px-4 lg:px-16 py-16 text-gray-300">
            <p className=" w-full text-center">
              I am a graduate of the Faculty of Technology at University of Sri
              Jayewardenepura, Sri Lanka, specializing in Industrial Biosystems
              Technology. I am currently pursuing a Master&apos;s degree in
              Forestry and Environmental Management to further enhance my
              knowledge and expertise in sustainable natural resource
              management, forest conservation, and environmental stewardship. I
              am passionate about Wildlife, Forestry, Environmental
              Conservation, and Scientific Research and I continuously strive to
              expand my skills and contribute meaningfully to the protection and
              sustainable management of natural ecosystems.
            </p>
          </div>
        </div>
      </div>

      {/* My Educational Qualification */}
      <Education />

      {/* Hire Me */}
      <div className="w-full flex flex-col lg:flex-row items-center justify-between px-6 lg:px-[80px] py-20 lg:py-[122px] bg-[#F2F4F7] rounded-[32px] lg:rounded-[50px] gap-12 lg:gap-[96px]">
        <div className="w-full  max-w-[500px] flex flex-col items-start gap-8">
          <div className="flex flex-wrap text-4xl sm:text-5xl lg:text-6xl font-semibold gap-2">
            <CustomeText title="Why" className="text-[#344054]" />
            <CustomeText title="Hire me" className="text-[#FD853A]" />
            <CustomeText title="?" className="text-[#344054]" />
          </div>

          <p className="text-[#98A2B3] text-base sm:text-lg lg:text-xl leading-relaxed max-w-lg">
            I am passionate about wildlife and have strong field awareness
            developed through my academic background. My ability to understand
            animal behavior and communicate clearly adds value in creating an
            informative, safe, and memorable wildlife experience.
          </p>

          <div className="flex flex-col sm:flex-row gap-8 w-full">
            <div className="flex flex-col">
              <CustomeText
                title="Flora"
                className="text-[32px] sm:text-[36px] font-medium text-[#1D2939]"
              />
              <CustomeText
                title="Plant Expertise"
                className="text-lg text-[#667085]"
              />
            </div>
            <div className="flex flex-col">
              <CustomeText
                title="Fauna"
                className="text-[32px] sm:text-[36px] font-medium text-[#1D2939]"
              />
              <CustomeText
                title="Animal Expertise"
                className="text-lg text-[#667085]"
              />
            </div>
          </div>

          <ClientOnly>
            <button className="w-full cursor-pointer sm:w-auto px-6 py-4 rounded-[20px] border border-[#151515] text-[#151515] font-semibold text-2xl sm:text-[28px] transition-all duration-300 hover:bg-[#151515] hover:text-white focus:bg-[#151515] focus:text-white">
              Hire me
            </button>
          </ClientOnly>
        </div>
        <div className="relative w-full max-w-xl  aspect-square group mx-auto lg:mx-0">
          <Image
            src="/Property 1=Default.svg"
            alt="Hire me"
            fill
            className="object-contain -scale-x-100 z-10 transition-all duration-300 ease-in-out group-hover:translate-y-3"
            priority
          />

          <Image
            src="/Property 1=Variant2.svg"
            alt="Hire me"
            fill
            className="object-contain absolute -translate-y-[15px] transition-all duration-300 ease-in-out opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-110"
            priority
          />
        </div>
      </div>

      {/* Portfolio */}
      {/* <div className="w-full flex flex-col items-center px-4 sm:px-6 lg:px-[71px] py-12 sm:py-20 gap-10 lg:gap-12">
        <div className="w-full flex flex-col sm:flex-row justify-between items-start lg:items-center gap-6">
          <div className="flex flex-col items-start max-w-full lg:max-w-[643px]">
            <CustomeText
              title="Lets Have a look at"
              className="font-semibold text-[32px] sm:text-[48px] lg:text-[64px] text-[#344054]"
            />
            <div className="flex items-start justify-start gap-4 flex-wrap">
              <CustomeText
                title="my"
                className="font-semibold text-[32px] sm:text-[48px] lg:text-[64px] text-[#344054]"
              />
              <CustomeText
                title="Portfolio"
                className="font-semibold text-[32px] sm:text-[48px] lg:text-[64px] text-[#FD853A]"
              />
            </div>
          </div>

          <div className="shrink-0">
            <OrangeButton title="See All" />
          </div>
        </div>

        <div className="w-full flex flex-col items-center gap-10 lg:gap-12 max-w-[1290px]">
          <GenericSlider
            data={portfolioData}
            slidesPerView={2}
            heightClass="h-auto"
            cardType="portfolio"
          />

          <div className="w-full max-w-[947px] flex flex-wrap justify-center gap-4 sm:gap-[14px] items-center">
            <ClientOnly>
              {buttons.map((text, index) => (
                <button
                  key={index}
                  className="px-6 sm:px-8 py-3 rounded-[24px] bg-[#F2F4F7] text-[#000000] text-[16px] sm:text-[18px] lg:text-[20px] hover:bg-[#FD853A] hover:text-white transition-colors duration-300"
                >
                  {text}
                </button>
              ))}
            </ClientOnly>
          </div>

          <div className="flex flex-col w-full max-w-[742px] items-start gap-6 px-4 sm:px-0">
            <div className="flex flex-col sm:flex-row w-full items-start sm:items-center gap-4 sm:gap-[18px]">
              <CustomeText
                title="Lirante - Food Delivery Solution"
                className="font-bold text-[28px] sm:text-[32px] lg:text-[40px] text-[#344054]"
              />
              <div className="w-[50px] h-[50px] sm:w-[58px] sm:h-[58px] rounded-full bg-[#FD853A] hidden md:flex items-center justify-center transition-all duration-300">
                <ArrowButton className="transition-all duration-300 stroke-white -rotate-45" />
              </div>
            </div>
            <p className="text-[16px] sm:text-[18px] lg:text-[20px] text-[#344054] text-center sm:text-left">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              congue interdum ligula a dignissim. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Sed lobortis orci elementum egestas
              lobortis.
            </p>
          </div>
        </div>
      </div> */}

      {/* Testimonials */}
      <Testimonials />

      {/* Contact */}
      <div className="w-full bg-white flex flex-col items-center justify-center py-16 lg:pt-32 scale-85 px-4 sm:px-6 lg:px-[71px] gap-10">
        <div className="w-full max-w-4xl text-center flex flex-col items-center gap-4">
          <CustomeText
            title="Have an Awesome Research"
            className="font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-[64px] text-[#344054]"
          />
          <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4">
            <CustomeText
              title="Idea?"
              className="font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-[64px] text-[#344054]"
            />
            <CustomeText
              title="Let's Discuss"
              className="font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-[64px] text-[#FD853A]"
            />
          </div>
        </div>

        <div className="w-full max-w-3xl flex md:flex-row items-center justify-between gap-4 px-3 py-2 md:px-6 md:py-4 rounded-full border border-[#E4E7EC] bg-white">
          <div className="w-9 h-9 md:w-[50px] md:h-[50px] flex items-center justify-center rounded-full bg-[#FFEAD5] shrink-0">
            <Image src="/sms.svg" alt="message icon" width={24} height={24} />
          </div>

          <ClientOnly>
            <input
              type="text"
              placeholder="Enter Email Address"
              className="w-full md:flex-1 px-4 py-2 rounded-full text-center md:text-left text-base sm:text-lg outline-none bg-transparent text-[#1D2939] placeholder:text-[#667085]"
            />

            <button className="w-fit px-6 md:px-12 py-1 md:py-3 rounded-full bg-[#FD853A] hover:bg-[#e4752f] text-white text-lg font-semibold transition duration-300">
              Send
            </button>
          </ClientOnly>
        </div>

        {/* <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 text-sm sm:text-base font-medium text-[#000000]">
          {iconAndText.map((data, index) => {
            const Icon = data.icon;
            return (
              <div key={index} className="flex items-center gap-2">
                <Icon size={20} />
                {data.name}
              </div>
            );
          })}
        </div> */}
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
      <div className="flex flex-col w-full h-fit items-center gap-12 px-[71px] py-[97px]">
        <div className="  w-full flex flex-col lg:flex-row items-center justify-between gap-6 pb-10 mb-6 md:mb-0">
          <h1 className="text-[#344054] w-fit md:min-w-[215px] h-full font-bold text-4xl md:text-5xl">
            From my blog post
          </h1>
          <a href="https://thecanofy.blogspot.com/" target="blank">
            <OrangeButton title="See All" className=" " />
          </a>
        </div>
        <GenericSlider
          data={blogs}
          slidesPerView={3}
          heightClass=""
          cardType="blog"
        />
      </div>
    </div>
  );
}
