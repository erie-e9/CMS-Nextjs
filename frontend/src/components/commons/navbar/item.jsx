import Link from '@etaui/link'
import styles from './index.scss'

const ItemNavbarComponent = ({ item }) => <Link key={item.key} href={item.link} label={item.section} ><span className={styles.itemlink}>{item.section}</span></Link>

export default ItemNavbarComponent