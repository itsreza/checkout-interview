// "use server";
import { axiosInstance } from "@/utils/fetcher/axios";
import {
  validateAddressId,
  validateNationalId,
  validateOrderDetail,
  validatePhoneNumber,
} from "@/utils/validations/validations";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { useGetAddresses, useSubmitOrder } from "./queries";

const useOrderCompletion = () => {
  const defaultValues = {
    nationalId: "",
    phoneNumber: "",
    addressId: "",
  };

  const [orderDetail, setOrderDetail] = useState<object>(defaultValues);
  const [errors, setErrors] = useState(defaultValues);
  const [isOpenError, setIsOpenError] = useState(false);
  const [localAddresses, setLocalAddresses] = useState([]);
  const { push } = useRouter();

  const { data: addresses, isLoading, isError, refetch } = useGetAddresses();

  useEffect(() => {
    if (addresses) {
      setLocalAddresses(addresses); // Update local state when query data changes
    }
  }, [addresses]);

  //   const {
  //     mutate: submitOrder,
  //     isLoading: isSubmitting,
  //     isError: isErrorSubmitting,
  //   } = useMutation({
  //     mutationFn: async (orderDetail) => {
  //       const response = await axiosInstance.post(
  //         "/order/completion/",
  //         orderDetail
  //       );
  //       return response.data;
  //     },
  //     onSuccess: () => {
  //       push("/success-insurance");
  //     },
  //     onError: (error) => {
  //       setIsOpenError(true);
  //     },
  //   });

  const { mutate: submitOrder, isPending } = useSubmitOrder(
    () => {
      push("/success-insurance");
    },
    () => {
      setIsOpenError(true);
    }
  );

  // Fetch addresses when the component mounts
  useEffect(() => {
    refetch();
  }, [refetch]);

  const validate = (orderDetail) => {
    const { validationErrors, isValid } = validateOrderDetail(orderDetail);
    setErrors(validationErrors);
    return isValid;
  };

  const handleChange = (e) => {
    const { name, value } = e?.target;
    setOrderDetail((prevState) => ({ ...prevState, [name]: value }));
  };

  const onChangeAddress = (addressId) =>
    setOrderDetail((prevState) => ({ ...prevState, addressId }));

  const onSubmit = () => {
    if (validate(orderDetail)) {
      submitOrder(orderDetail);
    }
  };

  const onRemoveAddress = (addressId) => {
    const removed = localAddresses.filter(
      (address) => address.id !== addressId
    );
    setLocalAddresses(removed);
  };

  return {
    handleChange,
    onSubmit,
    orderDetail,
    errors,
    addresses: localAddresses,
    onRemoveAddress,
    isLoadingAddresses: isLoading,
    isErrorAddresses: isError,
    isOpenError,
    onChangeAddress,
    selectedAddress: addresses?.find(
      (item) => item?.id === orderDetail?.addressId
    ),
  };
};

export { useOrderCompletion };
