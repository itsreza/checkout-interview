import { BottomSheetNew } from "@/components/UI/bottom-sheet/bottom-sheet-new";
import Button from "@/components/UI/button/button";
import React from "react";

type Props = {};

export default function RetryBottomSheet({ isOpen, onClose, onRetry }: Props) {
  return (
    <BottomSheetNew
      title="آدرس‌های من"
      onClose={onClose}
      isOpen={isOpen}
      actions={
        <div className="flex gap-[10px]">
          <Button
            disabled
            loading={true}
            onClick={onRetry}
            fullWidth
            color="secondary"
          >
            <span>تلاش مجدد</span>
          </Button>
          <Button
            disabled={true}
            fullWidth
            variant="outlined"
            color="secondary"
          >
            <span>بازگشت</span>
          </Button>
        </div>
      }
    >
      <div className="flex flex-col gap-[10px] text-black font-medium">
        <span>متاسفانه در ثبت اطلاعات شما، خطایی رخ داده است.</span>
        <span>مجددا، تلاش کنید.</span>
      </div>
    </BottomSheetNew>
  );
}
