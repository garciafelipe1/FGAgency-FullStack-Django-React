import Error404 from 'containers/errors/Error404'
import Blog from 'containers/pages/blog/Blog'
import Dashboard from 'containers/pages/Dashboard'
import Home from 'containers/pages/Home'


import { AnimatePresence } from 'framer-motion'
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom'


function AnimatedRoutes(){

    const location = useLocation()

    return(
        <Routes location={location} key={location.pathname}>
                    
                    <Route path="*" element={<Error404 />} />
                    
                    <Route path="/" element={<Home/>} />
                    <Route path="/blog" element={<Blog/>} />
                    <Route path="/dashboard" element={<Dashboard/>} />
                   

                </Routes>
    )
}
export default AnimatedRoutes