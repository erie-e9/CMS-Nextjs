import styles from './index.scss'

const ETAButtonComponent = ({ children, disabled, label }) => {

    return (
        <>
            <button className={styles.button} disabled={disabled} aria-label={label}><span className={styles.spanButton}>{children}</span></button>
        </>
    )
}

export default ETAButtonComponent