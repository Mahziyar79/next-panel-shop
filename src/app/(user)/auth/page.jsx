"use client";
import { useEffect, useState } from "react";
import SendOTPFrom from "./SendOTPForm";
import { toast } from "react-hot-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { checkOtp, getOtp } from "../../../services/authServices";
import CheckOTPForm from "./CheckOTPForm";
import { useRouter } from "next/navigation";
import StepperComponent from "@/components/StepperComponent";
const RESEND_TIME = 90;

function AuthPage() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState(1);
  const [time, setTime] = useState(RESEND_TIME);
  const queryClient = useQueryClient();
  const router = useRouter();
  const {
    data: otpResponse,
    error,
    isLoading,
    mutateAsync: mutateGetOtp,
  } = useMutation({
    mutationFn: getOtp,
  });
  const { mutateAsync: mutateCheckOtp, isLoading: isCechkingOtp } = useMutation(
    {
      mutationFn: checkOtp,
    }
  );

  const phoneNumberHandler = (e) => {
    setPhoneNumber(e.target.value);
  };

  const sendOtpHandler = async (e) => {
    e.preventDefault();
    try {
      const data = await mutateGetOtp({ phoneNumber });
      toast.success(data.message);
      setStep(2);
      setTime(RESEND_TIME);
      setOtp("");
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };
  const checkOtpHandler = async (e) => {
    e.preventDefault();
    try {
      const { message, user } = await mutateCheckOtp({ phoneNumber, otp });

      toast.success(message);
      if (user.isActive) {
        router.push("/");
        queryClient.invalidateQueries({ queryKey: ["get-user"] });
      } else {
        router.push("/complete-profile");
        queryClient.invalidateQueries({ queryKey: ["get-user"] });
      }
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  useEffect(() => {
    const timer = time > 0 && setInterval(() => setTime((t) => t - 1), 1000);
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [time]);

  const renderSteps = () => {
    switch (step) {
      case 1:
        return (
          <SendOTPFrom
            phoneNumber={phoneNumber}
            onChange={phoneNumberHandler}
            onSubmit={sendOtpHandler}
            isLoading={isLoading}
          />
        );
      case 2:
        return (
          <CheckOTPForm
            onBack={() => setStep((s) => s - 1)}
            otp={otp}
            setOtp={setOtp}
            onSubmit={checkOtpHandler}
            time={time}
            onResendOtp={sendOtpHandler}
            otpResponse={otpResponse}
            isCechkingOtp={isCechkingOtp}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex justify-center flex-col items-center px-4 md:px-0">
      <div className="w-full sm:max-w-sm">
        <StepperComponent />
      </div>
      <div className="w-full sm:max-w-sm bg-white p-4 mt-10 rounded-lg">
        {renderSteps()}
      </div>
    </div>
  );
}

export default AuthPage;
