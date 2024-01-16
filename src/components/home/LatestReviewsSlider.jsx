"use client"
import { AddOutlined, ThumbUpOutlined } from "@mui/icons-material";
import Rating from "@mui/material/Rating";
import Avatar from "@mui/material/Avatar";
import { deepOrange } from "@mui/material/colors";
import { Swiper, SwiperSlide } from "swiper/react";

const LatestReviewsSlider = () => {
  const sliderItem = (
    <div className="bg-white shadow-[0px_3px_30px_rgba(100,100,100,0.17)] p-4 lg:p-5 rounded-2xl m-2">
      <div className="mb-4">
        <p className="flex items-center text-sm lg:text-base text-success mb-4 gap-1">
          <ThumbUpOutlined />
          پیشنهاد میکنم
        </p>
        <div class="text-sm lg:text-base text-secondary-800 font-bold mb-2">
          <span>دوره گیت و گیت هاب</span>
        </div>
        <div className="h-44 overflow-y-auto pl-1 mb-2">
          <p class="text-sm leading-7 text-secondary-900 lg:leading-7 mb-4">
            دوره خوب و کاربردی با مثال های عملی و مفید و از همه مهمتر درک آسان
            بحث conflict
          </p>
          <div className="mb-3 space-y-0.5">
            <div className="flex items-center gap-x-1 text-sm text-secondary-600">
              <AddOutlined color="success" />
              <span>بیان ساده و قابل فهم</span>
            </div>
            <div className="flex items-center gap-x-1 text-sm text-secondary-600">
              <AddOutlined color="success" />
              <span>بیان ساده و قابل فهم</span>
            </div>
          </div>
          <div class="border border-gray-100 mb-2"></div>
        </div>
        <div class="border border-gray-100 mb-2">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-x-3 flex-1">
              <Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar>
              <div class="flex flex-col justify-evenly text-secondary-900 text-[10px]">
                <div class="flex items-center font-extrabold md:mb-0.5 md:text-xs">
                  <span>علیرضا احمدی</span>
                  <span class="mr-1 font-normal text-[10px] lg:text-xs text-secondary-400">
                    (۱۴۰۲/۱۰/۲۴)
                  </span>
                </div>
                <span class="opacity-80 text-sm">خریدار محصول</span>
              </div>
            </div>
            <Rating name="read-only" value={4} readOnly  />
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <Swiper
      slidesPerView={"2"}
      spaceBetween={30}
      className="mySwiper"
      breakpoints={{
        320: {
          slidesPerView: 1,
        },
        720: {
          slidesPerView: 2,
        },
        1280: {
          slidesPerView: 2,
        },
      }}
    >
      <SwiperSlide>{sliderItem}</SwiperSlide>
      <SwiperSlide>{sliderItem}</SwiperSlide>
      <SwiperSlide>{sliderItem}</SwiperSlide>
      <SwiperSlide>{sliderItem}</SwiperSlide>
    </Swiper>
  );
};
export default LatestReviewsSlider;
