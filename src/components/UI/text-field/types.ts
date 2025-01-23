export type TextFieldPropertiesTypes = {
  type?: "text" | "tel";
  placeholder: string;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  name?: string;
  error?: boolean;
  helperText?: string;
};
