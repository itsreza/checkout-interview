import React, { FC } from "react";
import { TextFieldPropertiesTypes } from "./types";

const TextField: FC<TextFieldPropertiesTypes> = (properties) => {
  const {
    type = "text",
    placeholder,
    onBlur,
    name,
    error,
    helperText,
  } = properties;
  return (
    <div className="flex flex-col gap-2">
      <input
        className={`border w-full outline-none p-3 border-grey-400 text-grey-700 ${
          error ? "border-error text-error placeholder:text-error" : ""
        }`}
        type={type}
        placeholder={placeholder}
        dir="rtl"
        onBlur={onBlur}
        name={name}
      />
      {helperText && (
        <span className="text-error font-normal text-subtitle-2">
          {helperText}
        </span>
      )}
    </div>
  );
};

export { TextField };
