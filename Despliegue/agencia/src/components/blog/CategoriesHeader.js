import { MagnifyingGlassIcon } from "@heroicons/react/24/outline"
import { Link, useLocation, useNavigate } from "react-router-dom"
import {useState}from 'react'

function CategoriesHeader({categories}){

    const location = useLocation()
    const navigate = useNavigate()

    // SEARCH
    const [term, setTerm] = useState("");
    const handleChange = (e) => {
        setTerm(e.target.value);
    };
    const onSubmit = (e) => {
        e.preventDefault();
        setTimeout(() => navigate("/s=" + term), 0.2);
        setTerm("");
    };

    
    return(
        <div className="w-full max-w-full bg-white-100 py-4 sm:py-6 overflow-x-hidden">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-0 px-4 sm:px-6">
                <div className="md:col-span-9 order-2 md:order-1">
                    <div className="space-x-2 sm:space-x-6">
                    <div className="relative">
                            <div className="relative -mb-2 md:-mb-6 w-full overflow-x-auto pb-2 md:pb-6 scrollbar-thin">
                                <ul
                                    role="list"
                                    className="inline-flex space-x-2 sm:space-x-6 min-w-0"
                                >
                                    <Link to='/blog'
                                    className={`${location.pathname === '/blog' ? "text-orange-500 bg-white":"text-gray-900 hover:text-orange-500 border border-gray-100 hover:border-gray-200"} py-2 px-3 sm:px-6 rounded-md text-sm sm:text-lg font-regular whitespace-nowrap flex-shrink-0`}>
                                        All
                                    </Link>
                                    {
                                        categories&&categories.map((category,index)=>(
                                            <Link key={index} to={`/category/${category.slug}`}
                                            className={`${location.pathname === `/category/${category.slug}` ? "text-orange-500 bg-white":"text-gray-900 border border-gray-100 hover:border-gray-200"} py-2 px-3 sm:px-6 rounded-md text-sm sm:text-lg font-regular whitespace-nowrap flex-shrink-0`}>
                                                {category.name}
                                            </Link>
                                        ))
                                    }
                                </ul>
                        </div>
                    </div>
                    </div>
                </div>
                <form onSubmit={(e) => onSubmit(e)} className="relative md:col-span-3 order-1 md:order-2 md:mr-8 w-full">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <i className='bx bx-search-alt text-lg sm:text-xl text-gray-800'></i>
                    </div>
                    <input
                        id='search'
                        name='search'
                        value={term}
                        onChange={(e)=>handleChange(e)}
                        type='search'
                        className={`
                            py-2.5 pl-10 pr-3 
                            block w-full rounded-md
                            border border-gray-200
                            focus:border-gray-200 focus:ring-gray-200
                            focus:outline-none focus:ring-1
                            placeholder-gray-600 focus:placeholder-gray-500
                        `}
                    />
                </form>
            </div>
        </div>
    )
}
export default CategoriesHeader