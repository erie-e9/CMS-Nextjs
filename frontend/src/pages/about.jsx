import Layout from '@commons/layout'
import AboutComponent from '@components/about'

const AboutPage = ({ data }) => {
    return (
        <>
            <Layout
                canonical={ data }>
                <AboutComponent />
            </Layout>
        </>
    )
}

AboutPage.getInitialProps = async () => {
    // console.log('getInitialProps')
    const data = await 'about'
    return { data }
}

export default AboutPage