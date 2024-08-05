import React from "react";

const FileInput = ({ labelName, onChange, inputError }) => {
  return (
    <div className="flex flex-col gap-1.5">
      <span className="text-homeColor text-sm">{labelName}</span>
      <input
        id="fileInput"
        name="fileInput"
        type="file"
        accept=".jpg, .jpeg, .png"
        onChange={onChange}
        className="h-12 border border-homeColor/25 text-sm rounded-xl self-stretch px-3 py-2.5 text-homeColor"
      />
      {inputError && <p className="text-red-500 text-xs">{inputError}</p>}
    </div>
  );
};

export default FileInput;
