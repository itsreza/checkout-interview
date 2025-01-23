export type AddressTypes = {
  details: string;
  id: string;
  name: string;
};

export type DeleteConfirmationPropertiesTypes = {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (address: string) => void;
  addresses: Array<AddressTypes>;
};
