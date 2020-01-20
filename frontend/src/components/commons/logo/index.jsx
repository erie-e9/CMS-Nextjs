import React from 'react'
import Link from 'next/link'
import styles from './index.scss'

const Logo = () => {
    const isotype = true;
    return (
        <div className={`${styles.logo} ${center && styles.center} ${isotype && styles.isotype}`}>
            <Link href='/' title='CMS'>
                <img src='/images/logo.png' />

                {!isotype && (
                <span className={styles.brand}>
                    <span className={styles.code}>CMS</span>
                </span>
                )}
            </Link>
        </div>
    )
}

export default Logo