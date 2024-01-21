"use client";
import Image from "next/image";
import productImage from "../assets/images/product-image.svg";
import toman from "../assets/images/toman.svg";
import Link from "next/link";
import Button from "@mui/material/Button";
import {
  FavoriteBorderOutlined,
  KeyboardBackspaceOutlined,
  WarehouseOutlined,
} from "@mui/icons-material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { toLocalDateStringShort } from "@/utils/toLocalDate";

const ProductsCarousel = ({ products }) => {
  return (
    <Swiper
      slidesPerView={"3"}
      spaceBetween={30}
      breakpoints={{
        320: {
          slidesPerView: 1,
        },
        720: {
          slidesPerView: 2,
        },
        1280: {
          slidesPerView: 3,
        },
      }}
    >
      {products?.map((product) => (
        <SwiperSlide>
          <div className="mt-12 pb-10">
            <div className="bg-white shadow-sm shadow-secondary-100/40 rounded-xl relative p-3 flex flex-col h-full hover:shadow-lg hover:shadow-secondary-100/40 transition-all duration-300 ease-in-out">
              <div className="-mt-14 mb-6">
                <div className="relative shadow-xl rounded-xl shadow-secondary-100/50">
                  <Link href={`/products/${product.slug}`}>
                    <div className="aspect-w-13 aspect-h-9">
                      <Image
                        className="object-cover object-center h-full w-full rounded-xl"
                        src={productImage}
                      />
                    </div>
                  </Link>
                  <div className="flex items-center w-full justify-between absolute top-0 right-0 p-3">
                    <Button
                      variant="contained"
                      startIcon={<FavoriteBorderOutlined className="ml-2" />}
                      style={{
                        borderRadius: 8,
                        padding: "6px 0px 6px 6px",
                        color: "rgb(244, 63, 94)",
                        backgroundColor: "#fff",
                        fontSize: "12px",
                        fontFamily: "inherit",
                        fontWeight: "bolder",
                        boxShadow: "none",
                      }}
                    >
                      {product.likesCount}
                    </Button>

                    <Button
                      variant="contained"
                      startIcon={<WarehouseOutlined className="ml-2" />}
                      style={{
                        borderRadius: 8,
                        padding: "6px 0px 6px 6px",
                        color: "rgb(85, 87, 117)",
                        backgroundColor: "#fff",
                        fontSize: "12px",
                        fontFamily: "inherit",
                        fontWeight: "bolder",
                        boxShadow: "none",
                      }}
                    >
                      {product.countInStock}
                    </Button>
                  </div>
                </div>
              </div>
              <div>
                <Link
                  href={"/products/test"}
                  className="text-secondary-800 text-lg sm:text-lg block hover:text-blue-600 transition-all duration-500 ease-in-out mb-3 font-black"
                >
                  {product?.title}
                </Link>
                <div className="mb-4">
                    <span>تاریخ انتشار: </span>
                    <span className="font-bold">
                      {toLocalDateStringShort(product.createdAt)}
                    </span>
                  </div>
                <div className="text-blue-500 cursor-pointer hover:text-blue-900 transition-all duration-300">
                  <Link
                    href={`/products/${product.slug}`}
                    class="flex items-center gap-x-2 text-sm font-bold"
                  >
                    مشاهده محصول
                    <KeyboardBackspaceOutlined />
                  </Link>
                </div>
                <div className="flex justify-between items-center mt-4">
                  <Link href={`/products/${product.slug}`}>
                    <Button
                      variant="contained"
                      style={{
                        borderRadius: 16,
                        padding: "10px 24px",
                        backgroundColor: "rgb(74, 109, 255)",
                        fontSize: "14px",
                        fontFamily: "inherit",
                        fontWeight: "bolder",
                        boxShadow: "0px 4px 44px 0px #4A6DFF66",
                      }}
                    >
                      خرید محصول
                    </Button>
                  </Link>
                  <div className="flex flex-col justify-between ">
                    {product?.price === product?.offPrice ? (
                      <div className="font-bold flex items-center">
                        <span class="text-secondary-800 font-black ml-2 md:text-xl">
                          {product.price}
                        </span>
                        <Image src={toman} alt="toman" width={22} />
                      </div>
                    ) : (
                      <div className="font-bold flex flex-col items-center">
                        <div class="text-secondary-300 text-sm line-through">
                          {product?.offPrice}
                        </div>
                        <span class="text-secondary-800 font-black ml-2 md:text-xl">
                          {product.price}
                        </span>
                        <Image src={toman} alt="toman" width={22} />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ProductsCarousel;
