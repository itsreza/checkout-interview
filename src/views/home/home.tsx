"use client";
import React from "react";
import { useOrderCompletion } from "./hook";
import { useSearchParams } from "next/navigation";
import {
  AddressBottomSheet,
  CarInformation,
  DeleteConfirmation,
  OrderCompletionForm,
  RetryBottomSheet,
} from "@/components/widgets";
import { Button, Divider } from "@/components/UI";
import { useAddresses, useValidation } from "./hooks";

export default function Home() {
  const {
    handleChange,
    orderDetail,
    onSubmit,
    onChangeAddress,
    isLoadingSubmitOrder,
    onCloseBottomSheet,
    onOpenBottomSheet,
  } = useOrderCompletion();
  const { errors } = useValidation();
  const {
    addressList: addresses,
    getSelectedAddressById,
    removeAddress: onRemoveAddress,
  } = useAddresses();
  const searchParams = useSearchParams();
  const selectedAddress = getSelectedAddressById();

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">
        <Divider title="مشخصات بیمه نامه" />
        <CarInformation />
        <Divider title="مشخصات مالک خودرو" />
        <OrderCompletionForm
          errors={errors}
          onChange={handleChange}
          selectedAddress={selectedAddress}
          onSelectAddress={() => onOpenBottomSheet("?address=open")}
        />
      </div>
      <div className="flex justify-end px-[18px] py-3">
        <Button
          disabled={isLoadingSubmitOrder}
          loading={isLoadingSubmitOrder}
          onClick={onSubmit}
          color="secondary"
        >
          <span>تایید و ادامه</span>
        </Button>
      </div>
      <DeleteConfirmation
        isOpen={searchParams.get("remove") === "open"}
        onClose={onCloseBottomSheet}
        onConfirm={onRemoveAddress}
        addresses={addresses}
      />
      <AddressBottomSheet
        onClose={onCloseBottomSheet}
        isOpen={searchParams.get("address") === "open"}
        addresses={addresses}
        selectedAddress={orderDetail?.addressId}
        onConfirm={onChangeAddress}
        onRemove={(addressId) =>
          onOpenBottomSheet(`?remove=open&id=${addressId}`)
        }
      />
      <RetryBottomSheet
        isOpen={searchParams.get("retry") === "open"}
        onClose={onCloseBottomSheet}
        onRetry={onSubmit}
        isLoading={isLoadingSubmitOrder}
      />
    </div>
  );
}
