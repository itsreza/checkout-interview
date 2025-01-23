type ErrorObjectTypes = {
  nationalId?: string;
  phoneNumber?: string;
  addressId?: string;
};

export type OrderCompletionFormPropertiesTypes = {
  errors: ErrorObjectTypes;
  onChange: () => void;
  selectedAddress: { details?: string };
  onSelectAddress: () => void;
  onSubmit: () => void;
};
