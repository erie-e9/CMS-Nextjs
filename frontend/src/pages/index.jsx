import Layout from '@commons/layout'
import dynamic from 'next/dynamic'
// import IndexComponent from '@components/index/index'
const DynamicIndexComponent = dynamic(() => import('@components/index/index'))

const IndexPage = () => {
    return (
        <>
            <Layout
                canonical=''
                >
                <DynamicIndexComponent />
            </Layout>
        </>
    )
}

export default IndexPage