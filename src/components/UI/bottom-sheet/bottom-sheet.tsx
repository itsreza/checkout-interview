"use client";
import { FC, memo } from "react";
import { useBottomSheet } from "./hook";
import styles from "./bottom-sheet.module.scss";
import { BottomSheetPropertiesType } from "./bottom-sheet.types";

const BottomSheet: FC<BottomSheetPropertiesType> = (properties) => {
  const { animate = "bottom", children } = properties;
  const { sheetProperties, animateState } = useBottomSheet(properties);

  //   if (
  //     animateState === "initial" ||
  //     animateState === "entered" ||
  //     animateState === "entering" ||
  //     animateState === "exiting"
  //   ) {
  return (
    <div
      className={`${styles["container"]} ${styles[animate]} ${styles[animateState]}`}
    >
      <div className={styles["overlay"]} />
      <div {...sheetProperties} className={styles["sheet"]}>
        {children}
      </div>
    </div>
  );
  //   }
  return null;
};

export { BottomSheet };
