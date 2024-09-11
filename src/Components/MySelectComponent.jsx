import React from "react";

const MySelectComponent = ({ name, label, value, options, handleChange }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <span>----------</span>
      <select
        id={name}
        name={name}
        value={value || ""} // Ensure value is defaulted to empty string if undefined
        onChange={handleChange}
        className="form-control"
      >
        <option value="">Select {label}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default MySelectComponent;
