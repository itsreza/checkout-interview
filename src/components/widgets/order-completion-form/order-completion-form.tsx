import { Button } from "@/components/UI";
import React, { FC, Fragment, memo } from "react";
import { OrderCompletionFormPropertiesTypes } from "./types";
import { TextField } from "@/components/UI";

const Component: FC<OrderCompletionFormPropertiesTypes> = (properties) => {
  const { errors, onChange, selectedAddress, onSelectAddress } = properties;

  return (
    <div className="px-[18px] flex flex-col pt-6 gap-6">
      <div className="flex flex-col gap-3">
        <span className="text-black text-headline-6 font-medium">
          لطفا اطلاعات شخصی مالک خودرو را وارد کنید:
        </span>
        <div className="flex gap-2 flex-col">
          <TextField
            error={Boolean(!!errors?.nationalId)}
            helperText={errors?.nationalId}
            onBlur={onChange}
            type="tel"
            placeholder="کد ملی"
            name="nationalId"
          />
          <TextField
            error={Boolean(!!errors?.phoneNumber)}
            helperText={errors?.phoneNumber}
            name="phoneNumber"
            onBlur={onChange}
            type="tel"
            placeholder="شماره تلفن همراه"
          />
        </div>
      </div>
      <div className="flex flex-col gap-1.5">
        <span className={`text-black text-headline-6 font-medium`}>
          آدرس جهت درج روی بیمه نامه
        </span>
        {selectedAddress?.details ? (
          <span className="text-caption text-grey-700">
            {selectedAddress?.details}
          </span>
        ) : (
          <Fragment>
            <p
              className={`text-black text-subtitle-2 font-normal ${
                errors?.addressId ? "text-error" : ""
              }`}
            >
              لطفا آدرسی را که می‌خواهید روی بیمه‌نامه درج شود, وارد کنید.
            </p>
            <Button onClick={onSelectAddress} fullWidth>
              <span>انتخاب از آدرس‌های من</span>
            </Button>
          </Fragment>
        )}
      </div>
    </div>
  );
};

export const OrderCompletionForm = memo(Component);
