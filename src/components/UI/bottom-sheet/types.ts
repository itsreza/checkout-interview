import { PropsWithChildren } from "react";

export type BottomSheetAnimateType = "normal" | "bottom";

export type BottomSheetPropertiesType = PropsWithChildren<
  Pick<
    JSX.IntrinsicElements["div"],
    "aria-labelledby" | "aria-describedby" | "className" | "id"
  > & {
    animate?: BottomSheetAnimateType;
    title?: string;
    open: boolean;
    onClose: () => void;
  }
>;
