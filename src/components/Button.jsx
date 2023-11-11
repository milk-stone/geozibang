import styles from "./Button.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Button = ({ children, ...rest }) => {
  return (
    // onClick 같은 2번째 이후 요소들을 알아서 ...rest가 받아줌
    <button className={styles.btn_primary} {...rest}>
      {children}
    </button>
  );
};

export const CategoryButton = ({ icon, children, ...rest }) => {
  return (
    <button className={styles.btn_category} {...rest}>
      <FontAwesomeIcon icon={icon}></FontAwesomeIcon>
      <span>{children}</span>
    </button>
  );
};

export const PriorityButton = ({ children, ...rest }) => {
  return (
    <button className={styles.btn_priority} {...rest}>
      {children}
    </button>
  );
};
