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

export const CheckButton = ({ icon, children, ...rest }) => {
  return (
    <button className={styles.btn_check} {...rest}>
      <FontAwesomeIcon icon={icon} />
      <span>{children}</span>
    </button>
  );
};

export const PeriodButton = ({
  icon,
  text,
  prevConsume,
  curConsume,
  children,
  ...rest
}) => {
  return (
    <button className={styles.btn_period} {...rest}>
      <FontAwesomeIcon icon={icon} />
      <h2>{text}</h2>
      {prevConsume <= curConsume ? (
        <p className={styles.red}>{curConsume}</p>
      ) : (
        <p className={styles.blue}>{curConsume}</p>
      )}
      <p>{prevConsume}</p>
    </button>
  );
};

export const SettingButton = ({ children, ...rest }) => {
  return (
    <div className={styles.btn_setting}>
      <span>{children}</span>
    </div>
  );
};
