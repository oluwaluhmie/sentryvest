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
      <label className="text-homeColor font-DMsans text-sm font-semibold">
        {labelName}
      </label>
      {inputType === "textarea" ? (
        <textarea
          value={inputValue}
          name={inputName}
          placeholder={placeholder}
          onChange={inputOnChange}
          className="h-24 border text-sm border-homeColor/25 rounded-xl px-5 py-2 self-stretch resize-none font-DMsans"
        />
      ) : (
        <input
          type={inputType}
          value={inputValue}
          name={inputName}
          placeholder={placeholder}
          onChange={inputOnChange}
          className="border border-homeColor/25 text-sm rounded-xl self-stretch px-5 py-2 font-DMsans"
        />
      )}
      {InputError && <code className="text-red-500 text-xs">{InputError}</code>}
    </div>
  );
};

export default InputWithLabel;
