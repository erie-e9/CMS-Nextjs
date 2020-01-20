import { useState, useEffect } from 'react'
import Input from '@etaui/input'
import dynamic from 'next/dynamic'
import styles from './index.scss'

const DynamicSearch = dynamic(() => import('@svgr/search'))

const SearcherApp = () => {
    const [ searchIconHovered, setsearchIconHovered ] = useState(!true)

    return (
        <>
            <div className={styles.searchWrapper}>
                <DynamicSearch 
                    className={styles.searchIcon} 
                    size={20} 
                    color={searchIconHovered ? '#2AFFC2' : '#EBEBEB'} 
                    onMouseEnter={() => setsearchIconHovered(true)}
                    onMouseLeave={() => setsearchIconHovered(!true)}
                />
                <Input type='text' name='search' id='search' label='search' placeholder='Search' autoComplete={false} />
            </div>
        </>
    )
}

export default SearcherApp