"use client";
import React from "react";
import { useOrderInsurance } from "./hook";
import { useSearchParams } from "next/navigation";
import {
  AddressBottomSheet,
  CarInformation,
  DeleteConfirmation,
  OrderCompletionForm,
  RetryBottomSheet,
} from "@/components/widgets";
import { Button, Divider } from "@/components/UI";
import { useAddresses } from "./hooks";

export default function Home() {
  const {
    orderDetail,
    isLoadingSubmitOrder,
    formProperties,
    onSubmit,
    onChangeAddress,
    onCloseBottomSheet,
    onOpenBottomSheet,
    isDisabledSubmit,
  } = useOrderInsurance();
  const { addressList, getSelectedAddressById, onRemoveAddress } =
    useAddresses();
  const searchParams = useSearchParams();

  // TODO - Open Bottom Sheet can be change more stateless , but for more control still from prop handled.
  // bottom sheets
  const isOpenRetryBottomSheet = searchParams.get("retry") === "open";
  const isOpenAddressBottomSheet = searchParams.get("address") === "open";
  const isOpenDeleteAddressBottomSheet = searchParams.get("remove") === "open";

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">
        <Divider title="مشخصات بیمه نامه" />
        <CarInformation />
        <Divider title="مشخصات مالک خودرو" />
        <OrderCompletionForm
          {...formProperties}
          selectedAddress={getSelectedAddressById(orderDetail?.addressId)}
          onSelectAddress={() => onOpenBottomSheet("?address=open")}
        />
      </div>
      <div className="flex justify-end px-[18px] py-3">
        <Button
          disabled={isDisabledSubmit}
          loading={isLoadingSubmitOrder}
          onClick={onSubmit}
          color="secondary"
        >
          <span>تایید و ادامه</span>
        </Button>
      </div>
      <DeleteConfirmation
        isOpen={isOpenDeleteAddressBottomSheet}
        onClose={onCloseBottomSheet}
        onConfirm={onRemoveAddress}
        addresses={addressList}
      />
      <AddressBottomSheet
        onClose={onCloseBottomSheet}
        isOpen={isOpenAddressBottomSheet}
        addresses={addressList}
        onConfirm={onChangeAddress}
        onRemove={(addressId) =>
          onOpenBottomSheet(`?remove=open&id=${addressId}`)
        }
      />
      <RetryBottomSheet
        isOpen={isOpenRetryBottomSheet}
        onClose={onCloseBottomSheet}
        onRetry={onSubmit}
        isLoading={isLoadingSubmitOrder}
      />
    </div>
  );
}
