import { ReactNode, useEffect, useRef } from "react";
import { Portal } from "../portal";
import { useOnClickOutside } from "../../../../lib/hooks/useClickOutside";

interface Props {
  isOpen: boolean;
  handleClose: () => void;
  children: ReactNode;
  className?: string;
}

export const Modal = ({ children, isOpen, handleClose }: Props) => {
  const ref = useRef<any>();
  useEffect(() => {
    const closeOnEscapeKey = (e: any) =>
      e.key === "Escape" ? handleClose() : null;
    document.body.addEventListener("keydown", closeOnEscapeKey);
    return () => {
      document.body.removeEventListener("keydown", closeOnEscapeKey);
    };
  }, [handleClose]);

  useOnClickOutside(ref, () => handleClose());

  if (!isOpen) return null;

  return (
    <Portal wrapperId="react-portal-modal-container">
      <div ref={ref}>{children}</div>
    </Portal>
  );
};
