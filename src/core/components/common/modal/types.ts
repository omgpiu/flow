import { ReactNode } from "react";

export interface ModalProp {
  isOpen: boolean;
  handleClose: () => void;
  children: ReactNode;
  className?: string;
}

export interface DerivedModalProp extends ModalProp {
  handleClose: () => void;
  onSave?: () => void;
}

export type DerivedPopupProp = Omit<DerivedModalProp, "onSave">;
