import styles from "./PriorityBox.module.scss";
import { PriorityButton } from "./Prioritybutton";
import { Contents } from "./Contents";
import {useState,useEffect} from "react";
import ModalPopup from "./ModalPopup";


export const PriorityBox = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  

  const handlePriorityButtonClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div className={styles.container}>
      <PriorityButton onClick={handlePriorityButtonClick}>
        <span>{props.rank}{"순위"}</span>
      </PriorityButton>
      
      <Contents check={props.check} content={props.content}></Contents>


      {isModalOpen && (
        <ModalPopup onClose={handleCloseModal}>
          <h2>모달 팝업</h2>
          <p>아~~~~~~언제끝나노~~~~~</p>
        </ModalPopup>
      )}
    </div>
  );
};
