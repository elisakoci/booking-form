import React from "react";

const RadioInput = ({
  name,
  groupLabel,
  options,
  value,
  onChange,
  required,
  error,
}) => (
  <div className={`input-group radio-group ${required ? "required" : ""}`}>
    <p className="group-label">{groupLabel}</p>
    <div className="radio-elements-container">
      {options.map((option) => (
        <div className="radio-element" key={option.value}>
          <input
            type="radio"
            id={option.value}
            name={name}
            value={option.value}
            checked={value === option.value}
            onChange={onChange}
          />
          <label htmlFor={option.value}>{option.label}</label>
        </div>
      ))}
    </div>
    {<span className={`error ${error ? "visible" : ""}`}>{error || ""}</span>}
  </div>
);

export default RadioInput;
