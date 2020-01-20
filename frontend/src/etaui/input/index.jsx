import styles from './index.scss'

const ETAInputComponent = React.forwardRef(({ type, name, id, label, placeholder, autoComplete, register, onChange }, ref) => {

    return (
        <>
            <div className={styles.inputWrapper}>
                <input 
                    type={type}
                    className={styles.input} 
                    name={name} 
                    id={id} 
                    aria-label={label}
                    placeholder={placeholder} 
                    autoComplete={`${autoComplete ? 'on' : 'off'}`}
                    onChange={onChange}
                    ref={ref}
                />
            </div>
        </>
    )
})

export default ETAInputComponent