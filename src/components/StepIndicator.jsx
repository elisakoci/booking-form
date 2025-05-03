import React from "react";

const StepIndicator = ({ currentStep }) => (
  <div className="step-indicator">
    <span className={`step ${currentStep === 1 ? "active" : ""}`}>1</span>
    <span className={`step ${currentStep === 2 ? "active" : ""}`}>2</span>
    <span className={`step ${currentStep === 3 ? "active" : ""}`}>3</span>
    <span className={`step ${currentStep === 4 ? "active" : ""}`}>4</span>
  </div>
);

export default StepIndicator;
