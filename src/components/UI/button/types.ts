export type ButtonPropertiesTypes = {
  color?: "primary" | "secondary";
  variant?: "contained" | "outlined";
  disabled?: boolean;
  loading?: boolean;
  fullWidth?: boolean;
  children: React.ReactNode | string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};
