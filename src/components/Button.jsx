import styles from "./Button.module.scss";

export const Button = ({ children, ...rest }) => {
  return (
    // onClick 같은 2번째 이후 요소들을 알아서 ...rest가 받아줌
    <button className={styles.btn_primary} {...rest}>
      {children}
    </button>
  );
};

export const CategoryButton = ({ image, children, ...rest }) => {
  return (
    <button className={styles.btn_category} {...rest}>
      <img src={image} alt="category icon" width="20" />
      <span>{children}</span>
    </button>
  );
};

//회색으로 쌓여있는 버튼
export const GrayButton = ({ children, ...rest }) => {
  return (
    <button className={styles.btn_priority} {...rest}>
      {children}
    </button>
  );
};

//체크박스
export const CheckButton = ({ image, children, ...rest }) => {
  return (
    <button className={styles.btn_check} {...rest}>
      <img src={image} width="15" height="15" />
      <span>{children}</span>
    </button>
  );
};

export const PeriodButton = ({
  image,
  periodName,
  text,
  prevConsume,
  curConsume,
  children,
  ...rest
}) => {
  return (
    <button className={styles.btn_period} {...rest}>
      <img src={image} width="30" height="30" />
      <h2>{text}</h2>
      <div className={styles.explain}>
        <p className={styles.smallsize}>Current {periodName}</p>
        {prevConsume <= curConsume ? (
          <p className={styles.red}>{curConsume.toLocaleString()}원</p>
        ) : (
          <p className={styles.blue}>{curConsume.toLocaleString()}원</p>
        )}
      </div>
      <div className={styles.explain}>
        <p className={styles.smallsize}>Last {periodName}</p>
        <p>{prevConsume.toLocaleString()}원</p>
      </div>
    </button>
  );
};

export const SettingButton = ({ children, onClick, ...rest }) => {
  return (
    <div className={styles.btn_setting} onClick={onClick}>
      <span>{children}</span>
    </div>
  );
};
