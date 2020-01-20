import styles from './index.scss'

const ETATextareaComponent = React.forwardRef( ({ children, disabled, label, rows, cols, name, placeholder, readonly, maxlength }, ref) => {

    return (
        <>
            <div className={styles.textareaWrapper}>
                <textarea 
                    rows={rows} 
                    cols={cols} 
                    name={name}
                    className={styles.textarea} 
                    disabled={disabled} 
                    aria-label={label}
                    placeholder={placeholder} 
                    // readonly={readonly ? true : false}
                    maxLength={maxlength}
                    ref={ref}
                    >
                    {/* {children} */}
                </textarea>
            </div>
        </>
    )
})

export default ETATextareaComponent