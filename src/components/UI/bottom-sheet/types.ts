export type BottomSheetPropertiesTypes = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  actions: React.ReactNode;
  title?: string;
};
