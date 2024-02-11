import productImage from "@/public/assets/images/product-image.svg";

import { getCategories } from "@/services/categoryService";
import { getProducts } from "@/services/productService";
import CategorySidebar from "./CategorySidebar";
import queryString from "query-string";
import { toLocalDateStringShort } from "@/utils/toLocalDate";
import Link from "next/link";
import AddToCart from "./[slug]/AddToCart";
import LikeProduct from "./LikeProduct";
import { cookies } from "next/headers";
import { toStringCookies } from "@/utils/toStringCookies";
import Image from "next/image";

export const dynamic = "force-dynamic"; // eq to {cache :"no-store"} or SSR in pages Dir. :)

async function Products({ searchParams }) {
  // const { products } = await getProducts(queryString.stringify(searchParams));
  // const { categories } = await getCategories();
  const cookieStore = cookies();
  const strCookies = toStringCookies(cookieStore);
  const productsPromise = getProducts(
    queryString.stringify(searchParams),
    strCookies
  );
  const categoryPromise = getCategories();

  const [{ products }, { categories }] = await Promise.all([
    productsPromise,
    categoryPromise,
  ]);
  return (
    <div>
      <h1 className="text-xl font-black mb-6 mr-3 md:mr-0">دوره های آموزش برنامه نویسی</h1>
      <div className="grid grid-cols-4">
        <CategorySidebar categories={categories} />
        <div className="col-span-4 md:col-span-3 mt-3 px-2 md:px-0 md:mt-0">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {products.map((product) => {
              return (
                <div
                  className="col-span-2 md:col-span-1 border rounded-xl shadow-md p-4 relative bg-white"
                  key={product._id}
                >
                  <div className="absolute top-5 right-5 z-10 bg-white shadow-md p-1 rounded flex items-center">
                    <LikeProduct product={product} />
                  </div>

                  <Link href={`/products/${product.slug}`}>
                    <div className="aspect-w-13 aspect-h-9 mb-3">
                      <Image
                        className="object-cover object-center h-full w-full rounded-xl"
                        src={productImage}
                        alt="product image"
                      />
                    </div>
                  </Link>
                  <h2 className="font-bold text-xl mb-4">{product.title}</h2>
                  <div className="mb-4">
                    <span>تاریخ انتشار: </span>
                    <span className="font-bold">
                      {toLocalDateStringShort(product.createdAt)}
                    </span>
                  </div>
                  <Link
                    className="text-primary-900 font-bold mb-4 block"
                    href={`/products/${product.slug}`}
                  >
                    مشاهده محصول
                  </Link>
                  <AddToCart product={product} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Products;
