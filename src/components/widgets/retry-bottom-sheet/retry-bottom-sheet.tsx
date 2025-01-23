import React, { FC } from "react";
import { RetryBottomSheetPropertiesTypes } from "./types";
import Link from "next/link";
import { BottomSheet, Button } from "@/components/UI";

const RetryBottomSheet: FC<RetryBottomSheetPropertiesTypes> = (properties) => {
  const { isOpen, onClose, onRetry, isLoading } = properties;
  return (
    <BottomSheet
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
    </BottomSheet>
  );
};

export { RetryBottomSheet };
