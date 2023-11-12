import styles from "./PriorityBox.module.scss";
import { PriorityButton } from "./Prioritybutton";
import { Contents } from "./Contents";
import {useState,useEffect} from "react";
import ModalPopup from "./ModalPopup";


export const PriorityBox = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = (formData) => {
    const dateObj = new Date(formData.date);
    formData.date = {
      year: Number(dateObj.getFullYear()),
      month: Number(dateObj.getMonth() + 1),
      day: Number(dateObj.getDate()),
    };
    formData.checking = Number(formData.checking);
    formData.ranking = Number(formData.ranking);
    formData.money = Number(formData.money);
    console.log(formData);
    fetch("http://13.209.254.86:8080/sobi/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ formData }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  };
  
  const handleModalClose = () => {
    setIsModalOpen(false);
  };

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
        <ModalPopup onClose={handleCloseModal} onClick={handleSubmit}>
          <h2>모달 팝업</h2>
          <p>아~~~~~~언제끝나노~~~~~</p>
        </ModalPopup>
      )}
    </div>
  );
};
