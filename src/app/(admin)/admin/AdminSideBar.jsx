"use client";

import { logout } from "@/services/authServices";
import Link from "next/link";
import { usePathname } from "next/navigation";

function AdminSideBar() {
  const logoutHandler = async () => {
    await logout();
    document.location.href = "/";
  };
  const path = usePathname();

  return (
    <div>
      <ul className="flex flex-col space-y-4">
        <li className="p-2 rounded-md hover:bg-gray-200">
          <Link href="/">صفحه اصلی</Link>
        </li>
        <li className={`${
            path === "/admin" && "bg-gray-200 "
          } p-2 rounded-md hover:bg-gray-200`}>
          <Link href="/admin">داشبورد</Link>
        </li>
        <li className={`${
            path === "/admin/users" && "bg-gray-200 "
          } p-2 rounded-md hover:bg-gray-200`}>
          <Link href="/admin/users">کاربران</Link>
        </li>
        <li className={`${
            path === "/admin/products" && "bg-gray-200 "
          } p-2 rounded-md hover:bg-gray-200`}>
          <Link href="/admin/products">محصولات</Link>
        </li>
        <li className={`${
            path === "/admin/categories" && "bg-gray-200 "
          } p-2 rounded-md hover:bg-gray-200`}>
          <Link href="/admin/categories">دسته بندی</Link>
        </li>
        <li className={`${
            path === "/admin/payments" && "bg-gray-200 "
          } p-2 rounded-md hover:bg-gray-200`}>
          <Link href="/admin/payments">سفارشات </Link>
        </li>
        <li className={`${
            path === "/admin/coupons" && "bg-gray-200 "
          } p-2 rounded-md hover:bg-gray-200`}>
          <Link href="/admin/coupons">کد تخفیف</Link>
        </li>
        <li className="p-2 rounded-md hover:bg-gray-200">
          <button onClick={logoutHandler}>خروج از حساب کاربری</button>
        </li>
      </ul>
    </div>
  );
}
export default AdminSideBar;
