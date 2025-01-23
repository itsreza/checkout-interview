export type AddressTypes = {
  details: string;
  id: string;
  name: string;
};
export type AddressBottomSheetPropertiesTypes = {
  onClose: () => void;
  isOpen: boolean;
  onConfirm: (id: string) => void;
  onRemove: (id: string) => void;
  addresses: Array<AddressTypes>;
  selectedAddress?: string;
};
