

import { connect } from "react-redux"
import {motion} from 'framer-motion'

function Layout({children}){
    return(
        <motion.div
        className="overflow-x-hidden min-w-0 w-full max-w-full"
        initial={{opacity: 0, transition: {duration: 0.5}}}
        animate={{opacity: 1}}
        exit={{opacity: 0, transition: {duration: 0.5}}}
        >
            
            {children}
        </motion.div>
    )
}

const mapStateToProps = state =>({

})

export default connect(mapStateToProps,{

}) (Layout)