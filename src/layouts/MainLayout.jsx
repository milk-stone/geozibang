import styles from "./MainLayout.module.scss";

export default function MainLayout({ children }) {
    return (
        <main className={styles.wrapper}>
            <section className={styles.container}>{children}</section>
        </main>
    );
}
