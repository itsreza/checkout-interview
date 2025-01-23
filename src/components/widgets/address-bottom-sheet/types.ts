type AddressTypes = {
  details: string;
  id: string;
  title: string;
};
export type AddressBottomSheetPropertiesTypes = {
  onClose: () => void;
  isOpen: boolean;
  onConfirm: () => void;
  onRemove: () => void;
  addresses: Array<AddressTypes>;
  selectedAddress: AddressTypes;
};
