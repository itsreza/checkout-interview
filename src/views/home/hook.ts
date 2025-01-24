import { useCallback, useState } from "react";
import { OrderDetailTypes } from "./types";
import { useOrderSubmission, useValidation } from "./hooks";
import { useRouter } from "next/navigation";

const orderFormDefaultValue = {
  nationalId: "",
  phoneNumber: "",
  addressId: "",
};

const useOrderCompletion = () => {
  const router = useRouter();
  const [orderDetail, setOrderDetail] = useState<OrderDetailTypes>(
    orderFormDefaultValue
  );

  const { validate, setErrors } = useValidation();
  const { submitOrder, isLoadingSubmitOrder } = useOrderSubmission();

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

  const onOpenBottomSheet = useCallback(
    (query: string) => router.push(query, { scroll: false }),
    [router]
  );

  const onCloseBottomSheet = useCallback(() => {
    router.back();
  }, [router]);

  return {
    handleChange,
    onSubmit,
    orderDetail,
    onChangeAddress,
    isLoadingSubmitOrder,
    onCloseBottomSheet,
    onOpenBottomSheet,
  };
};

export { useOrderCompletion };
