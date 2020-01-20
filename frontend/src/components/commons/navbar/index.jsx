import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import Link from 'next/link'
import ItemNavbarComponent from './item'
import styles from './index.scss'
import navbarlinks from './navbar.json'
import dynamic from 'next/dynamic'

const DynamicNavbarNoolsComponent = dynamic(() => import('./navbartools'), {
    ssr: true
})

const NavbarComponent = () => {
    const [ navbar, setnavbar ] = useState([])
    const { register, handleSubmit, formState, errors } = useForm({
        mode: 'onChange',
        reValidateMode: 'onChange',
        submitFocusError: true,
        nativeValidation: false,
        defaultValues: {
          text: 'bluebill1049@hotmail.com',
        }
    })
    
    const onSubmit = data => alert(`Welcome ${data.email}`)
    
    useEffect(() => {
        setnavbar(navbarlinks.navbarlinks)
    }, [])

    return (
        <>
            <header role='banner' className={styles.header}>
                <nav role='navigation' className={styles.headerWrapper}>
                    {/* <Link href='/' as='/' >
                        <a aria-label='logo' className={styles.linklogo}>
                            <img src='/images/logo.png'width={35} alt='logo'/>
                        </a>
                    </Link> */}
                    {/* {
                        navbar
                        ?   navbar.map(( item ) => {
                                if (Array.isArray(item.sublinks)) {
                                    item.sublinks.map(( subitem ) => {
                                        if (subitem.prefetch) {
                                            return (
                                                <ItemNavbarComponent key={subitem.key} item={subitem}/>
                                            )                                
                                        } else {
                                            return (
                                                <ItemNavbarComponent key={subitem.key} item={subitem}/>
                                            )
                                        }
                                    })
                                } else {
                                    if (item.prefetch) {
                                        return (
                                            <ItemNavbarComponent key={item.key} item={item}/>
                                        )                                
                                    } else {
                                        return (
                                            <ItemNavbarComponent key={item.key} item={item}/>
                                        )
                                    }
                                }
                            })
                        :   null
                    } */}
                    {
                        navbar
                        ?   <DynamicNavbarNoolsComponent />
                        :   null
                    }
                    
                </nav>
            </header>
        </>
    )
}

export default NavbarComponent