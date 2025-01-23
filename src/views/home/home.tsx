"use client";
import React, { useEffect, useState } from "react";
import { BottomSheetNew } from "@/components/UI/bottom-sheet/bottom-sheet-new";
import Button from "@/components/UI/button/button";
import { Divider } from "@/components/UI/divider/divider";
import { RadioGroup } from "@/components/UI/radio/radio-group";
import Rows from "@/components/UI/rows/rows";
import { TextField } from "@/components/UI/text-field/text-field";
import Image from "next/image";
import CarInformation from "@/components/widgets/car-information/card-information";
import { useOrderCompletion } from "./hook";
import { useRouter, useSearchParams } from "next/navigation";
import AddressBottomSheet from "@/components/widgets/address-bottom-sheet/address-bottom-sheet";
import RetryBottomSheet from "@/components/widgets/retry-bottom-sheet/retry-bottom-sheet";
import OrderCompletionForm from "@/components/widgets/order-completion-form/order-completion-form";
import DeleteConfirmation from "@/components/widgets/delete-confirmation/delete-confirmation";

type Props = {};

export default function Home({}: Props) {
  const {
    handleChange,
    orderDetail,
    errors,
    onSubmit,
    addresses,
    isOpenError,
    selectedAddress,
    onChangeAddress,
    onRemoveAddress,
  } = useOrderCompletion();
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [confrimation, setConfirmation] = useState(false);
  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const isBottomSheetOpen = queryParams.get("bottomSheet") === "open";
    setIsOpen(isBottomSheetOpen);
  }, [searchParams]);

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const confirmation = queryParams.get("remove") === "open";
    setConfirmation(confirmation);
  }, [searchParams]);

  const handleOpen = () => router.push(`?bottomSheet=open`, { shallow: true });

  const handleClose = () => {
    router.back();
  };

  const handleRemove = (addressId) =>
    router.push(`?remove=open&id=${addressId}`, { shallow: true });

  return (
    <div>
      <Divider title="مشخصات بیمه نامه" />
      <CarInformation />
      <Divider title="مشخصات مالک خودرو" />
      <OrderCompletionForm
        errors={errors}
        onChange={handleChange}
        selectedAddress={selectedAddress}
        onSelectAddress={handleOpen}
        onSubmit={onSubmit}
      />
      <DeleteConfirmation
        isOpen={confrimation}
        onClose={() => router.back()}
        onConfirm={onRemoveAddress}
        addresses={addresses}
      />
      <AddressBottomSheet
        onClose={handleClose}
        isOpen={isOpen}
        addresses={addresses}
        selectedAddress={orderDetail?.addressId}
        onConfirm={onChangeAddress}
        onRemove={handleRemove}
      />
      <RetryBottomSheet
        isOpen={false}
        onClose={() => setIsOpen(false)}
        onRetry={onSubmit}
      />
    </div>
  );
}
