import styles from "./Contents.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import blankCheck from "../images/blankcheck.png";
import checkedBox from "../images/checkedBox.png";
import { faCheck, faCircleDot } from "@fortawesome/free-solid-svg-icons";

import { CheckButton } from "./Button";
<FontAwesomeIcon icon="fa-solid fa-square-check" />;
export const Contents = (props) => {
  return (
    <div className={styles.content}>
      {props.check ? (
        <CheckButton image={blankCheck} />
      ) : (
        <CheckButton image={checkedBox} />
      )}
      <p>{props.content}</p>
    </div>
  );
};
