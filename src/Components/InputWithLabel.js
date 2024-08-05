import React from "react";

const InputWithLabel = ({
  labelName,
  inputType,
  placeholder,
  inputValue,
  inputOnChange,
  InputError,
  inputName,
}) => {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-homeColor text-sm">
        {labelName}
      </label>
      {inputType === "textarea" ? (
        <textarea
          value={inputValue}
          name={inputName}
          placeholder={placeholder}
          onChange={inputOnChange}
          className="h-24 border text-sm border-homeColor/25 rounded-xl px-5 self-stretch resize-none"
        />
      ) : (
        <input
          type={inputType}
          value={inputValue}
          name={inputName}
          placeholder={placeholder}
          onChange={inputOnChange}
          className="h-12 border border-homeColor/25 text-sm rounded-xl self-stretch px-5"
        />
      )}
      {InputError && <code className="text-red-500 text-xs">{InputError}</code>}
    </div>
  );
};

export default InputWithLabel;
