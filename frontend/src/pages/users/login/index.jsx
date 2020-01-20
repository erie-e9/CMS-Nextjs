import Layout from '@commons/layout'
import dynamic from 'next/dynamic'
import styles from './index.scss'

const DynamicLoginComponent = dynamic(() => import('@components/users/login'), {
    ssr: !true
});

const LoginPage = ({ data='users/login' }) => {
    return (
        <>
            <Layout
                canonical={ data }>
                <div className={styles.loginContainer}>
                    <DynamicLoginComponent />
                </div>
            </Layout>
        </>
    )
}

// LoginPage.getInitialProps = async () => {
//     // console.log('getInitialProps')
//     const data = await 'users/login'
//     return { data }
// }

export default LoginPage