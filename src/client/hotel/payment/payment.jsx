import "./payment.css";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { Link } from "react-router-dom";
import { useState } from "react";
import PaymentForm from "../../payment-form/PaymentForm";

const Payment = () => {
  const steps = ["Bạn chọn", "Nhập thông tin của bạn", "Bước cuối cùng"];
  return (
    <>
      <div className="container con-pay">
        <Stepper activeStep={2}>
          {steps.map((label) => {
            const labelProps = {};

            return (
              <Step key={label}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        <div className="content">
          <div className="payment-info">
            <div className="content">
              <PaymentForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Payment;
