import styles from "./Button.module.scss";

export const Button = ({ children, ...rest }) => {
    return (
        <button className={styles.btn_primary} {...rest}>
            {children}
        </button>
    );
};
