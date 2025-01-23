export type TextFieldPropertiesTypes = {
  type?: "text" | "tel";
  placeholder: string;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  name?: string;
  error?: boolean;
  helperText?: string;
};
