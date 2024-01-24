import Drawer from "@mui/material/Drawer";
import Image from "next/image";
import logo from "@/public/assets/images/logo.svg";
import {
  Close,
  GroupAddOutlined,
  HomeOutlined,
  PersonOutline,
  SentimentSatisfiedAltOutlined,
  ShoppingBagOutlined,
} from "@mui/icons-material";
import Link from "next/link";
import LoginIcon from "@mui/icons-material/Login";
import { useGetUser } from "@/hooks/useAuth";
import Button from "@mui/material/Button";
import { usePathname } from "next/navigation";

const MobileMenu = ({ open, close }) => {
  const { data } = useGetUser();
  const { user } = data || {};
  const pathName = usePathname();
  const navLinks = [
    {
      title: "خانه",
      path: "/",
      icon: <HomeOutlined className="text-gray-500 ml-1" />,
    },
    {
      title: "محصولات",
      path: "/products",
      icon: <ShoppingBagOutlined className="text-gray-500 ml-1" />,
    },
    {
      title: "درباره من",
      path: "/about-me",
      icon: <SentimentSatisfiedAltOutlined className="text-gray-500 ml-1" />,
    },
    {
      title: "پنل کاربر",
      path: "/profile",
      icon: <GroupAddOutlined className="text-gray-500 ml-1" />,
    },
    {
      title: "پنل ادمین",
      path: "/admin",
      icon: <PersonOutline className="text-gray-500 ml-1" />,
    },
  ];
  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={close}
      PaperProps={{
        sx: { width: "280px" },
      }}
    >
      <div className="p-2 flex flex-col justify-between just h-full">
        <div className="flex justify-between items-center border-b-2 pb-2">
          <Image src={logo} />
          <Close className="cursor-pointer" onClick={() => close()} />
        </div>
        <div>
          <ul>
            {navLinks.map((link) => {
              return (
                <li>
                  <Link
                    className={`text-xl block py-3 ${
                      pathName === link.path && "text-blue-600"
                    }`}
                    href={`${link.path}`}
                    onClick={() => close()}
                  >
                    {link.icon}
                    {link.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div>
          {user ? (
            <span>{user.name}</span>
          ) : (
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
                  width: "100%",
                }}
                startIcon={<LoginIcon className="rotate-180" />}
              >
                <p>ورود</p>
              </Button>
            </Link>
          )}
        </div>
      </div>
    </Drawer>
  );
};
export default MobileMenu;
