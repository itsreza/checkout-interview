import { MouseEvent, useCallback, useEffect, useRef, useState } from "react";
import { BottomSheetPropertiesType } from "./bottom-sheet.types";

export const useBottomSheet = (properties: BottomSheetPropertiesType) => {
  const sheetReference = useRef<HTMLDivElement>(null);
  const {
    "aria-describedby": ariaDescribedby,
    "aria-labelledby": ariaLabelledby,
    id,
    animate,
    open,
    onClose,
  } = properties;
  const [animateState, setAnimateState] = useState<string>("exited");

  // useEffect(() => {
  //   if (open) {
  //     document.body.classList.add("prevent-scroll");
  //   } else {
  //     document.body.classList.remove("prevent-scroll");
  //   }

  //   return () => {
  //     document.body.classList.remove("prevent-scroll");
  //   };
  // }, [open]);

  useEffect(() => {
    const checkIfClickedOutside: EventListenerOrEventListenerObject = ({
      target,
    }) => {
      if (
        open &&
        sheetReference.current &&
        !sheetReference.current.contains(target as Node)
      ) {
        onClose();
      }
    };

    if (document) {
      if (open) {
        document.addEventListener("click", checkIfClickedOutside);
        setAnimateState("initial");
        setTimeout(() => {
          setAnimateState("entering");
        }, 0);
        setTimeout(
          () => {
            setAnimateState("entered");
          },
          animate === "normal" ? 0 : 150
        );
      } else {
        document.removeEventListener("click", checkIfClickedOutside);
        setAnimateState("exiting");
        setTimeout(
          () => {
            setAnimateState("exited");
          },
          animate === "normal" ? 0 : 150
        );
      }
    }

    return () => {
      if (document) {
        document.removeEventListener("click", checkIfClickedOutside);
      }
    };
  }, [animate, onClose, open]);

  const onCloseButtonClick = useCallback(
    (event: MouseEvent<SVGSVGElement>) => {
      event.stopPropagation();
      onClose();
    },
    [onClose]
  );

  const stopPropagationOnModal = useCallback((event: MouseEvent) => {
    event.stopPropagation();
  }, []);

  return {
    sheetProperties: {
      "aria-labelledby": ariaLabelledby,
      "aria-describedby": ariaDescribedby,
      "aria-modal": true,
      onClick: stopPropagationOnModal,
      ref: sheetReference,
      role: "dialog",
      tabIndex: 0,
      id,
    },
    closeButtonProps: {
      onClick: onCloseButtonClick,
    },
    animateState,
  };
};
