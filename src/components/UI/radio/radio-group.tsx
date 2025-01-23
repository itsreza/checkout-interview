import React, { FC } from "react";
import { Radio } from "./radio";
import { RadioGroupPropertiesTypes } from "./types";

export const RadioGroup: FC<RadioGroupPropertiesTypes> = (properties) => {
  const { name, options = [], selectedValue, onChange, onRemove } = properties;
  return (
    <div className="flex flex-col gap-4">
      {options?.map((option) => (
        <Radio
          key={option.id}
          id={option.id}
          name={name}
          value={option.value}
          checked={selectedValue === option.value}
          onChange={onChange}
          title={option.title}
          description={option?.description}
          onRemove={() => onRemove?.(option.id)}
        />
      ))}
    </div>
  );
};
