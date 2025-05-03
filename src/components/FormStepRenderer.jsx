import React from "react";

// Receive the step, formData, nextStep, updateFormData, submitForm, and creatingReservation props
const FormStepRenderer = (
  {
    // ...
  }
) => {
  // Create a stepComponents object
  // It should contain key value pairs for each step number and its corresponding component
  // The first step should render the ContactDetails component
  // Pass the nextStep and updateFormData functions as props
  // The second step should render the EventDetails component
  // Pass the nextStep and updateFormData functions as props
  // The third step should render the AdditionalServices component
  // Pass the nextStep and updateFormData functions as props
  // The fourth step should render the Summary component
  // Pass the formData, submitForm, and creatingReservation as props
  // ...

  return (
    <div className="form-step-container">
      {/* Render the component for the current step */}
      {/* Use the stepComponents object and the step prop to render the correct component */}
      {/* ... */}
    </div>
  );
};

export default FormStepRenderer;
