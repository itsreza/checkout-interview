"use client";
import { BottomSheet, Button } from "@/components/UI";
import { RadioGroup } from "@/components/UI/radio/radio-group";
import React, { FC, memo, useEffect, useState } from "react";
import { AddressBottomSheetPropertiesTypes, AddressTypes } from "./types";

const Component: FC<AddressBottomSheetPropertiesTypes> = (properties) => {
  const { onClose, isOpen, addresses, selectedAddress, onConfirm, onRemove } =
    properties;
  const [selected, setSelected] = useState<string | undefined>(selectedAddress);

  useEffect(() => {
    if (selectedAddress) {
      setSelected(selectedAddress);
    }
  }, [isOpen]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setSelected(event?.target?.value);

  const handleConfirm = () => {
    onConfirm(selected || "");
    onClose();
  };

  return (
    <BottomSheet
      title="آدرس‌های من"
      onClose={onClose}
      isOpen={isOpen}
      actions={
        <Button onClick={handleConfirm} fullWidth color="secondary">
          <span>انتخاب</span>
        </Button>
      }
    >
      <RadioGroup
        name="addressId"
        options={addresses?.map((address: AddressTypes) => ({
          id: address?.id,
          value: address?.id,
          title: address?.name,
          description: address?.details,
        }))}
        selectedValue={selected}
        onChange={handleChange}
        onRemove={onRemove}
      />
    </BottomSheet>
  );
};

export const AddressBottomSheet = memo(Component);
