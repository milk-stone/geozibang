import { useEffect, useState } from "react";
import styles from "./ModalPopup.module.scss";

const ModalPopup = ({ onClose, onClick }) => {
    const [ranking, setRanking] = useState("");
    const [category, setCategory] = useState("");
    const [sobiname, setSobiname] = useState("");
    const [money, setMoney] = useState("");
    const [dateobj, setDate] = useState("");
    const [checking, setChecking] = useState("");

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
    };

    const handlePriorityChange = (event) => {
        setRanking(event.target.value);
    };

    const handleCategoryChange = (event) => {
        setCategory(event.target.value);
    };

    const handleExpenseChange = (event) => {
        setSobiname(event.target.value);
    };

    const handleAmountChange = (event) => {
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
                <form>
                    <label htmlFor="label">우선순위:</label>
                    <input id="ranking" type="text" onChange={handlePriorityChange} />
                    <br />
                    <label htmlFor="label">카테고리:</label>
                    <input id="category" type="text" onChange={handleCategoryChange} />
                    <br />
                    <label htmlFor="label">소비내역:</label>
                    <input id="sobiname" type="text" onChange={handleExpenseChange} />
                    <br />
                    <label htmlFor="label">금액:</label>
                    <input id="money" type="text" onChange={handleAmountChange} />
                    <br />
                    <label htmlFor="label">날짜:</label>
                    <input id="date" type="date" onChange={handleDateChange} />
                    <br />
                    <label htmlFor="label">구매여부:</label>
                    <input id="checking" type="text" onChange={handleCheckingChange} />
                    <br />
                    <button type="click" onClick={handleSubmit}>
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ModalPopup;
