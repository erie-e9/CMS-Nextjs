import dynamic from 'next/dynamic'
import styles from './index.scss'

const DynamicSocialNetworksComponent = dynamic(() => import('./socialnetworks'), {
    ssr: false
});

const ContactusComponent = () => {
    return (
        <>
            <h2>Contact us</h2>
            <div className={styles.contactInfoWrapper}>
                <a href='mailto:bluebill1049@hotmail.com' aria-label='mailto'><p>bluebill1049@hotmail.com</p></a>
                <a href='tel:6181092045' aria-label='tel'><p>(618) 109-20-45</p></a>
            </div>
            <DynamicSocialNetworksComponent />
        </>
    )
}

export default ContactusComponent