import React, { FC, memo } from "react";
import styles from "./button.module.scss";
import Image from "next/image";
import { ButtonPropertiesTypes } from "./types";

const Component: FC<ButtonPropertiesTypes> = (properties) => {
  const {
    color = "primary",
    variant = "contained",
    disabled,
    loading,
    fullWidth,
    children,
    onClick,
  } = properties;
  return (
    <button
      className={`${styles.button}  ${styles[variant]} ${styles[color]} ${
        disabled ? styles["disabled"] : ""
      } ${loading ? styles["loading"] : ""} ${
        fullWidth ? styles["fullWidth"] : ""
      }`}
      disabled={loading || disabled}
      onClick={onClick}
    >
      <div className="flex gap-[10px]">
        {loading && (
          <Image
            src="/icons/loading.svg"
            width={20}
            height={20}
            alt="درحال بررسی"
          />
        )}
        {children}
      </div>
    </button>
  );
};

export const Button = memo(Component);
