import React from "react";

const InputWithDropdown = ({ labelName, options, selectedValue, onChange, inputError }) => {
  return (
    <div className="flex flex-col">
      <label className="font-bold">{labelName}</label>
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
      {inputError && <p className="text-red-500 text-xs">{inputError}</p>}
    </div>
  );
};

export default InputWithDropdown;

