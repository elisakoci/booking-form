import React from "react";

// Receive nextStep and updateFormData props
const AdditionalServices = (
  {
    // ...
  }
) => {
  // Create a formData state
  // It should contain the additionalServices field
  // The additionalServices field should have an empty array as the default value
  // ...
  // Create an errors state
  // It should contain the additionalServices field
  // ...

  // Define the handleFormChange function
  // It should update the formData state with the new value
  // It should also update the errors state with the result of the validateFormField helper function
  // The validateFormField function should be called with the right arguments
  // ...

  // Define the submitAdditionalServices function
  // It should prevent the default form submission behavior
  // Then, it should call the submitStep helper function with the right arguments
  // ...

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
        {/* ... */}
        {/* Render a CommonButton component */}
        {/* It should have a type of "submit" */}
        {/* It should have a text of "Next" */}
        {/* ... */}
      </form>
    </div>
  );
};

export default AdditionalServices;
