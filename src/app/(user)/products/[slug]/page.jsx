import { getOneProdcutBySlug, getProducts } from "@/services/productService";
import AddToCart from "./AddToCart";
import {
  toPersianNumbers,
  toPersianNumbersWithComma,
} from "@/utils/toPersianNumbers";
import bg from "@/public/assets/images/singleProduct/product-bg.svg";
import time from "@/public/assets/images/singleProduct/time.svg";
import chart from "@/public/assets/images/singleProduct/chart.svg";
import users from "@/public/assets/images/singleProduct/users.svg";
import productImage from "@/public/assets/images/product-image.svg";
import Image from "next/image";
import { FavoriteBorderOutlined } from "@mui/icons-material";
import CommentOutlinedIcon from "@mui/icons-material/CommentOutlined";
import Button from "@mui/material/Button";
import Rating from "@mui/material/Rating";

export const dynamic = "force-static"; // SSG or {cache : "force-cache"}
export const dynamicParams = false;

async function page({ params }) {
  const { slug } = params;
  const { product } = await getOneProdcutBySlug(slug);
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-x-14 bg-white rounded-2xl p-3 py-6 lg:p-5 mb-10">
        <div className="col-span-1 lg:col-span-7 xl:col-span-6">
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
                  <Image
                    className="z-10 h-6 w-6"
                    src={chart}
                    alt="chart icon"
                  />
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
                  <Image
                    className="z-10 h-6 w-6"
                    src={users}
                    alt="users icon"
                  />
                </div>
                <span class="text-secondary-700 font-bold">
                  {toPersianNumbers(120)} دانشجو
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
                  backgroundColor: "#F4F5F7",
                  fontSize: "12px",
                  fontFamily: "inherit",
                  fontWeight: "bolder",
                  boxShadow: "none",
                }}
              >
                {toPersianNumbers(product.likes.length)}
              </Button>
              <Button
                variant="contained"
                startIcon={<CommentOutlinedIcon className="ml-2" />}
                style={{
                  borderRadius: 8,
                  padding: "6px 0px 6px 6px",
                  color: "#2e7d32",
                  backgroundColor: "#F4F5F7",
                  fontSize: "12px",
                  fontFamily: "inherit",
                  fontWeight: "bolder",
                  boxShadow: "none",
                }}
              >
                {toPersianNumbers(product.numReviews)}
              </Button>
              <div>
                <Rating name="read-only" value={4} readOnly />
                <span class="flex items-center text-xs font-bold text-secondary-400">
                  ۵&nbsp; از &nbsp;۷&nbsp; رای
                </span>
              </div>
            </div>
          </div>
          <p className="mb-6">
            قیمت محصول :{" "}
            <span
              className={`${product.discount ? "line-through" : "font-bold"}`}
            >
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
        <div className="col-span-1 lg:col-span-5 xl:col-span-6 order-1 md:order-2 self-center">
          <div className="aspect-w-16 aspect-h-9">
            <Image
              className="object-cover object-center h-full w-full rounded-xl"
              src={productImage}
              alt="product image"
            />
          </div>
        </div>
      </div>
      <div className="gap-8 lg:gap-x-14 bg-white rounded-2xl p-3 py-6 lg:p-5 mb-10">
        <h2 class="text-2xl font-extrabold text-primary-900 mb-5">
          توضیحات دوره
        </h2>
        <p className="leading-8">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
          ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
          کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی
          در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می
          طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
          الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این
          صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و
          شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای
          اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده
          قرار گیرد.
        </p>
      </div>
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
