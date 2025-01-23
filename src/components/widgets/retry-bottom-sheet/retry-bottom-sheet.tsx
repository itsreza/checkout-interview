import { BottomSheetNew } from "@/components/UI/bottom-sheet/bottom-sheet-new";
import Button from "@/components/UI/button/button";
import React, { FC } from "react";
import { RetryBottomSheetPropertiesTypes } from "./types";
import Link from "next/link";

const RetryBottomSheet: FC<RetryBottomSheetPropertiesTypes> = (properties) => {
  const { isOpen, onClose, onRetry, isLoading } = properties;
  return (
    <BottomSheetNew
      title="آدرس‌های من"
      onClose={onClose}
      isOpen={isOpen}
      actions={
        <div className="flex gap-[10px]">
          <Button
            disabled={isLoading}
            loading={isLoading}
            onClick={onRetry}
            fullWidth
            color="secondary"
          >
            تلاش مجدد
          </Button>
          <Link className="w-full" href="/">
            <Button
              disabled={isLoading}
              fullWidth
              variant="outlined"
              color="secondary"
            >
              بازگشت
            </Button>
          </Link>
        </div>
      }
    >
      <div className="flex flex-col gap-[10px] text-black font-medium">
        <span>متاسفانه در ثبت اطلاعات شما، خطایی رخ داده است.</span>
        <span>مجددا، تلاش کنید.</span>
      </div>
    </BottomSheetNew>
  );
};

export { RetryBottomSheet };
