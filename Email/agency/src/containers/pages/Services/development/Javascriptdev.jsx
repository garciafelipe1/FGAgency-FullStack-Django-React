import Layout from "hocs/layouts/Layout";
import Footer from "components/navigation/Footer";
import Navbar from "components/navigation/Navbar";
import Features from "components/services/javascriptdev/Features";
import Header from "components/services/javascriptdev/Header";
import TechStack from "components/services/javascriptdev/TechStack";


function JavascriptDev() {
    return (
        <Layout>
            <Navbar/>
            <div className="pt-28">


                <Header/>
                <Features/>
                <TechStack/>

            </div>
            <Footer/>
        </Layout>
    );
}

export default JavascriptDev