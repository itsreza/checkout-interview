import { validateOrderDetail } from "@/utils/validations/validations";
import { OrderDetailErrorsTypes, OrderDetailTypes } from "../types";
import { useState } from "react";

const useValidation = () => {
  const [errors, setErrors] = useState<OrderDetailErrorsTypes>({});

  const validate = (orderDetail: OrderDetailTypes) => {
    const { validationErrors, isValid } = validateOrderDetail(orderDetail);
    setErrors(validationErrors);
    return isValid;
  };

  return { errors, validate, setErrors };
};

export { useValidation };
