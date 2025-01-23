import React from "react";
import { Radio } from "./radio";

type RadioGroupProps = {
  name: string;
  options: { id: string; value: string; label: string }[];
  selectedValue: string;
  onChange: (value: string) => void;
};

export const RadioGroup = ({
  name,
  options = [],
  selectedValue,
  onChange,
  onRemove,
}: RadioGroupProps) => {
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
          onRemove={() => onRemove(option.id)}
        />
      ))}
    </div>
  );
};
