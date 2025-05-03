import React, { useState } from "react";
import validateFormField from "../helpers/validateFormField";
import submitStep from "../helpers/submitStep";
import CommonInput from "./CommonInput";
import SelectInput from "./SelectInput";
import RadioInput from "./RadioInput";
import CommonButton from "./CommonButton";
import eventTypes from "../constants/eventTypes";
import roomTypes from "../constants/roomTypes";

// Receive nextStep and updateFormData props
const EventDetails = ({ nextStep, updateFormData }) => {
  // Create a formData state
  // It should contain the eventName, eventDate, startTime, endTime, guests, eventType, and roomType fields
  // The eventType and roomType fields should have default values of "meeting" and "regular" respectively
  const [formData, setFormData] = useState({
    eventName: "",
    eventDate: "",
    startTime: "",
    endTime: "",
    guests: "",
    eventType: "meeting",
    roomType: "regular",
  });
  // Create an errors state
  // It should contain the eventName, eventDate, startTime, endTime, guests, eventType, and roomType fields
  const [errors, setErrors] = useState({
    eventName: "",
    eventDate: "",
    startTime: "",
    endTime: "",
    guests: "",
    eventType: "",
    roomType: "",
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

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: validateFormField(name, value),
    }));
  };

  // Define the submitEventDetails function
  // It should prevent the default form submission behavior
  // Then, it should call the submitStep helper function with the right arguments
  const submitEventDetails = (e) => {
    e.preventDefault();

    submitStep(2, formData, updateFormData, nextStep, setErrors);
  };

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

        <CommonInput
          required
          id="eventName"
          type="text"
          name="eventName"
          label="Event Name"
          value={formData.eventName}
          onChange={handleFormChange}
          error={errors.eventName}
        />
        {/* Render a CommonInput component for the event date field */}
        {/* It should be required */}
        {/* It should have an id of "eventDate" */}
        {/* It should have a type of "date" */}
        {/* It should have a label of "Event Date" */}
        {/* It should display the value of the eventDate field */}
        {/* It should call the handleFormChange function when the value changes */}
        {/* It should display the error for the eventDate field */}

        <CommonInput
          required
          id="eventDate"
          type="date"
          name="eventDate"
          label="Event Date"
          value={formData.eventDate}
          onChange={handleFormChange}
          error={errors.eventDate}
        />
        {/* Render a CommonInput component for the start time field */}
        {/* It should be required */}
        {/* It should have an id of "startTime" */}
        {/* It should have a type of "time" */}
        {/* It should have a label of "Start Time" */}
        {/* It should display the value of the startTime field */}
        {/* It should call the handleFormChange function when the value changes */}
        {/* It should display the error for the startTime field */}

        <CommonInput
          required
          id="startTime"
          type="time"
          name="startTime"
          label="Start Time"
          value={formData.startTime}
          onChange={handleFormChange}
          error={errors.startTime}
        />
        {/* Render a CommonInput component for the end time field */}
        {/* It should be required */}
        {/* It should have an id of "endTime" */}
        {/* It should have a type of "time" */}
        {/* It should have a label of "End Time" */}
        {/* It should display the value of the endTime field */}
        {/* It should call the handleFormChange function when the value changes */}
        {/* It should display the error for the endTime field */}

        <CommonInput
          required
          id="endTime"
          type="time"
          name="endTime"
          label="End Time"
          value={formData.endTime}
          onChange={handleFormChange}
          error={errors.endTime}
        />
        {/* Render a CommonInput component for the number of guests field */}
        {/* It should be required */}
        {/* It should have an id of "guests" */}
        {/* It should have a type of "number" */}
        {/* It should have a label of "Number of Guests" */}
        {/* It should display the value of the guests field */}
        {/* It should call the handleFormChange function when the value changes */}
        {/* It should display the error for the guests field */}

        <CommonInput
          required
          id="guests"
          type="number"
          name="guests"
          label="Number of Guests"
          value={formData.guests}
          onChange={handleFormChange}
          error={errors.guests}
        />
        {/* Render a SelectInput component for the event type field */}
        {/* It should be required */}
        {/* It should have an id of "eventType" */}
        {/* It should have a label of "Event Type" */}
        {/* It should display the value of the eventType field */}
        {/* It should call the handleFormChange function when the value changes */}
        {/* It should display the error for the eventType field */}
        {/* It should use the eventTypes constant as the options */}

        <SelectInput
          required
          id="eventType"
          name="eventType"
          label="Event Type"
          value={formData.eventType}
          onChange={handleFormChange}
          error={errors.eventType}
          options={eventTypes}
        />
        {/* Render a RadioInput component for the room type field */}
        {/* It should be required */}
        {/* It should have a name of "roomType" */}
        {/* It should have a groupLabel of "Room Type" */}
        {/* It should display the value of the roomType field */}
        {/* It should call the handleFormChange function when the value changes */}
        {/* It should display the error for the roomType field */}
        {/* It should use the roomTypes constant as the options */}

        <RadioInput
          required
          name="roomType"
          groupLabel="Room Type"
          value={formData.roomType}
          onChange={handleFormChange}
          error={errors.roomType}
          options={roomTypes}
        />
        {/* Render a CommonButton component */}
        {/* It should have a type of "submit" */}
        {/* It should have a text of "Next" */}

        <CommonButton type="submit" text="Next" />
      </form>
    </div>
  );
};

export default EventDetails;
