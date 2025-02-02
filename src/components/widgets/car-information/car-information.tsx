import { Rows } from "@/components/UI";
import Image from "next/image";
import React, { FC, memo } from "react";

const Component: FC = () => {
  return (
    <div className="max-w-[280px] mx-auto flex flex-col gap-6 pt-6 pb-8">
      <Image
        src="/car_plate.svg"
        width={280}
        height={50}
        alt="پلاک خودرو"
        loading="eager"
        priority
      />
      <div className="flex flex-col gap-2">
        <Rows title="شرکت بیمه گر" value="پارسیان" />
        <Rows title="برند خودرو" value="پژو" />
        <Rows title="مدل خودرو" value="206 تیپ 6" />
      </div>
    </div>
  );
};

export const CarInformation = memo(Component);
