import styles from "./Title.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Title = ({ icon, children }) => {
  return (
    <div className={styles.title}>
      <h1>{children}</h1>
      <FontAwesomeIcon icon={icon} />
    </div>
  );
};
