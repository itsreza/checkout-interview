import { validateOrderDetail } from "@/utils/validations/validations";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { useGetAddresses, useSubmitOrder } from "./queries";
import {
  AddressItemTypes,
  OrderDetailErrorsTypes,
  OrderDetailTypes,
} from "./types";
import { successOrderRoute } from "./constants";

const orderFormDefaultValue = {
  nationalId: "",
  phoneNumber: "",
  addressId: "",
};

const useOrderCompletion = () => {
  const [addressList, setAddressList] = useState<Array<AddressItemTypes>>([]);
  const [orderDetail, setOrderDetail] = useState<OrderDetailTypes>(
    orderFormDefaultValue
  );
  const [errors, setErrors] = useState<OrderDetailErrorsTypes>(
    orderFormDefaultValue
  );

  const [isOpenError, setIsOpenError] = useState(false);

  const { push } = useRouter();

  const { data: addresses, isLoading, isError, refetch } = useGetAddresses();

  useEffect(() => {
    if (addresses) {
      setAddressList(addresses);
    }
  }, [addresses]);

  useEffect(() => {
    refetch();
  }, [refetch]);

  const { mutate: submitOrder, isPending: isLoadingSubmitOrder } =
    useSubmitOrder(
      () => {
        push(successOrderRoute);
      },
      () => {
        setIsOpenError(true);
      }
    );

  const validate = (orderDetail: OrderDetailTypes) => {
    const { validationErrors, isValid } = validateOrderDetail(orderDetail);
    setErrors(validationErrors);
    return isValid;
  };

  const handleChange = (e) => {
    const { name, value } = e?.target;
    setOrderDetail((prevState) => ({ ...prevState, [name]: value }));
  };

  const onChangeAddress = (addressId: string) =>
    setOrderDetail((prevState) => ({ ...prevState, addressId }));

  const onSubmit = () => {
    if (validate(orderDetail)) {
      submitOrder(orderDetail);
    }
  };

  const onRemoveAddress = (addressId: string) => {
    const removed = addressList.filter((address) => address.id !== addressId);
    setAddressList(removed);
  };

  const getSelectedAddressById = (addressId?: string) =>
    addressList.find((address) => address.id === addressId);

  return {
    handleChange,
    onSubmit,
    orderDetail,
    errors,
    addresses: addressList,
    onRemoveAddress,
    isLoadingAddresses: isLoading,
    isErrorAddresses: isError,
    isOpenError,
    onChangeAddress,
    selectedAddress: getSelectedAddressById(orderDetail.addressId),
    isLoadingSubmitOrder,
  };
};

export { useOrderCompletion };
