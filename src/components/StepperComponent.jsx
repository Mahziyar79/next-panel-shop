import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";


const steps = [
  "احراز هویت",
  "تکمیل اطلاعات",
  "ثبت سفارش",
];

export default function StepperComponent() {
  return (
    <Box sx={{ width: "100%", fontFamily:"inherit" }}>
      <Stepper activeStep={0} alternativeLabel>
      {steps.map((label) => (
    <Step key={label}>
      <StepLabel>{label}</StepLabel>
    </Step>
  ))}
      </Stepper>
    </Box>
  );
}
