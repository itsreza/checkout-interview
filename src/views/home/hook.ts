import { useCallback, useState } from "react";
import { OrderDetailTypes } from "./types";
import { useOrderSubmission, useValidation } from "./hooks";
import { useRouter } from "next/navigation";

const orderFormDefaultValue = {
  nationalId: "",
  phoneNumber: "",
  addressId: "",
};

const useOrderInsurance = () => {
  const router = useRouter();
  const [orderDetail, setOrderDetail] = useState<OrderDetailTypes>(
    orderFormDefaultValue
  );
  const { validate, setErrors, errors } = useValidation();
  const { submitOrder, isLoadingSubmitOrder } = useOrderSubmission();

  const isDisabledSubmit =
    !orderDetail?.phoneNumber ||
    !orderDetail?.nationalId ||
    !orderDetail?.addressId ||
    isLoadingSubmitOrder;

  const handleChange = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = e?.target;
    setErrors((prevState) => ({ ...prevState, [name]: "" }));
    setOrderDetail((prevState) => ({ ...prevState, [name]: value }));
  };

  const onChangeAddress = useCallback(
    (addressId: string) =>
      setOrderDetail((prevState) => ({ ...prevState, addressId })),
    []
  );

  const onSubmit = useCallback(() => {
    if (validate(orderDetail)) {
      submitOrder(orderDetail);
    }
  }, [orderDetail]);

  const onOpenBottomSheet = useCallback(
    (query: string) => router.push(query, { scroll: false }),
    [router]
  );

  const onCloseBottomSheet = useCallback(() => {
    router.back();
  }, [router]);

  return {
    formProperties: {
      errors,
      onChange: handleChange,
    },
    onSubmit,
    orderDetail,
    onChangeAddress,
    isLoadingSubmitOrder,
    onCloseBottomSheet,
    onOpenBottomSheet,
    isDisabledSubmit,
  };
};

export { useOrderInsurance };
