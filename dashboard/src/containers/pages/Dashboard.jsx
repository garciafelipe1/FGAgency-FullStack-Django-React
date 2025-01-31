import Layout from "hocs/layout/Layout"
import { connect } from "react-redux"

function Dashboard() {
    return (
        <Layout>
            <h1>Dashboard</h1>
        </Layout>
    )
}

const mapStateToProps = state => ({
    
})
export default connect  (mapStateToProps,{})(Dashboard)
