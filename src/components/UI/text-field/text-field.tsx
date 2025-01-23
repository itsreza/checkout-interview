import React, { FC, memo } from "react";
import { TextFieldPropertiesTypes } from "./types";

const Component: FC<TextFieldPropertiesTypes> = (properties) => {
  const {
    type = "text",
    placeholder,
    onBlur,
    name,
    error,
    helperText = " ",
  } = properties;
  return (
    <div className="flex flex-col gap-1">
      <input
        className={`border w-full outline-none p-3 border-grey-400 text-black placeholder:text-grey-700 ${
          error ? "border-error text-error placeholder:text-error" : ""
        }`}
        type={type}
        placeholder={placeholder}
        dir="rtl"
        onBlur={onBlur}
        name={name}
      />
      <span
        className={`text-error font-normal text-subtitle-2 transition-opacity ${
          helperText ? "visible opacity-100" : "invisible opacity-0 h-[22px]"
        }`}
      >
        {helperText}
      </span>
    </div>
  );
};

export const TextField = memo(Component);
