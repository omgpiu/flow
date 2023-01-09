import clsx from "clsx";
import style from "./core/style.module.css";
import { Modal } from "./core/modal";
import { DerivedModalProp } from "./types";

export const ModalSettings = ({
  children,
  isOpen,
  handleClose,
  onSave,
  className,
}: DerivedModalProp) => {
  return (
    <Modal isOpen={isOpen} handleClose={handleClose}>
      <div className={clsx(style.modal, style.settings, className)}>
        <div className={style.modalHeader}>
          <div></div>
          <button onClick={handleClose}>Close me</button>
        </div>
        <div className={style.modalContent}>{children}</div>
        <hr />
        <button
          type="submit"
          onClick={() => {
            onSave?.();
            handleClose();
          }}
        >
          Сохранить
        </button>
      </div>
    </Modal>
  );
};
