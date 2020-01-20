import { useState, useEffect } from 'react'
import Link from 'next/link'
import footerlinks from '../footer.json'
import styles from './index.scss'

const LinksComponent = () => {
    const [ footer, setfooter ] = useState(footerlinks.footerlinks)

    return (
        <>
            <div className={styles.footerLinksWrapper}>
                <h2>Links</h2>
                <div className={styles.footerLinks}>
                    {
                        footer
                        ?   footer.map(( item ) => {
                                // return <Link key={item.key} href={'/'} as={'/'}><span className={styles.footerLink}>{item.section}</span></Link>
                                if (Array.isArray(item.sublinks)) {
                                    return (
                                        <div key={item.key} >
                                            {/* Title */}
                                            <Link href={'/'} as={'/'}><span className={styles.footerLink}>{item.section}</span></Link>                                            
                                            {/* Subtitle */}
                                            <div className={styles.subitemsWrapper}>
                                                {
                                                    item.sublinks.map(( subitem ) => {
                                                        return <Link key={subitem.key} href={'/'} as={'/'}><span className={styles.footerSubLink}>{subitem.section}</span></Link>
                                                    })
                                                }
                                            </div>
                                        </div>
                                    )
                                }
                        })
                        :   null
                    }
                </div>
            </div>
        </>
    )
}

export default LinksComponent