import styles from "./PriorityBox.module.scss";
import { PriorityButton } from "./Prioritybutton";
import { Contents } from "./Contents";
import { useState, useEffect } from "react";
import ModalPopup from "./ModalPopup";

export const PriorityBox = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [state, setState] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("http://13.209.254.86:8080/sobi/readAll")
      .then((response) => {
        if (response.status !== 200) throw new Error();
        return response.json();
      })
      .then((data) => {
        // 받아온 JSON 데이터를 상태에 저장
        setState("success");
        setData(data);
      })
      .catch((error) => {
        setState("failed");
        console.error("Error:", error);
      });
  }, []);

  useEffect(() => {
    if (state === "success") {
      console.log(data.filter((value) => value.ranking === props.rank));
    }
  }, [state]);

  const handlePriorityButtonClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    fetch("http://13.209.254.86:8080/sobi/readAll")
      .then((response) => {
        if (response.status !== 200) throw new Error();
        return response.json();
      })
      .then((data) => {
        // 받아온 JSON 데이터를 상태에 저장
        setState("success");
        setData(data);
      })
      .catch((error) => {
        setState("failed");
        console.error("Error:", error);
      });
    setIsModalOpen(false);
  };
  return (
    <div className={styles.container}>
      <PriorityButton onClick={handlePriorityButtonClick}>
        <span>
          {props.rank}
          {"순위"}
        </span>
      </PriorityButton>
      {state === "success" &&
        data
          .filter((value) => value.checking !== 1)
          .filter((value) => value.ranking === props.rank)
          .map((element, index) => {
            return (
              <Contents
                key={index}
                check={element.checking === 1}
                content={element.sobiname}
              ></Contents>
            );
          })}

      {isModalOpen && <ModalPopup onClose={handleCloseModal}></ModalPopup>}
    </div>
  );
};
