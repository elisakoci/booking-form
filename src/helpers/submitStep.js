import validateForm from "./validateForm";

const submitStep = (
  stepName,
  formData,
  updateFormData,
  nextStep,
  setErrors
) => {
  const formErrors = validateForm(formData);

  const isFormValid = !Object.values(formErrors).some((error) => error !== "");

  if (isFormValid) {
    updateFormData(stepName, formData);
    nextStep();
  } else {
    setErrors(formErrors);
  }
};

export default submitStep;
