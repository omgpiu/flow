import { DerivedPopupProp } from "./types";
import { Modal } from "./core/modal";
import clsx from "clsx";
import style from "./core/style.module.css";

export const PopupModal = ({
  children,
  isOpen,
  handleClose,
  className,
}: DerivedPopupProp) => {
  return (
    <Modal isOpen={isOpen} handleClose={handleClose}>
      <div className={clsx(style.center, style.modal, className)}>
        <div className={style.modalHeader}>
          <div></div>
          <button onClick={handleClose}>Close me</button>
        </div>
        {children}
      </div>
    </Modal>
  );
};
