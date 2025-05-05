import React from "react";

import SummarySection from "./SummarySection";
import CommonButton from "./CommonButton";

import eventTypes from "../constants/eventTypes";
import roomTypes from "../constants/roomTypes";
import services from "../constants/services";

// Receive the formData, submitForm, and creatingReservation props
const Summary = ({ formData, submitForm, creatingReservation }) => {
  const contactDetails = formData[1];
  const eventDetails = formData[2];
  const additionalServices = formData[3]?.additionalServices;

  const roomCost = roomTypes.find(
    (roomType) => roomType.value === eventDetails.roomType
  ).price || 0;

  const additionalServicesCost = additionalServices.reduce(
    (total, additionalService) =>
      total +
      services.find((service) => service.value === additionalService).price || 0,
    0
  );

  const totalCost = roomCost + additionalServicesCost;

  const contactDetailsData = [
    {
      label: "First Name",
      value: contactDetails.firstName,
    },
    {
      label: "Last Name",
      value: contactDetails.lastName,
    },
    {
      label: "Email",
      value: contactDetails.email,
    },
    {
      label: "Phone",
      value: contactDetails.phone,
    },
  ];

  const eventDetailsData = [
    {
      label: "Event Name",
      value: eventDetails.eventName,
    },
    {
      label: "Event Date",
      value: eventDetails.eventDate,
    },
    {
      label: "Start Time",
      value: eventDetails.startTime,
    },
    {
      label: "End Time",
      value: eventDetails.endTime,
    },
    {
      label: "Number of Guests",
      value: eventDetails.guests,
    },
    {
      label: "Event Type",
      value: eventTypes.find(
        (eventType) => eventType.value === eventDetails.eventType
      ).label,
    },
    {
      label: "Room Type",
      value: roomTypes.find(
        (roomType) => roomType.value === eventDetails.roomType
      ).label,
    },
  ];

  const additionalServicesData = additionalServices.map(
    (additionalService) =>
      services.find((service) => service.value === additionalService).label
  );

  const costData = [
    {
      label: "Room Cost",
      value: `$${roomCost}`,
    },
    {
      label: "Additional Services Cost",
      value: `$${additionalServicesCost}`,
    },
    {
      label: "Total Cost",
      value: `$${totalCost}`,
    },
  ];

  return (
    <div className="form-step summary">
      {/* Render a SummarySection component */}
      {/* It should have a title of "Contact Details" */}
      {/* It should display the contactDetailsData */}
      <SummarySection title="Contact Details" data={contactDetailsData} />
      {/* Render a SummarySection component */}
      {/* It should have a title of "Event Details" */}
      {/* It should display the eventDetailsData */}
      <SummarySection title="Event Details" data={eventDetailsData} />
      {/* Render a SummarySection component */}
      {/* It should have a title of "Additional Services" */}
      {/* It should display the additionalServicesData */}
      <SummarySection
        title="Additional Services"
        data={additionalServicesData}
      />
      {/* Render a SummarySection component */}
      {/* It should have a title of "Cost" */}
      {/* It should display the costData */}
      <SummarySection title="Cost" data={costData} />
      {/* Render a CommonButton component for the submit button */}
      {/* It should have a type of "submit" */}
      {/* It should have a text of "Confirm Booking" */}
      {/* It should call the submitForm function when clicked */}
      {/* It should have a loading prop set to the creatingReservation prop */}
      <CommonButton
        type="submit"
        text="Confirm Booking"
        onClick={submitForm}
        loading={creatingReservation}
      />
    </div>
  );
};

export default Summary;
