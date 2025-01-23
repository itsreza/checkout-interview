export type OrderDetailTypes = {
  nationalId?: string;
  phoneNumber?: string;
  addressId?: string;
};

export const validateNationalId = (nationalId?: string) => {
  const nationalIdRegex = /^\d{10}$/;
  if (!nationalId?.trim()) {
    return "وارد کردن کد ملی الزامیست.";
  }
  if (!nationalIdRegex.test(nationalId)) {
    return "کدملی وارد شده معتبر نیست.";
  }
  return "";
};

export const validatePhoneNumber = (phoneNumber?: string) => {
  const phone = phoneNumber?.trim();
  if (!phone) {
    return "وارد کردن تلفن همراه الزامیست.";
  }
  if (
    !(
      (phone.length === 11 && phone.startsWith("09")) ||
      (phone.length === 10 && phone.startsWith("9"))
    )
  ) {
    return "شماره تلفن همراه معتبر نیست.";
  }
  return "";
};

export const validateAddressId = (addressId?: string) => {
  if (!addressId?.trim()) {
    return "انتخاب آدرس الزامیست.";
  }
  return "";
};

export const validateOrderDetail = (orderDetail: OrderDetailTypes) => {
  const validationErrors = {
    nationalId: validateNationalId(orderDetail.nationalId),
    phoneNumber: validatePhoneNumber(orderDetail.phoneNumber),
    addressId: validateAddressId(orderDetail.addressId),
  };

  const isValid = !Object.values(validationErrors).some((error) => error);

  return { validationErrors, isValid };
};
