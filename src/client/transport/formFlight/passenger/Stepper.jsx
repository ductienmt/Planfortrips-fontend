import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepButton from "@mui/material/StepButton";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { PassengerPage } from "./PassengerPage";
import { PaymentFlight } from "./PaymentFlight";
import { Card } from "antd";

const steps = ["Thông tin khách hàng", "Thanh toán"];

export default function HorizontalNonLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState({});

  const totalSteps = () => steps.length;

  const completedSteps = () => Object.keys(completed).length;

  const isLastStep = () => activeStep === totalSteps() - 1;

  const allStepsCompleted = () => completedSteps() === totalSteps();

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  const handleComplete = () => {
    const newCompleted = { ...completed, [activeStep]: true };
    setCompleted(newCompleted);
    handleNext();
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
  };
  React.useEffect(() => {
    window.scrollTo(0, 0); // to scroll to the top of the page when the component mounts up.  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Box sx={{ width: "75%", margin: "auto", marginTop: "140px" }}>
      <Stepper nonLinear activeStep={activeStep}>
        {steps.map((label, index) => (
          <Step key={label} completed={completed[index]}>
            <StepButton color="inherit" onClick={handleStep(index)}>
              {label}
            </StepButton>
          </Step>
        ))}
      </Stepper>
      <div>
        {allStepsCompleted() ? (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>
              <Card
                className="d-flex justify-content-center"
                style={{
                  fontSize: "20px",
                  fontWeight: "bolder",
                  color: "#000",
                }}
              >
                {" "}
                Thanh toán thành công!
              </Card>
            </Typography>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1, py: 1 }}>
              {activeStep === 0 && (
                <PassengerPage handleComplete={handleComplete} />
              )}
              {activeStep === 1 && (
                <PaymentFlight handleComplete={handleComplete} />
              )}
            </Typography>
          </React.Fragment>
        )}
      </div>
    </Box>
  );
}
