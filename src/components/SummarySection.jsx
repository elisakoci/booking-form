import React from "react";

const SummarySection = ({ title, data }) => (
  <div className="summary-section">
    <h3 className="title">{title}</h3>
    {data.map((item, index) => {
      if (typeof item === "string") {
        return (
          <div key={index} className="field">
            <span className="value">{item}</span>
          </div>
        );
      }

      return (
        <div key={index} className="field">
          <span className="label">{item.label}:</span>
          <span className="value">{item.value}</span>
        </div>
      );
    })}
  </div>
);

export default SummarySection;
