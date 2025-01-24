"use client";
import { Button, BottomSheet } from "@/components/UI";
import { useSearchParams } from "next/navigation";
import React, { FC, memo } from "react";
import { AddressTypes, DeleteConfirmationPropertiesTypes } from "./types";

const Component: FC<DeleteConfirmationPropertiesTypes> = (properties) => {
  const { isOpen, onClose, onConfirm, addresses } = properties;
  const searchParams = useSearchParams();
  const id = searchParams.get("id") as string;
  const selectedAddress = addresses.find(
    (address: AddressTypes) => address.id === id
  );

  const handleConfirm = () => {
    onConfirm(id);
    onClose();
  };
  return (
    <BottomSheet
      title="حذف آدرس"
      onClose={onClose}
      isOpen={isOpen}
      actions={
        <div className="flex gap-[10px]">
          <Button onClick={handleConfirm} fullWidth color="secondary">
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
    </BottomSheet>
  );
};
export const DeleteConfirmation = memo(Component);
