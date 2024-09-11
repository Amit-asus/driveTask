import React from "react";

function MyInputComponent({ name, value, label, handleChange , type = "text" ,placeholder}) {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <span>------</span>
      <input
        type= {type}
        name={name}
        id={name}
        value={value || ""}
        onChange={handleChange}
        placeholder= {placeholder}
      />
    </div>
  );
}

export default MyInputComponent;
