import styles from "./Contents.module.scss";
import blankCheck from "../images/blankcheck.png";
import checkedBox from "../images/checkedBox.png";

import { CheckButton } from "./Button";

export const Contents = (props) => {
  return (
    <div className={styles.content}>
      {!props.check ? (
        <CheckButton image={blankCheck} />
      ) : (
        <CheckButton image={checkedBox} />
      )}
      <p>{props.content}</p>
    </div>
  );
};
