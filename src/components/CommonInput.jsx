import React from "react";

const CommonInput = ({
  id,
  type,
  name,
  label,
  value,
  onChange,
  required,
  error,
}) => (
  <div className={`input-group ${required ? "required" : ""}`}>
    <label htmlFor={id}>{label}</label>
    <input id={id} type={type} name={name} value={value} onChange={onChange} />
    {<span className={`error ${error ? "visible" : ""}`}>{error || ""}</span>}
  </div>
);

export default CommonInput;
