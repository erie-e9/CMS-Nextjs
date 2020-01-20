import { useState, useEffect } from 'react'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import styles from './index.scss'

const DynamicUser = dynamic(() => import('@svgr/user'))
const DynamicNotifications = dynamic(() => import('@svgr/notifications'), 
{   srr: !true,
    loading: () => '...'
})
const DynamicAdd = dynamic(() => import('@svgr/add'))
const DynamicSearcherApp = dynamic(() => import('@apps/searcher'), 
{   srr: !true,
    // loading: () => '...'
})

const NavbarToolsComponent = () => {
    const [ userIconHovered, setuserIconHovered ] = useState(!true)
    const [ notificationsIconHovered, setnotificationsIconHovered ] = useState(!true)
    const [ addIconHovered, setaddIconHovered ] = useState(!true)
    
    return (
        <>
            <DynamicSearcherApp />
            
            <Link href='/' as='/' >
                <a aria-label='addIcon' className={styles.linkaddIcon}>
                    <DynamicAdd 
                        className={styles.addIcon} 
                        size={24} 
                        color={addIconHovered ? '#2AFFC2' : '#EBEBEB'} 
                        onMouseEnter={() => setaddIconHovered(true)}
                        onMouseLeave={() => setaddIconHovered(!true)}
                    />
                </a>
            </Link>
            
            <Link href='/' as='/' >
                <a aria-label='notificationsIcon' className={styles.linknotificationsIcon}>
                    <DynamicNotifications 
                        className={styles.notificationsIcon} 
                        size={32} 
                        color={notificationsIconHovered ? '#2AFFC2' : '#EBEBEB'} 
                        onMouseEnter={() => setnotificationsIconHovered(true)}
                        onMouseLeave={() => setnotificationsIconHovered(!true)}
                    />
                </a>
            </Link>
            
            <Link href='/users/login' as='/users/login' >
                <a aria-label='userIcon' className={styles.linkuserIcon}>
                    <DynamicUser 
                        className={styles.userIcon} 
                        size={25} 
                        color={userIconHovered ? '#2AFFC2' : '#2AFFC2'} 
                        onMouseEnter={() => setuserIconHovered(true)}
                        onMouseLeave={() => setuserIconHovered(!true)}
                    />
                </a>
            </Link>
        </>
    )
}

export default NavbarToolsComponent