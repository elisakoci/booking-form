const validateFormField = (fieldName, fieldValue) => {
  let errorMessage = "";

  switch (fieldName) {
    case "firstName":
    case "lastName":
    case "eventName":
    case "eventDate":
    case "startTime":
    case "endTime":
    case "guests":
    case "eventType":
    case "roomType":
      if (fieldValue.trim() === "") {
        errorMessage = "This field is required";
      }
      break;
    case "email":
      if (!/^\S+@\S+\.\S+$/.test(fieldValue)) {
        errorMessage = "Invalid email format";
      }

      if (fieldValue.trim() === "") {
        errorMessage = "This field is required";
      }
      break;
    case "phone":
      if (!/^\d{10}$/.test(fieldValue)) {
        errorMessage = "Invalid phone number";
      }

      if (fieldValue.trim() === "") {
        errorMessage = "This field is required";
      }
      break;
    default:
      break;
  }

  return errorMessage;
};

export default validateFormField;
