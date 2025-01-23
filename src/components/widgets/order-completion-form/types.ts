type ErrorObjectTypes = {
  nationalId?: string;
  phoneNumber?: string;
  addressId?: string;
};

export type OrderCompletionFormPropertiesTypes = {
  errors: ErrorObjectTypes;
  onChange: (event: React.FocusEvent<HTMLInputElement>) => void;
  selectedAddress?: { details?: string };
  onSelectAddress: () => void;
};
