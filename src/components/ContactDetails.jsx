import React, { useState } from "react";

import validateFormField from "../helpers/validateFormField";
import submitStep from "../helpers/submitStep";
import CommonInput from "./CommonInput";
import CommonButton from "./CommonButton";

// Receive nextStep and updateFormData props
const ContactDetails = ({ nextStep, updateFormData }) => {
  // Create a formData state
  // It should contain the firstName, lastName, email, and phone fields
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });
  // Create an errors state
  // It should contain the firstName, lastName, email, and phone fields
  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  // Define the handleFormChange function
  // It should update the formData state with the new value
  // It should also update the errors state with the result of the validateFormField helper function
  // The validateFormField function should be called with the right arguments
  const handleFormChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));

    setErrors((prevErros) => ({
      ...prevErros,
      [name]: validateFormField(name, value),
    }));
  };

  // Define the submitContactDetails function
  // It should prevent the default form submission behavior
  // Then, it should call the submitStep helper function with the right arguments
  const submitContactDetails = (e) => {
    e.preventDefault();

    submitStep({
      formData,
      errors,
      setErrors,
      onSuccess: () => {
        updateFormData(1, formData);
        nextStep();
      },
    });
  };

  return (
    <div className="form-step contact-details">
      <form onSubmit={submitContactDetails}>
        {/* Render a CommonInput component for the first name field */}
        {/* It should be required */}
        {/* It should have an id of "firstName" */}
        {/* It should have a type of "text" */}
        {/* It should have a name of "firstName" */}
        {/* It should have a label of "First Name" */}
        {/* It should display the value of the firstName field */}
        {/* It should call the handleFormChange function when the value changes */}
        {/* It should display the error for the firstName field */}
        <CommonInput
          required
          id="firstName"
          type="text"
          name="firstName"
          label="First Name"
          value={formData.firstName}
          onChange={handleFormChange}
          error={errors.firstName}
        />
        {/* Render a CommonInput component for the last name field */}
        {/* It should be required */}
        {/* It should have an id of "lastName" */}
        {/* It should have a type of "text" */}
        {/* It should have a name of "lastName" */}
        {/* It should have a label of "Last Name" */}
        {/* It should display the value of the lastName field */}
        {/* It should call the handleFormChange function when the value changes */}
        {/* It should display the error for the lastName field */}
        <CommonInput
          required
          id="lastName"
          type="text"
          name="lastName"
          label="Last Name"
          value={formData.lastName}
          onChange={handleFormChange}
          error={errors.lastName}
        />
        {/* Render a CommonInput component for the email field */}
        {/* It should be required */}
        {/* It should have an id of "email" */}
        {/* It should have a type of "email" */}
        {/* It should have a name of "email" */}
        {/* It should have a label of "Email" */}
        {/* It should display the value of the email field */}
        {/* It should call the handleFormChange function when the value changes */}
        {/* It should display the error for the email field */}
        <CommonInput
          required
          id="email"
          type="email"
          name="email"
          label="Email"
          value={formData.email}
          onChange={handleFormChange}
          error={errors.email}
        />
        {/* Render a CommonInput component for the phone field */}
        {/* It should be required */}
        {/* It should have an id of "phone" */}
        {/* It should have a type of "tel" */}
        {/* It should have a name of "phone" */}
        {/* It should have a label of "Phone Number" */}
        {/* It should display the value of the phone field */}
        {/* It should call the handleFormChange function when the value changes */}
        {/* It should display the error for the phone field */}
        <CommonInput
          required
          id="phone"
          type="tel"
          name="phone"
          label="Phone Number"
          value={formData.phone}
          onChange={handleFormChange}
          error={errors.phone}
        />
        {/* Render a CommonButton component */}
        {/* It should have a type of "submit" */}
        {/* It should have a text of "Next" */}
        <CommonButton type="submit" text="Next" />
      </form>
    </div>
  );
};

export default ContactDetails;
