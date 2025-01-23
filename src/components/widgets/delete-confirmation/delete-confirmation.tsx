import { BottomSheetNew } from "@/components/UI/bottom-sheet/bottom-sheet-new";
import Button from "@/components/UI/button/button";
import { useSearchParams } from "next/navigation";

import React from "react";

type Props = {};

export default function DeleteConfirmation({
  isOpen,
  onClose,
  onConfirm,
  addresses,
}: Props) {
  const searchParams = useSearchParams(); // Access the query parameters
  const id = searchParams.get("id");
  const selectedAddress = addresses.find((address) => address.id === id);
  return (
    <BottomSheetNew
      title="حذف آدرس"
      onClose={onClose}
      isOpen={isOpen}
      actions={
        <div className="flex gap-[10px]">
          <Button onClick={() => onConfirm(id)} fullWidth color="secondary">
            <span>تایید</span>
          </Button>
          <Button fullWidth variant="outlined" color="secondary">
            <span>بازگشت</span>
          </Button>
        </div>
      }
    >
      <span className="text-subtitle-2 text-black font-medium">
        آیا از حذف آدرس خود، مطمئن هستید؟
      </span>
      <div className="bg-grey-100 p-2 flex flex-col gap-2 mt-4">
        <span className="text-black font-medium">{selectedAddress?.name}</span>
        <span className="text-grey-700 font-normal text-caption">
          {selectedAddress?.details}
        </span>
      </div>
    </BottomSheetNew>
  );
}
