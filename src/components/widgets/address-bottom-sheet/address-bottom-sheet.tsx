import { BottomSheetNew } from "@/components/UI/bottom-sheet/bottom-sheet-new";
import Button from "@/components/UI/button/button";
import { RadioGroup } from "@/components/UI/radio/radio-group";
import React, { useState } from "react";

type Props = {};

export default function AddressBottomSheet({
  onClose,
  isOpen,
  addresses,
  selectedAddress,
  onConfirm,
  onRemove,
}: Props) {
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
    <BottomSheetNew
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
    </BottomSheetNew>
  );
}
