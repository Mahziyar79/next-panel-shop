"use client";
import Button from "@mui/material/Button";

// Error components must be Client Components

export default function Error({ reset }) {
  return (
    <div className="flex flex-col items-center gap-y-7">
      <h2 className="font-black text-2xl">مشکلی به وجود آمد</h2>
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
        onClick={() => reset()}
      >
        دوباره تلاش کنید
      </Button>
    </div>
  );
}
