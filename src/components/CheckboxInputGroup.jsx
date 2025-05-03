import React from "react";

const CheckboxInputGroup = ({
  name,
  groupLabel,
  options,
  value,
  onChange,
  required,
  error,
}) => (
  <div className={`input-group checkbox-group ${required ? "required" : ""}`}>
    <p className="group-label">{groupLabel}</p>
    <div className="checkbox-elements-container">
      {options.map((option) => (
        <div className="checkbox-element" key={option.value}>
          <input
            type="checkbox"
            id={option.value}
            name={name}
            value={option.value}
            checked={value?.includes(option.value)}
            onChange={onChange}
          />
          <label htmlFor={option.value}>{option.label}</label>
        </div>
      ))}
    </div>
    {<span className={`error ${error ? "visible" : ""}`}>{error || ""}</span>}
  </div>
);

export default CheckboxInputGroup;
