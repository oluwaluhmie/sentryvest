import React from "react";

const InputWithLabel = ({
  labelName,
  inputType,
  placeholder,
  inputValue,
  inputOnChange,
  inputError,
  inputName,
}) => {
  return (
    <div className="grid">
      <span className="text-base font-bold text-homeColor pb-1">{labelName}:</span>
      <input
        type={inputType}
        value={inputValue}
        name={inputName}
        placeholder={placeholder}
        onChange={inputOnChange}
        className="h-12 rounded-xl border border-buttonColor self-stretch px-3"
      />
      <code className="text-red-500 text-xs">{inputError}</code>
    </div>
  );
};

export default InputWithLabel;
