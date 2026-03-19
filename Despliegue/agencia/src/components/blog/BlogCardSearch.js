import { Link, useNavigate } from "react-router-dom"
import moment from 'moment'

function BlogCardSearch({ data, index }) {
    const navigate = useNavigate()
    const category = data.category

    const handleCategoryClick = (e) => {
        e.preventDefault()
        e.stopPropagation()
        if (category?.slug) navigate(`/category/${category.slug}`)
    }

    return (
        <li>
            <Link to={`/blog/${data.slug}`}
                onMouseEnter={() => {
                    const title = document.getElementById(`title` + data.id)
                    if (title) title.classList.add('text-orange-500')
                }}
                onMouseLeave={() => {
                    const title = document.getElementById(`title` + data.id)
                    if (title) title.classList.remove('text-orange-500')
                }}
                className="block transition duration-300 ease-in-out"
            >
              <div className="flex items-center my-10 ">
                <div className="lg:flex min-w-0 lg:flex-1 items-center">
                  <div className="min-w-0 flex-1 px-8 p-4 ">
                    <p id={`title` + data.id} className="leading-10 text-3xl pb-4 font-modern transition duration-300 ease-in-out">{data.title?.length > 80 ? data.title.slice(0, 79) : data.title}</p>
                    <div className="">
                        <span
                            role="button"
                            tabIndex={0}
                            onClick={handleCategoryClick}
                            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') handleCategoryClick(e) }}
                            className="hover:text-orange-500 mx-1 font-medium text-gray-800 text-sm cursor-pointer"
                        >
                            {category?.name ?? 'Sin categoría'}
                        </span> <span className="text-gray-300">&middot;</span> 
                        <span className="mt-2 ml-2 mr-1 font-medium text-gray-800 text-sm">{moment(data.published).format('LL')}</span> <span className="text-gray-300">&middot;</span>
                        <span className="mt-2 mx-2 font-medium text-gray-800 text-sm">{data.time_read} min read</span> 
                        <p className="mt-4 text-lg font-regular text-gray-800 leading-8">{data.description?.length > 150 ? data.description.slice(0, 149) : data.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </li>
    )
}
export default BlogCardSearch