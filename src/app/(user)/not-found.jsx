"use client";
import Button from "@mui/material/Button";
import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center gap-y-7 md:mb-32">
      <h2 className="font-black text-2xl">صفحه مورد نظر پیدا نشد</h2>
      <Link href="/">
        <Button
          variant="contained"
          style={{
            borderRadius: 50,
            padding: "12px 25px",
            backgroundColor: "rgb(74, 109, 255)",
            fontSize: "16px",
            fontFamily: "inherit",
            fontWeight: "bolder",
            boxShadow: "0px 4px 44px 0px #4A6DFF66",
          }}
        >
          بازگشت به صفحه اصلی
        </Button>
      </Link>
    </div>
  );
};
export default NotFoundPage;
