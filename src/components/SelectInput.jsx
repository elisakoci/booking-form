import React from "react";

const SelectInput = ({
  id,
  name,
  label,
  options,
  value,
  onChange,
  required,
  error,
}) => (
  <div className={`input-group ${required ? "required" : ""}`}>
    <label htmlFor={id}>{label}</label>
    <select id={id} name={name} value={value} onChange={onChange}>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
    {<span className={`error ${error ? "visible" : ""}`}>{error || ""}</span>}
  </div>
);

export default SelectInput;
