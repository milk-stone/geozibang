import plusImage from "../images/plus.png";
import styles from "./Prioritybutton.module.scss";

//회색으로 쌓여있는 우선순위 버튼
export const PriorityButton = ({ children, onClick, ...rest }) => {
    return (
      <button className={styles.btn_priority} onClick = {onClick} {...rest}>
        {children}
        <span className={styles.imageWrapper}>
          <img src={plusImage} className={styles.image} />
        </span>
      </button>
    );
  };