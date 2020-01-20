import dynamic from 'next/dynamic'
import Link from 'next/link'
import styles from './index.scss'

const DynamicLinksComponent = dynamic(() => import('./links'), {
    ssr: false
});

const DynamicFormContactusComponent = dynamic(() => import('./formcontactus'), {
    ssr: false
});

const DynamicContactusComponent = dynamic(() => import('./contactus'), {
    ssr: false
});

const FooterComponent = () => {
    return (
        <>
            <footer role='contentinfo'>
                <div className={styles.footerWrapper}>

                    <div className={styles.footerItem}>
                        <DynamicLinksComponent />
                    </div>
                    <div className={styles.footerItem}>
                        <DynamicFormContactusComponent />
                    </div>
                    
                    <div className={styles.footerItem}>
                        <DynamicContactusComponent />
                    </div>

                </div>

                <div className={styles.footerBottom}>
                    <p>Copyright &copy; 2020 <Link href='/' as='/'><a>CMS-Nextjs, Inc.  </a></Link> All rights reserved</p>
                </div>
            </footer>
        </>
    )
}

export default FooterComponent