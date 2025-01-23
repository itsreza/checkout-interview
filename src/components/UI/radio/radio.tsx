import Image from "next/image";
import React from "react";

type RadioProps = {
  id: string;
  name: string;
  value: string;
  checked: boolean;
  onChange: (value: string) => void;
  label: string;
};

export const Radio = ({
  id,
  name,
  value,
  checked,
  onChange,
  title,
  description,
  onRemove,
}: RadioProps) => {
  return (
    <div className="flex items-start gap-2 w-full">
      <div className="h-[22px] flex justify-center items-center">
        <input
          id={id}
          type="radio"
          name={name}
          value={value}
          checked={checked}
          onChange={onChange}
          className="w-4 h-4 appearance-none border-2 border-radio rounded-full checked:border-radio checked:bg-black flex-shrink-0"
        />
      </div>
      <label htmlFor={id} className="w-full flex flex-col gap-2">
        <div className="flex justify-between">
          <span className="text-subtitle-2 text-black">{title}</span>
          <Image
            onClick={onRemove}
            width={10}
            height={10}
            src="/icons/close-red.svg"
            alt="حذف"
          />
        </div>
        <p className="text-grey-700 text-caption ">{description}</p>
      </label>
    </div>
  );
};
