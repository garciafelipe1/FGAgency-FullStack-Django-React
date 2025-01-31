import Layout from "hocs/layout/Layout"
import { connect } from "react-redux"

function Blog() {
    return (
        <Layout>
            <h1>Blog</h1>
        </Layout>
    )
}

const mapStateToProps = state => ({
    
})
export default connect  (mapStateToProps,{})(Blog)