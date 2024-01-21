import Drawer from "@mui/material/Drawer";
import Image from "next/image";
import logo from "../assets/images/logo.svg";
import { Close, GroupAddOutlined } from "@mui/icons-material";
import Link from "next/link";
import LoginIcon from "@mui/icons-material/Login";
import { useGetUser } from "@/hooks/useAuth";
import Button from "@mui/material/Button";

const MobileMenu = ({ open, close }) => {
  const { data } = useGetUser();
  const { user } = data || {};
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
            <li>
              <Link className="block py-2" href="/profile">
                <GroupAddOutlined className="text-gray-400 ml-1" />
                پنل کاربر
              </Link>
            </li>
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
