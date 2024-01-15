import Image from "next/image";
import Tooltip from "@mui/material/Tooltip";

const TooltipComponent = ({ tooltipTitle, title, imgSrc, bgSrc }) => {
  return (
    <Tooltip title={tooltipTitle}>
      <div
        className="hover:bg-white hover:shadow-2xl  cursor-pointer rounded-2xl flex flex-col 
               items-center justify-center col-span-5 sm:col-span-3 md:col-span-2 
               false duration-300 transition-all hover:scale-110"
      >
        <div
          className=" p-3 md:p-6 rounded-3xl flex flex-col justify-between flex-1 gap-y-4"
          dir="ltr"
        >
          <div className="relative p-5 flex items-center justify-center">
            <Image
              src={bgSrc}
              alt="description bg"
              className="w-full h-full top-0 left-0 absolute z-1 "
            />
            <Image
              src={imgSrc}
              alt="description1"
              className="h-9 w-9 z-10 md:shadow-warranty-icon"
            />
          </div>
          <p className="flex-1 font-bold text-xs sm:text-sm text-center">
            {title}
          </p>
        </div>
      </div>
    </Tooltip>
  );
};
export default TooltipComponent;
