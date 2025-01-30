import Layout from "hocs/layout/Layout"
import { connect } from "react-redux"

function Home() {
    return (
        <Layout>
            <h1>Home</h1>
        </Layout>
    )
}

const mapStateToProps = state => ({
    
})
export default connect  (mapStateToProps,{})(Home)
