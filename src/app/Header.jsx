"use client";

import { useGetUser } from "@/hooks/useAuth";
import Image from "next/image";
import Link from "next/link";
import logoIcon from "../assets/images/logo.svg";
import LoginIcon from "@mui/icons-material/Login";
import { Badge, Button } from "@mui/material";
import { ShoppingCartOutlined } from "@mui/icons-material";

function Header() {
  const { data, error, isLoading } = useGetUser();

  const { user, cart } = data || {};

  return (
    <>
      <div className="bg-gradient-to-l from-rose-600 to-rose-400 p-2">
        <p className="text-center text-sm text-white font-bold">
          بوت کمپ جامع فرانت اند رو نمایی شد 😍
        </p>
      </div>
      <header
        className={`w-full transiton-all ease-out z-20 shadow-md mb-10 sticky top-0 transition-all duration-200 bg-white ${
          isLoading ? "blur-sm opacity-70" : "opacity-100 blur-0"
        }`}
      >
        <div className="container xl:max-w-screen-xl flex items-center gap-5 py-2 justify-between">
          <div className="flex justify-between gap-5">
            <div className="hidden md:flex items-center">
              <Link href={"/"}>
                <Image src={logoIcon} alt="Logo" width={140} height={35} />
              </Link>
            </div>
            <nav>
              <ul className="gap-y-2 md:gap-y-0 flex flex-col md:flex-row md:items-center justify-between gap-x-8 text-secondary-700 md:text-skin-base">
                <li>
                  <Link className="block py-2" href="/">
                    خانه
                  </Link>
                </li>
                <li>
                  <Link className="block py-2" href="/products">
                    محصولات
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <nav>
            <ul className="gap-y-2 md:gap-y-0 flex flex-col md:flex-row md:items-center justify-between gap-x-8 text-secondary-700 md:text-skin-base">
              <li>
                <Link className="block py-2" href="/profile">
                  پنل کاربر
                </Link>
              </li>
              <li>
                <Link className="block py-2" href="/admin">
                  پنل ادمین
                </Link>
              </li>
              <li>
                <Link className="block py-2" href="/cart">
                  <Button variant="outlined" style={{
                    borderColor:"rgb(229, 231, 235)",
                    borderRadius: 16,
                  }}> 
                    <Badge
                      badgeContent={
                        cart ? cart.payDetail.productIds.length : "0"
                      }
                      color="error"
                    >
                      <ShoppingCartOutlined />
                    </Badge>
                  </Button>
                </Link>
              </li>

              {user ? (
                <span>{user.name}</span>
              ) : (
                <li>
                  <Link className="py-2 flex gap-2" href="/auth">
                    <Button
                      variant="contained"
                      style={{
                        borderRadius: 24,
                        padding: "10px 16px",
                        backgroundColor: "rgb(74, 109, 255)",
                        fontFamily: "sans-serif",
                        gap: "10px",
                        display: "flex",
                        alignItems: "center",
                      }}
                      startIcon={<LoginIcon className="rotate-180 mr-0" />}
                    >
                      <p className="-mt-[5px]">ورود</p>
                    </Button>
                  </Link>
                </li>
              )}
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}
export default Header;
