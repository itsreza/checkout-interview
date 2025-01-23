import Image from "next/image";
import React from "react";

type BottomSheetProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  actions: React.ReactNode;
  title?: string;
};

export function BottomSheetNew({
  isOpen,
  onClose,
  children,
  title,
  actions,
}: BottomSheetProps) {
  return (
    <div
      className={`fixed inset-0 z-50 flex items-end justify-center ${
        isOpen ? "visible" : "invisible"
      }`}
      onClick={onClose}
    >
      {/* Overlay */}
      <div
        className={`absolute inset-0 bg-black bg-opacity-50 transition-opacity ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
        onClick={onClose}
      />
      <div
        className={`relative w-full max-w-screen-sm bg-white shadow-lg transform transition-transform ${
          isOpen ? "translate-y-0" : "translate-y-full"
        }`}
        style={{ transition: "transform 0.3s ease-in-out" }}
        onClick={(e) => e.stopPropagation()}
      >
        {title && (
          <div className="px-4 py-3 flex items-center justify-between border-b border-grey-300">
            <span className="text-button font-medium text-black">{title}</span>
            <div onClick={onClose} className="cursor-pointer">
              <Image src="/icons/close.svg" width={24} height={24} alt="بستن" />
            </div>
          </div>
        )}
        <div className="p-4">{children}</div>
        {actions && (
          <div className="p-[10px] bg-white border-t border-grey-300">
            {actions}
          </div>
        )}
      </div>
    </div>
  );
}
