import Image from "next/image";
import React, { FC } from "react";
import { DividerPropertiesTypes } from "./types";

const Divider: FC<DividerPropertiesTypes> = (properties) => {
  const { title } = properties;
  return (
    <div className="flex gap-1.5 items-center shadow-test px-2 py-3">
      <div className="w-[32px] h-[32px] bg-main-yellow flex justify-center items-center rounded-[5px]">
        <Image src="/icons/car.svg" alt="Home Icon" width={21} height={21} />
      </div>
      <h2 className="text-black text-headline-5 font-medium">{title}</h2>
    </div>
  );
};

export { Divider };
