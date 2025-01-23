import { BottomSheet, Button } from "@/components/UI";
import { RadioGroup } from "@/components/UI/radio/radio-group";
import React, { FC, useState } from "react";
import { AddressBottomSheetPropertiesTypes } from "./types";

const AddressBottomSheet: FC<AddressBottomSheetPropertiesTypes> = (
  properties
) => {
  const { onClose, isOpen, addresses, selectedAddress, onConfirm, onRemove } =
    properties;
  const [selected, setSelected] = useState(selectedAddress);

  useState(() => {
    setSelected(selectedAddress);
  }, [selectedAddress]);

  const handleChange = (event) => setSelected(event?.target?.value);

  const handleConfirm = () => {
    onConfirm(selected);
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
        options={addresses?.map((address) => ({
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

export { AddressBottomSheet };
