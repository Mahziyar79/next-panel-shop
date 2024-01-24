import Image from "next/image";
import codeSVG from "@/public/assets/images/code.svg";
import Link from "next/link";
import Button from "@mui/material/Button";
import { getProducts } from "@/services/productService";
import ProductsCarousel from "./ProductsCarousel";

const LatestProducts = async () => {
  const productsPromise = getProducts();
  const [{ products }] = await Promise.all([productsPromise]);
  return (
    <section className="container md:max-w-screen-xl mx-auto">
      <div className="rounded-xl p-3 md:p-8 bg-transparent latest-product">
        <div className="flex flex-col md:flex-row md:items-stretch gap-x-10 gap-y-8">
          <div className="flex flex-col items-center justify-start md:items-start md:justify-end gap-y-3 md:gap-y-4 text-secondary-800 flex-shrink-0">
            <div className="relative">
              <h2 className="font-black text-3xl md:text-4xl mb-5">
                جدیدترین دوره ها
              </h2>
              <div className="hidden lg:block lg:h-44 lg:w-44 absolute lg:-bottom-1">
                <Image
                  className="absolute w-full h-full opacity-[7%]"
                  src={codeSVG}
                />
              </div>
              <p className="text-sm mb-5">
                دوره ببین، تمرین کن و برنامه نویس شو
              </p>
              <Link href={"/products"}>
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
                  بزن بریم!
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex-1 overflow-x-hidden rounded-lg overflow-hidden">
            <div>
              <ProductsCarousel products={products} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default LatestProducts;
