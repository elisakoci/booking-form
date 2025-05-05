import React, { useState } from "react";

import FormHeader from "./FormHeader";
import StepIndicator from "./StepIndicator";
import Instructions from "./Instructions";
import HorizontalLine from "./HorizontalLine";
import FormStepRenderer from "./FormStepRenderer";
import createReservation from "../helpers/createReservation";

const BookingForm = () => {
  // Manage the loading state of the submit button (creatingReservation)
  // It should start as false
  const [creatingReservation, setCreatingReservation] = useState(false);
  // Manage the state for the current step (step)
  // It should start at 1
  const [step, setStep] = useState(1);
  // Manage the state for the form data (formData)
  // It should contain number keys for each step and an empty object as the value
  // The third step should contain an empty array as the value
  const [formData, setFormData] = useState({
    1: {},
    2: {},
    3: [],
  });

  // Define the nextStep function
  // It should increment the current step by 1
  const nextStep = () => {
    setStep((prevStep) => prevStep + 1);
  };

  // Define the updateFormData function
  // It should update the form data for a specific step
  // The function should receive the step name and the data to update
  const updateFormData = (stepName, data) => {
    setFormData((prevData) => {
      const updatedFormData = {
        ...prevData,
        [stepName]: {
          ...prevData[stepName], //merge te dhenat e reja me dhenat e vjetra
          ...data,
        },
      };
      console.log(`1111 step ${stepName}):`, updatedFormData);
      return updatedFormData;
    });
  };

  // Define the submitForm function
  // It should set the creatingReservation state to true
  // Then, it should call the createReservation helper function
  // Pass the form data and a callback function to the createReservation function
  // The callback function should set the creatingReservation state to false
  // It should also reset the step (1) and form data ({ 1: {}, 2: {}, 3: [] }) states
  // Finally, it should display an alert with the message "Reservation created!"
  const submitForm = () => {
    setCreatingReservation(true);

    createReservation(formData, () => {
      setCreatingReservation(false);
      setStep(1);
      setFormData({ 1: {}, 2: {}, 3: [] });
      alert("Reservation created!");
    });
  };

  return (
    <div className="booking-form">
      {/* Render the FormHeader component */}
      <FormHeader />
      {/* Render the StepIndicator component */}
      {/* Pass the currentStep as a prop */}
      <StepIndicator currentStep={step} />
      {/* Render the Instructions component */}
      <Instructions />
      {/* Render the HorizontalLine component */}
      <HorizontalLine />
      {/* Render the FormStepRenderer component */}
      {/* Pass the step, formData, nextStep, updateFormData, submitForm, and creatingReservation as props */}
      <FormStepRenderer
        step={step}
        formData={formData}
        nextStep={nextStep}
        updateFormData={updateFormData}
        submitForm={submitForm}
        creatingReservation={creatingReservation}
      />
    </div>
  );
};

export default BookingForm;
