import styles from "./style.module.css";

export const DeletingBox = ({ children, trueCallback, falseCallback }) => {
    return (
        <div className={styles.modalOverlay} role="dialog">
            <div className={styles.modalBox}>
                {children}
                <button onClick={trueCallback}>Sim</button>
                <button onClick={falseCallback}>Não</button>
            </div>
        </div>
    );
};