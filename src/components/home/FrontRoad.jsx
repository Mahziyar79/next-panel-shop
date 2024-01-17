import Link from "next/link";
import htmlcss from "../../assets/images/frontRoad/html-css.svg";
import js from "../../assets/images/frontRoad/js.svg";
import git from "../../assets/images/frontRoad/git.svg";
import next from "../../assets/images/frontRoad/next.svg";
import tailwind from "../../assets/images/frontRoad/tailwind.svg";
import react from "../../assets/images/frontRoad/react.svg";
import step1 from "../../assets/images/frontRoad/step1.svg";
import step2 from "../../assets/images/frontRoad/step2.svg";
import step3 from "../../assets/images/frontRoad/step3.svg";
import step4 from "../../assets/images/frontRoad/step4.svg";
import step5 from "../../assets/images/frontRoad/step5.svg";
import Image from "next/image";

const FrontRoad = () => {
  return (
    <div className="container mx-auto md:max-w-screen-lg mb-28">
      <div class="flex justify-center flex-col text-secondary-900 items-center">
        <h2 class="md:text-3xl text-xl font-black mb-1 md:mb-2">
          مسیر یادگیری فرانت اند
        </h2>
        <Link
          class="text-sm lg:text-base text-secondary-700 transition-all duration-200 hover:text-primary-900 font-bold"
          href="/learning-path"
        >
          نقشه راه و مسیر یادگیری فرانت اند
        </Link>
      </div>
      <div className="flex items-center overflow-x-auto justify-between flex-shrink-0 flex-nowrap gap-x-10 -mx-4 md:gap-x-0 px-4 snap-x md:px-10 md:-mx-0 py-8 md:py-10">
        <div className="flex flex-col items-center gap-y-3 snap-center hover:text-blue-600 transition-all duration-300 ease-in-out relative">
          <div className="w-20 h-20 md:w-24 md:h-24 relative flex items-center justify-center rounded-full shadow-xl shadow-gray-300/30 hover:shadow-primary-300/30">
            <Image
              src={htmlcss}
              alt="front-road-bg"
              className="h-9 w-9 md:w-10 md:h-10 z-10"
            />
          </div>
          <span class="font-extrabold text-sm md:text-base text-[#555775]">
            HTML CSS
          </span>
          <Image
            src={step1}
            alt="firstStep"
            className="absolute -left-10 -bottom-2 w-10 md:w-16 md:-left-16"
          />
        </div>
        <div className="flex flex-col items-center gap-y-3 snap-center hover:text-blue-600 transition-all duration-300 ease-in-out relative">
          <div className="w-20 h-20 md:w-24 md:h-24 relative flex items-center justify-center rounded-full shadow-xl shadow-gray-300/30 hover:shadow-primary-300/30">
            <Image
              src={js}
              alt="front-road-bg"
              className="h-9 w-9 md:w-10 md:h-10 z-10"
            />
          </div>
          <span class="font-extrabold text-sm md:text-base text-[#555775]">
            جاوااسکریپت
          </span>
          <Image
            src={step2}
            alt="firstStep"
            className="absolute -left-9 -top-6 md:-top-10 w-9 z-10 md:w-16 md:-left-20"
          />
        </div>
        <div className="flex flex-col items-center gap-y-3 snap-center hover:text-blue-600 transition-all duration-300 ease-in-out relative">
          <div className="w-20 h-20 md:w-24 md:h-24 relative flex items-center justify-center rounded-full shadow-xl shadow-gray-300/30 hover:shadow-primary-300/30">
            <Image
              src={git}
              alt="front-road-bg"
              className="h-9 w-9 md:w-10 md:h-10 z-10"
            />
          </div>
          <span class="font-extrabold text-sm md:text-base text-[#555775]">
            گیت
          </span>
          <Image
            src={step3}
            alt="firstStep"
            className="absolute -left-10 -bottom-2 w-10 md:w-16 md:-left-16"
          />
        </div>
        <div className="flex flex-col items-center gap-y-3 snap-center hover:text-blue-600 transition-all duration-300 ease-in-out relative">
          <div className="w-20 h-20 md:w-24 md:h-24 relative flex items-center justify-center rounded-full shadow-xl shadow-gray-300/30 hover:shadow-primary-300/30">
            <Image
              src={react}
              alt="front-road-bg"
              className="h-9 w-9 md:w-10 md:h-10 z-10"
            />
          </div>
          <span class="font-extrabold text-sm md:text-base text-[#555775]">
            ریکت
          </span>
          <Image
            src={step4}
            alt="firstStep"
            className="absolute -left-9 -top-6 md:-top-10 w-9 z-10 md:w-16 md:-left-20"
          />
        </div>
        <div className="flex flex-col items-center gap-y-3 snap-center hover:text-blue-600 transition-all duration-300 ease-in-out relative">
          <div className="w-20 h-20 md:w-24 md:h-24 relative flex items-center justify-center rounded-full shadow-xl shadow-gray-300/30 hover:shadow-primary-300/30">
            <Image
              src={tailwind}
              alt="front-road-bg"
              className="h-9 w-9 md:w-10 md:h-10 z-10"
            />
          </div>
          <span class="font-extrabold text-sm md:text-base text-[#555775]">
            تیلویند
          </span>
          <Image
            src={step5}
            alt="firstStep"
            className="absolute -left-10 -bottom-2 w-10 md:w-16 md:-left-16"
          />
        </div>
        <div className="flex flex-col items-center gap-y-3 snap-center hover:text-blue-600 transition-all duration-300 ease-in-out relative">
          <div className="w-20 h-20 md:w-24 md:h-24 relative flex items-center justify-center rounded-full shadow-xl shadow-gray-300/30 hover:shadow-primary-300/30">
            <Image
              src={next}
              alt="front-road-bg"
              className="h-9 w-9 md:w-10 md:h-10 z-10"
            />
          </div>
          <span class="font-extrabold text-sm md:text-base text-[#555775]">
            نکست
          </span>
        </div>
      </div>
    </div>
  );
};

export default FrontRoad;
