import Link from 'next/link'
import dynamic from 'next/dynamic'
import styles from './index.scss'

const Dynamicfacebook = dynamic(() => import('@svgr/facebook'))
const DynamicTwitter = dynamic(() => import('@svgr/twitter'))
const DynamicInstagram = dynamic(() => import('@svgr/instagram'))
const DynamicWhatsApp = dynamic(() => import('@svgr/whatsapp'))

const SocialNetworks = () => {
    return (
        <>
            <div className={styles.socialMedia}>
                <Link href='/' as='/' >
                    <a target='_blank' aria-label='facebookIcon'>
                        <div className={styles.socialNetwork}>
                            <Dynamicfacebook size={12} color='#EBEBEB' />
                        </div>
                    </a>
                </Link>

                <Link href='/' as='/' >
                    <a target='_blank' aria-label='twitterIcon'>
                        <div className={styles.socialNetwork}>
                            <DynamicTwitter size={12} color='#EBEBEB' />
                        </div>
                    </a>
                </Link>

                <Link href='/' as='/' >
                    <a target='_blank' aria-label='instagramIcon'>
                        <div className={styles.socialNetwork}>
                            <DynamicInstagram size={12} color='#EBEBEB' />
                        </div>
                    </a>
                </Link>

                <Link href='/' as='/' >
                    <a href='https://wa.me/526181092045' target='_blank' aria-label='whatsAppIcon'>
                        <div className={styles.socialNetwork}>
                            <DynamicWhatsApp size={12} color='#EBEBEB' />
                        </div>
                    </a>
                </Link>
            </div>
        </>
    )
}

export default SocialNetworks