import styles from "./ModalPopup.module.scss";

const ModalPopup = ({ onClose, children }) => {
  return (
    <div className={styles.modal} style={{ zIndex: 999 }}>
      <div className={styles.modalContent}>
        <button className={styles.closeButton} onClick={onClose}>
          X
        </button>
        {children}
      </div>
    </div>
  );
};

export default ModalPopup;