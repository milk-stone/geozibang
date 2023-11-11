import styles from "./PriorityBox.module.scss";
import { PriorityButton } from "./Button";
import { Contents } from "./Contents";

export const PriorityBox = (props) => {
  return (
    <div className={styles.container}>
      <PriorityButton>
        {props.rank} {"순위"}
      </PriorityButton>
      <Contents check={props.check} content={props.content}></Contents>
    </div>
  );
};
