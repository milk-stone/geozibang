import styles from "./Calendar.module.scss";

export const CalendarEvent = ({ money, children }) => {
    return (
        <div className={styles.calendar_event}>
            <div>{children}</div>
            <div>{money.toLocaleString()}원</div>
        </div>
    );
};

export const CalendarDate = ({ date }) => {
    return <div className={styles.calendar_date}>{date} 일</div>;
};

export const CalendarEventContainer = ({ children }) => {
    return <div className={styles.container}>{children}</div>;
};
