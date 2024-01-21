"use client";
import React, { useState } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { CheckCircle, FmdBadOutlined, GitHub, LinkedIn } from "@mui/icons-material";
import Link from "next/link";

const WelcomeModal = () => {
  const [open, setOpen] = useState(true);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Modal open={open} onClose={handleClose} className="w-full md:w-[700px] mx-auto">
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "96%",
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            borderRadius: "10px",
          }}
        >
          <div className="flex gap-x-1">
            <FmdBadOutlined fontSize="small" />
            <h2 className="font-black mb-2">
              این سایت برای کسب تجربه بیشتر طراحی شده است!
            </h2>
          </div>
          <p className="text-sm leading-6">
            سلام خدمت دوستان عزیز ، این سایت برای افزایش مهارت و مواجه با چالش
            های واقعی طراحی شده است و هیچکدام از محصولات واقعی نیستند!
          </p>
          <p className="text-sm mt-2">
            - دیزاین سایت از سایت فرانت هوکس گرفته شده است.
          </p>
          <p className="text-sm mt-2">
            - در ادامه به برخی از امکانات و قابلیت های سایت اشاره میکنم :
          </p>
          <div className="mt-3 flex flex-wrap gap-y-2 gap-x-8">
            <div className="flex gap-x-1 items-center w-full md:w-[47%] shadow-lg p-2">
              <CheckCircle color="success" fontSize="small" />
              <span className="text-sm">ورود و ثبت نام با شماره موبایل</span>
            </div>
            <div className="flex gap-x-1 items-center w-full md:w-[47%] shadow-lg p-2">
              <CheckCircle color="success" fontSize="small" />
              <span className="text-sm">
                دارای پنل ادمین و کاربر (احراز هویت)
              </span>
            </div>
            <div className="flex gap-x-1 items-center w-full md:w-[47%] shadow-lg p-2">
              <CheckCircle color="success" fontSize="small" />
              <span className="text-sm">فیلتر پیشرفته محصولات</span>
            </div>
            <div className="flex gap-x-1 items-center w-full md:w-[47%] shadow-lg p-2">
              <CheckCircle color="success" fontSize="small" />
              <span className="text-sm">
                قابلیت افزودن دسته بندی ، محصول ، کد تخقیف و...
              </span>
            </div>
          </div>
          <p className="text-center mt-6 m-3">یه گشتی داخل سایت بزنید 😀</p>
          <div className="flex items-center justify-center gap-x-4">
            <Link href={'https://www.linkedin.com/in/mahziyar-gilanpour'}><LinkedIn /></Link>
            <Link href={'https://github.com/Mahziyar79'}><GitHub /></Link>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default WelcomeModal;
