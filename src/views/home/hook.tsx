import { useState } from "react";
import { OrderDetailTypes } from "./types";
import { useAddresses, useOrderSubmission, useValidation } from "./hooks";

const orderFormDefaultValue = {
  nationalId: "",
  phoneNumber: "",
  addressId: "",
};

const useOrderCompletion = () => {
  const [orderDetail, setOrderDetail] = useState<OrderDetailTypes>(
    orderFormDefaultValue
  );
  const [isOpenRetry, setIsOpenRetry] = useState<boolean>(false);
  const {
    addressList,
    isLoading: isLoadingAddresses,
    removeAddress,
    getSelectedAddressById,
  } = useAddresses();
  const { errors, validate, setErrors } = useValidation();
  const { submitOrder, isLoadingSubmitOrder } = useOrderSubmission(() =>
    setIsOpenRetry(true)
  );

  const handleChange = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = e?.target;
    setErrors((prevState) => ({ ...prevState, [name]: "" }));
    setOrderDetail((prevState) => ({ ...prevState, [name]: value }));
  };

  const onChangeAddress = (addressId: string) =>
    setOrderDetail((prevState) => ({ ...prevState, addressId }));

  const onSubmit = () => {
    if (validate(orderDetail)) {
      submitOrder(orderDetail);
    }
  };

  const onCloseRetry = () => {
    setIsOpenRetry(false);
  };

  return {
    handleChange,
    onSubmit,
    orderDetail,
    errors,
    addresses: addressList,
    onRemoveAddress: removeAddress,
    isLoadingAddresses,
    isOpenRetry,
    onChangeAddress,
    selectedAddress: getSelectedAddressById(orderDetail.addressId),
    isLoadingSubmitOrder,
    onCloseRetry,
  };
};

export { useOrderCompletion };
