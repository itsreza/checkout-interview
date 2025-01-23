import Image from "next/image";
import React from "react";

const SuccessMessage: React.FC = () => {
  return (
    <div className="flex flex-col gap-4 justify-center items-center mt-6 mb-2">
      <Image src="/success.svg" alt="درخواست موفق" width={60} height={66} />
      <span className="text-black text-button font-medium">
        ثبت اطلاعات شما، با <span className="text-success">موفقیت</span> انجام
        شد.
      </span>
    </div>
  );
};

export { SuccessMessage };
