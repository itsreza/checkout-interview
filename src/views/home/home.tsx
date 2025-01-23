"use client";
import React, { useEffect, useState } from "react";
import { useOrderCompletion } from "./hook";
import { useRouter, useSearchParams } from "next/navigation";
import {
  AddressBottomSheet,
  CarInformation,
  DeleteConfirmation,
  OrderCompletionForm,
  RetryBottomSheet,
} from "@/components/widgets";
import { Divider } from "@/components/UI";

export default function Home() {
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
    isLoadingSubmitOrder,
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
        isOpen={true}
        onClose={() => setIsOpen(false)}
        onRetry={onSubmit}
        isLoading={isLoadingSubmitOrder}
      />
    </div>
  );
}
