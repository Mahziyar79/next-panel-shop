import { getOneProdcutBySlug, getProducts } from "@/services/productService";
import AddToCart from "./AddToCart";
import {
  toPersianNumbers,
  toPersianNumbersWithComma,
} from "@/utils/toPersianNumbers";
import bg from "../../../../assets/images/singleProduct/product-bg.svg";
import time from "../../../../assets/images/singleProduct/time.svg";
import chart from "../../../../assets/images/singleProduct/chart.svg";
import users from "../../../../assets/images/singleProduct/users.svg";
import Image from "next/image";
import { FavoriteBorderOutlined } from "@mui/icons-material";
import Button from "@mui/material/Button";
export const dynamic = "force-static"; // SSG or {cache : "force-cache"}
export const dynamicParams = false;

async function page({ params }) {
  const { slug } = params;
  const { product } = await getOneProdcutBySlug(slug);
  return (
    <div>
      <div>
        <h1 className="text-secondary-900 font-black text-2xl mb-2">
          {product.title}
        </h1>
        <p className="text-secondary-400 text-sm md:text-base leading-7 font-bold md:leading-8 mb-6">
          {product.description}
        </p>
      </div>
      <div className="flex flex-col gap-y-7 mb-8 lg:justify-between lg:flex-row">
        <div className="flex justify-between lg:justify-start lg:gap-x-20 items-center">
          <div className="flex flex-col items-center gap-y-3">
            <div className="p-4 lg:p-[17px] relative flex items-center justify-center w-14 h-14 lg:w-16 lg:h-16 drop-shadow-[0_10px_20px_rgba(122,142,245,0.4)]">
              <Image
                className="w-full h-full top-0 left-0 absolute"
                src={bg}
                alt="Product Item Background"
              />
              <Image className="z-10 h-6 w-6" src={time} alt="time icon" />
            </div>
            <span class="text-secondary-700 font-bold">۰۱:۴۴:۰۰ </span>
          </div>
          <div className="flex flex-col items-center gap-y-3">
            <div className="p-4 lg:p-[17px] relative flex items-center justify-center w-14 h-14 lg:w-16 lg:h-16 drop-shadow-[0_10px_20px_rgba(122,142,245,0.4)]">
              <Image
                className="w-full h-full top-0 left-0 absolute"
                src={bg}
                alt="Product Item Background"
              />
              <Image className="z-10 h-6 w-6" src={chart} alt="chart icon" />
            </div>
            <span class="text-secondary-700 font-bold">
              {toPersianNumbers(12)} جلسه
            </span>
          </div>
          <div className="flex flex-col items-center gap-y-3">
            <div className="p-4 lg:p-[17px] relative flex items-center justify-center w-14 h-14 lg:w-16 lg:h-16 drop-shadow-[0_10px_20px_rgba(122,142,245,0.4)]">
              <Image
                className="w-full h-full top-0 left-0 absolute"
                src={bg}
                alt="Product Item Background"
              />
              <Image className="z-10 h-6 w-6" src={users} alt="users icon" />
            </div>
            <span class="text-secondary-700 font-bold">
              {toPersianNumbers(1200)} دانشجو
            </span>
          </div>
        </div>
        <div className="flex items-center justify-between lg:flex-col lg:items-end gap-y-4">
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
            {toPersianNumbers(product.likes.length)}
          </Button>
        </div>
      </div>
      <p className="mb-6">
        قیمت محصول :{" "}
        <span className={`${product.discount ? "line-through" : "font-bold"}`}>
          {toPersianNumbersWithComma(product.price)}
        </span>
      </p>
      {!!product.discount && (
        <div className="flex items-center gap-x-2 mb-6">
          <p className="text-xl font-bold">
            قیمت با تخفیف : {toPersianNumbersWithComma(product.offPrice)}
          </p>
          <div className="bg-rose-500 px-2 py-0.5 rounded-xl text-white text-sm">
            {toPersianNumbers(product.discount)} %
          </div>
        </div>
      )}
      <AddToCart product={product} />
    </div>
  );
}
export default page;

export async function generateStaticParams() {
  const { products } = await getProducts();

  return products.map((product) => ({
    slug: product.slug,
  }));
}
