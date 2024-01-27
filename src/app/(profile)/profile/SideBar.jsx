"use client";

import { logout } from "@/services/authServices";
import Link from "next/link";
import { usePathname } from "next/navigation";

function SideBar() {
  const logoutHandler = async () => {
    await logout();
    // localStorage.removeItem("userInfo");
    // localStorage.removeItem("cartItems");
    // localStorage.removeItem("token");
    document.location.href = "/";
  };
  // const params = useSearchParams()
  const path = usePathname();

  return (
    <div>
      <ul className="flex flex-col space-y-4">
        <li className="p-2 rounded-md hover:bg-gray-200">
          <Link href="/">صفحه اصلی</Link>
        </li>
        <li
          className={`${
            path === "/profile" && "bg-gray-200 "
          } p-2 rounded-md hover:bg-gray-200`}
        >
          <Link href="/profile">داشبورد</Link>
        </li>
        <li
          className={`${
            path === "/profile/me" && "bg-gray-200 "
          } p-2 rounded-md hover:bg-gray-200`}
        >
          <Link href="/profile/me">اطلاعات کاربری</Link>
        </li>
        <li
          className={`${
            path === "/profile/payments" && "bg-gray-200"
          } p-2 rounded-md hover:bg-gray-200`}
        >
          <Link href="/profile/payments">سفارشات</Link>
        </li>

        <li className="p-2 rounded-md hover:bg-gray-200">
          <button onClick={logoutHandler}>خروج از حساب کاربری</button>
        </li>
      </ul>
    </div>
  );
}
export default SideBar;
