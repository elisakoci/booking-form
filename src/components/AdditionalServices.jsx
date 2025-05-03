import React, { useState } from "react";

import validateFormField from "../helpers/validateFormField";
import submitStep from "../helpers/submitStep";
import CheckboxInputGroup from "./CheckboxInputGroup";
import CommonButton from "./CommonButton";
import services from "../constants/services";

// Receive nextStep and updateFormData props
const AdditionalServices = ({ nextStep, updateFormData }) => {
  // Create a formData state
  // It should contain the additionalServices field
  // The additionalServices field should have an empty array as the default value
  const [formData, setFormData] = useState({
    additionalServices: [],
  });
  // Create an errors state
  // It should contain the additionalServices field
  const [errors, setErrors] = useState({ additionalServices: "" });

  // Define the handleFormChange function
  // It should update the formData state with the new value
  // It should also update the errors state with the result of the validateFormField helper function
  // The validateFormField function should be called with the right arguments
  const handleFormChange = () => {
    const { name, value } = errors.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: validateFormField(name, value),
    }));
  };

  // Define the submitAdditionalServices function
  // It should prevent the default form submission behavior
  // Then, it should call the submitStep helper function with the right arguments
  const submitAdditionalServices = (e) => {
    e.preventDefault();

    submitStep(3, formData, updateFormData, nextStep, setErrors);
  };

  return (
    <div className="form-step additional-services">
      <form onSubmit={submitAdditionalServices}>
        {/* Render the CheckboxInputGroup component */}
        {/* It should have a name of "additionalServices" */}
        {/* It should have a groupLabel of "Additional Services" */}
        {/* It should display the value of the additionalServices field */}
        {/* It should call the handleFormChange function when the value changes */}
        {/* It should display the error for the additionalServices field */}
        {/* It should use the services constant as the options */}
        <CheckboxInputGroup
          name="additionalServices"
          groupLabel="Additional Services"
          value={formData.additionalServices}
          onChange={handleFormChange}
          error={errors.additionalServices}
          options={services}
        />
        {/* Render a CommonButton component */}
        {/* It should have a type of "submit" */}
        {/* It should have a text of "Next" */}
        <CommonButton type="submit" text="Next" />
      </form>
    </div>
  );
};

export default AdditionalServices;
