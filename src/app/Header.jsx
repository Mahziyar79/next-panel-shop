"use client";

import { useGetUser } from "@/hooks/useAuth";
import Image from "next/image";
import Link from "next/link";
import logoIcon from "@/public/assets/images/logo.svg";
import mobileIcon from "@/public/assets/images/mobile-logo.svg";
import LoginIcon from "@mui/icons-material/Login";
import { Badge, Button } from "@mui/material";
import {
  GroupAddOutlined,
  HomeOutlined,
  MenuOutlined,
  PersonOutline,
  SentimentSatisfiedAltOutlined,
  ShoppingBagOutlined,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import { useState } from "react";
import MobileMenu from "@/components/MobileMenu";

function Header() {
  const { data, isLoading } = useGetUser();
  const { user, cart } = data || {};
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div className="bg-gradient-to-l from-rose-600 to-rose-400 p-2 z-20 relative">
        <p className="text-center text-sm text-white font-bold">
          بوت کمپ جامع فرانت اند رو نمایی شد 😍
        </p>
      </div>
      <header
        className={`backdrop-blur-2xl	w-full transiton-all ease-out z-20 mb-10 sticky top-0 transition-all duration-200  ${
          isLoading ? "blur-sm opacity-70" : "opacity-100 blur-0"
        }`}
      >
        <div className="container xl:max-w-screen-xl flex items-center gap-5 py-2 justify-between px-2 md:px-0">
          <div className="gap-5 text-gray-500 items-center md:hidden flex">
            <MenuOutlined
            fontSize="large"
              className="cursor-pointer"
              onClick={() => setIsMenuOpen(true)}
            />
            <Link href="/">
              <Image src={mobileIcon} />
            </Link>
          </div>
          <div className="justify-between gap-5 hidden md:flex">
            <div className="hidden md:flex items-center">
              <Link href={"/"}>
                <Image src={logoIcon} alt="Logo" width={140} height={35} />
              </Link>
            </div>
            <nav>
              <ul className="gap-y-2 md:gap-y-0 flex flex-col md:flex-row md:items-center justify-between gap-x-8 text-secondary-700 md:text-skin-base">
                <li>
                  <Link className="block py-2" href="/">
                    <HomeOutlined className="text-gray-400 ml-1" />
                    خانه
                  </Link>
                </li>
                <li>
                  <Link className="block py-2" href="/products">
                    <ShoppingBagOutlined className="text-gray-400 ml-1" />
                    محصولات
                  </Link>
                </li>
                <li>
                  <Link className="block py-2" href="/about-me">
                    <SentimentSatisfiedAltOutlined className="text-gray-400 ml-1" />
                    درباره من
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <nav>
            <ul className="gap-y-2 md:gap-y-0 flex md:items-center justify-between gap-x-4 text-secondary-700 md:text-skin-base">
              <li className="hidden md:flex">
                <Link className="block py-2" href="/profile">
                  <GroupAddOutlined className="text-gray-400 ml-1" />
                  پنل کاربر
                </Link>
              </li>
              <li className="hidden md:flex">
                <Link className="block py-2" href="/admin">
                  <PersonOutline className="text-gray-400 ml-1" />
                  پنل ادمین
                </Link>
              </li>
              <li>
                <Link className="block py-2" href="/cart">
                  <Button
                    variant="outlined"
                    style={{
                      borderColor: "rgb(229, 231, 235)",
                      borderRadius: 16,
                      minWidth: "10px",
                      padding: "5px 8px",
                    }}
                  >
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
                        padding: "10px 10px 10px 16px",
                        backgroundColor: "rgb(74, 109, 255)",
                        fontFamily: "inherit",
                        gap: "10px",
                        display: "flex",
                        alignItems: "center",
                      }}
                      startIcon={<LoginIcon className="rotate-180" />}
                    >
                      <p>ورود</p>
                    </Button>
                  </Link>
                </li>
              )}
            </ul>
          </nav>
        </div>
      </header>
      <MobileMenu open={isMenuOpen} close={() => setIsMenuOpen(false)} />
    </>
  );
}
export default Header;
