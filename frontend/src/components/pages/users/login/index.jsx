import { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
import styles from './index.scss'

const DynamicFormLoginComponent = dynamic(() => import('./formlogin'), {
    ssr: false
});

const LoginComponent = () => {
    const [ ready, setready ] = useState(!true)

    useEffect(() => {
        setready(true)
    }, [])

    return (
        <>
            {/* <div className={styles.formContent}>
                <DynamicFormLoginComponent />
            </div> */}
            {
                ready
                ?   <>
                        <div className={styles.formContent}>
                            <DynamicFormLoginComponent />
                        </div>
                    </>
                :   null
            }
        </>
    )
}

export default LoginComponent