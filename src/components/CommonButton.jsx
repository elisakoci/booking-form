import React from "react";

import Spinner from "./Spinner";

const CommonButton = ({
  type,
  text,
  onClick,
  containerClassName,
  buttonClassName,
  loading = false,
  disabled = false,
}) => (
  <div className={`common-button-container ${containerClassName || ""}`}>
    <button
      className={`common-button ${buttonClassName || ""}`}
      type={type}
      onClick={onClick}
      disabled={loading || disabled}
    >
      {loading && <Spinner customClassName="button-spinner" />}
      <span>{text}</span>
    </button>
  </div>
);

export default CommonButton;
