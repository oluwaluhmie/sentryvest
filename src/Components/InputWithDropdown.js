import React from "react";

const InputWithDropdown = ({
  labelName,
  options,
  selectedValue,
  onChange,
  inputError,
}) => {
  return (
    <div className="grid">
      <span className="text-base font-bold text-homeColor pb-1">{labelName}:</span>
      <select
        value={selectedValue}
        onChange={onChange}
        className="h-12 rounded-xl border border-buttonColor self-stretch px-3"
      >
        <option value="" disabled>Select an option</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <code className="text-red-500 text-xs">{inputError}</code>
    </div>
  );
};

export default InputWithDropdown;
