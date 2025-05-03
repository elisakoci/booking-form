import validateFormField from "./validateFormField";

const validateForm = (formData) => {
  const errors = Object.keys(formData).reduce(
    (acc, fieldName) => ({
      ...acc,
      [fieldName]: validateFormField(fieldName, formData[fieldName]),
    }),
    {}
  );

  return errors;
};

export default validateForm;
