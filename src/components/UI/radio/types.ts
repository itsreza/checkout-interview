export type RadioOptionPropertiesTypes = {
  id: string;
  value: string;
  title: string;
  description?: string;
};

export type RadioPropertiesTypes = {
  id: string;
  name: string;
  value: string;
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  title: string;
  description?: string;
  onRemove?: () => void;
};

export type RadioGroupPropertiesTypes = {
  name: string;
  options: Array<RadioOptionPropertiesTypes>;
  selectedValue?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onRemove?: (id: string) => void;
};
