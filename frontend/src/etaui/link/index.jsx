import { useRouter } from 'next/router'
import styles from './index.scss'

const ETALinkComponent = ({ children, href, label, target }) => {
    const router = useRouter()
    const style = {
        color: router.pathname === href ? '#2AFFC2' : 'white',
        borderBottom: router.pathname === href ? '1px solid #2AFFC2' : '',
    }

    console.log('href pathname', href)

    const handleClick = e => {
        e.preventDefault()
        router.push(href)
    }

    return <a href={href} onClick={handleClick} className={styles.link} style={style} aria-label={label} target={target ? target : '_self'} >
                {children}
            </a>
}

export default ETALinkComponent