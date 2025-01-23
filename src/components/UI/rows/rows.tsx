import React, { FC } from "react";
import { RowsPropertiesTypes } from "./types";

const Rows: FC<RowsPropertiesTypes> = (properties) => {
  const { title, value } = properties;
  return (
    <div className="flex items-center justify-between font-normal text-subtitle-2">
      <span className="flex-none text-grey-900">{title}</span>
      <span className="flex-grow mx-2 border-t border-dashed border-gray-300"></span>
      <span className="flex-none text-black">{value}</span>
    </div>
  );
};

export { Rows };
