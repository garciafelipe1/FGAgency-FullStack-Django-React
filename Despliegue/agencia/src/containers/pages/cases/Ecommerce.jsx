import Layout from "hocs/layouts/Layout"
import Navbar from "components/navigation/Navbar"
import Footer from "components/navigation/Footer"
import Header from "components/cases/Ecommerce/Header"
import ProblemDefinition from "components/cases/Ecommerce/ProblemDefinition"
import Solution from "components/cases/Ecommerce/Solution"
import ImgGrid from "components/cases/Ecommerce/ImgGridList"

function Ecommerce(){
    return(
        <Layout>
            <Navbar/>
            <div className="pt-28">
            <Header/>
            <ProblemDefinition/>
            <Solution/>
            
            </div>
            
            <Footer/>
        </Layout>
    )
}
export default Ecommerce