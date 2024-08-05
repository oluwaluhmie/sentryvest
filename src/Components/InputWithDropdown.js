import React from "react";

const InputWithDropdown = ({
  labelName,
  options,
  selectedValue,
  onChange,
  inputError,
}) => {
  const selectedStyle = {
    color: selectedValue ? "#052A3C" : "#000000",
  };

  return (
    <div className="flex flex-col gap-2">
      <span className="text-homeColor text-sm">
        {labelName}
      </span>
      <select
        value={selectedValue}
        onChange={onChange}
        className="h-12 border text-sm border-homeColor/25 rounded-xl text-searchBoxText px-3 self-stretch"
        style={selectedStyle}
      >
        <option value="" disabled>
          Select option
        </option>
        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
            className="text-homeColor text-sm"
          >
            {option.label}
          </option>
        ))}
      </select>
      {inputError && <p className="text-red-500 text-xs">{inputError}</p>}
    </div>
  );
};

export default InputWithDropdown;
