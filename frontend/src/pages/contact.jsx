import Layout from '@commons/layout'
import ContactComponent from '@components/contact'

const ContactPage = ({ data }) => {
    return (
        <>
            <Layout
                canonical={ data }
                >
                <ContactComponent />
            </Layout>
        </>
    )
}

ContactPage.getInitialProps = async () => {
    // console.log('getInitialProps')
    const data = await 'contact'
    return { data }
}

export default ContactPage