"use client";
import React, { useCallback, useEffect, useState } from "react";
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
    isOpenRetry,
    selectedAddress,
    onChangeAddress,
    onRemoveAddress,
    isLoadingSubmitOrder,
    onCloseRetry,
  } = useOrderCompletion();
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [confrimation, setConfirmation] = useState(false);

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const isBottomSheetOpen = queryParams.get("address") === "open";
    setIsOpen(isBottomSheetOpen);
  }, [searchParams]);

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const confirmation = queryParams.get("remove") === "open";
    setConfirmation(confirmation);
  }, [searchParams]);

  const handleOpen = useCallback(() => {
    router.push(`?address=open`, { scroll: false });
  }, [router]);

  const handleClose = useCallback(() => {
    router.back();
  }, [router]);

  const handleRemove = useCallback(
    (addressId: string) => {
      router.push(`?remove=open&id=${addressId}`, { scroll: false });
    },
    [router]
  );
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
        onClose={handleClose}
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
        isOpen={isOpenRetry}
        onClose={onCloseRetry}
        onRetry={onSubmit}
        isLoading={isLoadingSubmitOrder}
      />
    </div>
  );
}
