import React from "react";
import styles from "./button.module.scss";
import Image from "next/image";
type ButtonPropertiesTypes = {
  color?: "primary" | "secondary";
  variant?: "contained" | "outlined";
  disabled?: boolean;
  loading?: boolean;
  fullWidth?: boolean;
  children: React.ReactNode | string;
};

export default function Button(properties: ButtonPropertiesTypes) {
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
}
