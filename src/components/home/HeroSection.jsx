import Image from "next/image";
import heroBgSVG from "@/public/assets/images/hero-bg.svg";
import banner from "@/public/assets/images/banner.webp";
import downSVG from "@/public/assets/images/down.svg";
import { Button, Chip } from "@mui/material";
import Link from "next/link";

export default function HeroSection() {
  return (
    <main className="flex-1">
      <Image
        src={heroBgSVG}
        className="absolute left-0 top-0 hidden md:block"
        alt="hero bg SVG"
      />
      <section className="container md:max-w-screen-lg mx-auto mt-12 z-10">
        <div className="flex gap-y-9 flex-col-reverse items-center md:flex-row md:gap-x-5 md:items-center md:justify-between">
          <div className="text-center md:text-right">
            <div className="mb-4 md:mb-4 md:text-base text-xs">
              <Chip
                color="error"
                className="font-sans"
                label="اتمام جشنواره تخفیف"
              />
              <span className="text-primary-900 text-xs font-bold">
                &nbsp;ظرفیت تکمیل شد 😍&nbsp;
              </span>
            </div>
            <h1 className="font-black text-2xl sm:text-[30px] md:text-[40px] lg:text-[50px] leading-relaxed text-secondary-900 mb-2 md:mb-5">
              برنامه نویسی را سریع <br /> و آسان یاد بگیرید
            </h1>
            <p className="text-sm md:text-lg font-medium text-gray-400 mb-6 md:mb-2">
              ما کنارتون هستیم تا عمیق یاد بگیرید،
              <br />و با بهترین مسیر ممکن به مقصدتون برسید.
            </p>
            <div className="max-w-screen-sm h-0.5 bg-[#898a9c33] mb-4 md:mb-7"></div>
            <Link href={"/products"}>
              <Button
                variant="contained"
                style={{
                  borderRadius: 50,
                  padding: "17px 35px",
                  backgroundColor: "rgb(74, 109, 255)",
                  fontSize: "18px",
                  fontFamily: "inherit",
                  fontWeight: "bolder",
                  boxShadow: "0px 4px 44px 0px #4A6DFF66",
                }}
              >
                بزن بریم!
              </Button>
            </Link>
            <div className="flex justify-end">
              <Image
                className="md:w-6 hidden md:block text-[#261957]"
                src={downSVG}
                alt="downSVG"
              />
            </div>
          </div>
          <div className="w-[80%] md:w-[45%] max-w-screen-sm relative">
            <Image src={banner} priority alt="Banner" width={"100vh"} />
            <div
              className="absolute -bottom-0 w-full h-48 z-2"
              style={{
                background:
                  "linear-gradient(rgba(255, 255, 255, 0) 37%, rgb(244, 245, 247) 93%)",
              }}
            ></div>
          </div>
        </div>
      </section>
    </main>
  );
}
