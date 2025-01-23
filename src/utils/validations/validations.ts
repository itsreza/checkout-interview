// Validate Iranian National ID
export const validateNationalId = (nationalId) => {
  const nationalIdRegex = /^\d{10}$/;
  if (!nationalId.trim()) {
    return "وارد کردن کد ملی الزامیست.";
  }
  if (!nationalIdRegex.test(nationalId)) {
    return "کدملی وارد شده معتبر نیست.";
  }
  return "";
};

// Validate Phone Number
export const validatePhoneNumber = (phoneNumber) => {
  const phone = phoneNumber.trim();
  if (!phone) {
    return "وارد کردن تلفن همراه الزامیست.";
  }
  if (
    !(
      (
        (phone.length === 11 && phone.startsWith("09")) || // 10 digits and starts with 09
        (phone.length === 10 && phone.startsWith("9"))
      ) // 11 digits and starts with 9
    )
  ) {
    return "شماره تلفن همراه معتبر نیست.";
  }
  return ""; // No error
};

// Validate Address ID
export const validateAddressId = (addressId) => {
  if (!addressId.trim()) {
    return "انتخاب آدرس الزامیست.";
  }
  return ""; // No error
};

export const validateOrderDetail = (orderDetail: any) => {
  const validationErrors = {
    nationalId: validateNationalId(orderDetail.nationalId),
    phoneNumber: validatePhoneNumber(orderDetail.phoneNumber),
    addressId: validateAddressId(orderDetail.addressId),
  };

  const isValid = !Object.values(validationErrors).some((error) => error);

  return { validationErrors, isValid };
};
