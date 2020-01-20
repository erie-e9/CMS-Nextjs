import { useState, useEffect } from 'react'
import Link from 'next/link'
import styles from './index.scss'
import footerlinks from './footer.json'

const FooterComponent = () => {
    const [ footer, setfooter ] = useState(footerlinks.footerlinks)

    // useEffect(() => {
    //     setfooter(footerlinks.footerlinks)
    // }, [])

    return (
        <>
            <footer role='contentinfo'>
                {
                    footer
                    ?   footer.map(( item, i ) => {
                            if (Array.isArray(item.sublinks)) {
                                return (
                                    <>
                                        {/* Title */}
                                        <Link key={i} href={item.link} as={item.as} prefetch={item.prefetch}>
                                            <a>{item.section}</a>
                                        </Link>
                                        {/* /Title */}
                                        {
                                            item.sublinks.map((subitem) => {
                                                if (item.prefetch) {
                                                return (
                                                    <Link key={i} href={subitem.link} as={subitem.as}>
                                                        <a>{subitem.section}</a>
                                                    </Link>
                                                )                                
                                            } else {
                                                return (
                                                    <Link key={i} href={subitem.link} as={subitem.as} prefetch={subitem.prefetch}>
                                                        <a>{subitem.section}</a>
                                                    </Link>
                                                )
                                            } 
                                            }) 
                                        }
                                    </>
                                )
                            } else {
                                if (item.prefetch) {
                                    return (
                                        <Link key={i} href={item.link} as={item.as}>
                                            <a>{item.section}</a>
                                        </Link>
                                    )                                
                                } else {
                                    return (
                                        <Link key={i} href={item.link} as={item.as} prefetch={item.prefetch}>
                                            <a>{item.section}</a>
                                        </Link>
                                    )
                                }
                            }
                        })
                    :   null
                }
            </footer>
        </>
    )
}

export default FooterComponent