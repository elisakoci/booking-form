import React from "react";

// Receive nextStep and updateFormData props
const EventDetails = (
  {
    // ...
  }
) => {
  // Create a formData state
  // It should contain the eventName, eventDate, startTime, endTime, guests, eventType, and roomType fields
  // The eventType and roomType fields should have default values of "meeting" and "regular" respectively
  // ...
  // Create an errors state
  // It should contain the eventName, eventDate, startTime, endTime, guests, eventType, and roomType fields
  // ...

  // Define the handleFormChange function
  // It should update the formData state with the new value
  // It should also update the errors state with the result of the validateFormField helper function
  // The validateFormField function should be called with the right arguments
  // ...

  // Define the submitEventDetails function
  // It should prevent the default form submission behavior
  // Then, it should call the submitStep helper function with the right arguments
  // ...

  return (
    <div className="form-step event-details">
      <form onSubmit={submitEventDetails}>
        {/* Render a CommonInput component for the event name field */}
        {/* It should be required */}
        {/* It should have an id of "eventName" */}
        {/* It should have a type of "text" */}
        {/* It should have a label of "Event Name" */}
        {/* It should display the value of the eventName field */}
        {/* It should call the handleFormChange function when the value changes */}
        {/* It should display the error for the eventName field */}
        {/* ... */}
        {/* Render a CommonInput component for the event date field */}
        {/* It should be required */}
        {/* It should have an id of "eventDate" */}
        {/* It should have a type of "date" */}
        {/* It should have a label of "Event Date" */}
        {/* It should display the value of the eventDate field */}
        {/* It should call the handleFormChange function when the value changes */}
        {/* It should display the error for the eventDate field */}
        {/* ... */}
        {/* Render a CommonInput component for the start time field */}
        {/* It should be required */}
        {/* It should have an id of "startTime" */}
        {/* It should have a type of "time" */}
        {/* It should have a label of "Start Time" */}
        {/* It should display the value of the startTime field */}
        {/* It should call the handleFormChange function when the value changes */}
        {/* It should display the error for the startTime field */}
        {/* ... */}
        {/* Render a CommonInput component for the end time field */}
        {/* It should be required */}
        {/* It should have an id of "endTime" */}
        {/* It should have a type of "time" */}
        {/* It should have a label of "End Time" */}
        {/* It should display the value of the endTime field */}
        {/* It should call the handleFormChange function when the value changes */}
        {/* It should display the error for the endTime field */}
        {/* ... */}
        {/* Render a CommonInput component for the number of guests field */}
        {/* It should be required */}
        {/* It should have an id of "guests" */}
        {/* It should have a type of "number" */}
        {/* It should have a label of "Number of Guests" */}
        {/* It should display the value of the guests field */}
        {/* It should call the handleFormChange function when the value changes */}
        {/* It should display the error for the guests field */}
        {/* ... */}
        {/* Render a SelectInput component for the event type field */}
        {/* It should be required */}
        {/* It should have an id of "eventType" */}
        {/* It should have a label of "Event Type" */}
        {/* It should display the value of the eventType field */}
        {/* It should call the handleFormChange function when the value changes */}
        {/* It should display the error for the eventType field */}
        {/* It should use the eventTypes constant as the options */}
        {/* ... */}
        {/* Render a RadioInput component for the room type field */}
        {/* It should be required */}
        {/* It should have a name of "roomType" */}
        {/* It should have a groupLabel of "Room Type" */}
        {/* It should display the value of the roomType field */}
        {/* It should call the handleFormChange function when the value changes */}
        {/* It should display the error for the roomType field */}
        {/* It should use the roomTypes constant as the options */}
        {/* ... */}
        {/* Render a CommonButton component */}
        {/* It should have a type of "submit" */}
        {/* It should have a text of "Next" */}
        {/* ... */}
      </form>
    </div>
  );
};

export default EventDetails;
