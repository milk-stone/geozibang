import { useState } from "react";
import styles from "./ModalPopup.module.scss";

const ModalPopup = ({ onClose }) => {
  const [ranking, setRanking] = useState("1");
  const [category, setCategory] = useState("food");
  const [sobiname, setSobiname] = useState("");
  const [money, setMoney] = useState("");
  const [dateobj, setDate] = useState("");
  const [checking, setChecking] = useState("0");
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("http://13.209.254.86:8080/sobi/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ranking: ranking,
        category: category,
        sobiname: sobiname,
        money: money,
        date: {
          year: dateobj.getFullYear(),
          month: dateobj.getMonth() + 1,
          day: dateobj.getDate(),
        },
        checking: checking,
      }),
    })
      .then((response) => {
        response.json();
      })
      .then((data) => {
        console.log(data);
      });
    setIsButtonDisabled(true);
  };

  const handleRankingChange = (event) => {
    setRanking(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleSobinameChange = (event) => {
    setSobiname(event.target.value);
  };

  const handleMoneyChange = (event) => {
    setMoney(event.target.value);
  };

  const handleDateChange = (event) => {
    setDate(new Date(event.target.value));
  };
  const handleCheckingChange = (event) => {
    setChecking(event.target.value);
  };

  return (
    <div className={styles.modal} style={{ zIndex: 999 }}>
      <div className={styles.modalContent}>
        <button className={styles.closeButton} onClick={onClose}>
          X
        </button>
        <div className={styles.formBorder}>
          <div className={styles.set}>
            <label htmlFor="label">우선순위 :</label>
            <select
              id="ranking"
              value={ranking}
              onChange={handleRankingChange}
              className={styles.border}
            >
              <option value="1">1순위</option>
              <option value="2">2순위</option>
              <option value="3">3순위</option>
            </select>
          </div>

          <div className={styles.set}>
            <label htmlFor="label">카테고리 :</label>
            <select
              id="category"
              value={category}
              onChange={handleCategoryChange}
              className={styles.border}
            >
              <option value="food">음식</option>
              <option value="fashion">패션</option>
              <option value="hobby">취미</option>
              <option value="health">건강</option>
              <option value="transport">교통</option>
            </select>
          </div>
          <div className={styles.set}>
            <label htmlFor="label">소비내역 :</label>
            <input
              id="sobiname"
              type="text"
              onChange={handleSobinameChange}
              className={styles.border}
            />
          </div>
          <div className={styles.set}>
            <label htmlFor="label">금액 :</label>
            <input
              id="money"
              type="text"
              onChange={handleMoneyChange}
              className={styles.border}
            />
          </div>

          <div className={styles.set}>
            <label htmlFor="label">날짜 :</label>
            <input
              id="date"
              type="date"
              onChange={handleDateChange}
              className={styles.border}
            />
          </div>
          <div className={styles.set}>
            <label htmlFor="label">구매 여부 :</label>
            <select
              id="checking"
              value={checking}
              onChange={handleCheckingChange}
              className={styles.border}
            >
              <option value="0">구매 예정</option>
              <option value="1">구매 완료</option>
            </select>
          </div>

          <button
            type="click"
            onClick={handleSubmit}
            disabled={isButtonDisabled}
            style={{ cursor: isButtonDisabled ? "not-allowed" : "pointer" }}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalPopup;
