import BlogList from "components/home/BlogList"
import CTA from "components/home/CTA"
import Features from "components/home/Features"
import Header from "components/home/Header"
import Incentives from "components/home/Incentives"
import UseCases from "components/home/UseCases"
import Footer from "components/navigation/Footer"
import Navbar from "components/navigation/Navbar"
import Scroll from "components/SmoothScrollbar"
import Layout from "hocs/layouts/Layout"
import { useEffect } from "react"


function Home(){
    useEffect(()=>{
        window.scrollTo(0,0)
    },[])
    return(
        <Layout>
            <Navbar/>
            <div data-scroll-section className="pt-20 sm:pt-28 overflow-x-hidden">
                <Header/>
                <Incentives/>
                <UseCases/>
                <Features/>
                <BlogList/>
            </div>
                <Footer/>
        </Layout>
    )
}
export default Home