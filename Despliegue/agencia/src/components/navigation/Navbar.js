import {connect} from 'react-redux'
import { Popover, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import {useState, Fragment, useEffect } from 'react'
import {NavLink,Link} from 'react-router-dom'
import loading_dots from 'assets/img/loading-dots.gif'
import logo_boomslag from 'assets/img/boomslag-black.png'
import DotLoader from 'react-spinners/DotLoader'

const solutions = [
    {
      name: 'Casos',
      description: 'Measure actions your users take',
      href: '/casos',
      icon: IconOne,
    },
    {
      name: 'Servicios',
      description: 'Create your own targeted content',
      href: '/servicios',
      icon: IconTwo,
    },
    {
      name: 'Nosotros',
      description: 'Keep track of your growth',
      href: '/nosotros',
      icon: IconThree,
    },
    {
      name: 'Carreras',
      description: 'Keep track of your growth',
      href: '/carreras',
      icon: IconThree,
    },
    {
      name: 'Blog',
      description: 'Keep track of your growth',
      href: '/blog',
      icon: IconThree,
    },
    {
      name: 'Contacto',
      description: 'Keep track of your growth',
      href: '/contacto',
      icon: IconThree,
    },
  ]

function Navbar(){

    const [loading,setLoading]=useState(true)

    window.onscroll = function() {scrollFunction()}

    function scrollFunction() {
        if(document.getElementById('navbar')){
            if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
                document.getElementById('navbar').classList.add('shadow-navbar');
                document.getElementById('navbar').classList.add('bg-white');
            }else{
                document.getElementById('navbar').classList.remove('shadow-navbar');
                document.getElementById('navbar').classList.remove('bg-white');
            }
        }
    }

    const [open, setOpen] = useState(false)

    return(
        <nav data-scroll data-scroll-id="hey" id='navbar' className='w-full max-w-full overflow-x-hidden py-2 transition duration-500 ease-in-out z-50 fixed left-0 right-0'>
          

            <div className="px-3 sm:px-4 xl:px-4 max-w-full">


                <div className="-ml-4 -mt-2 hidden lg:flex flex-wrap items-center justify-between sm:flex-nowrap md:px-4 px-2">
                    <Link to='/' className="ml-4 mt-2">
                    <img
                        src={'https://cdn-icons-png.flaticon.com/256/9169/9169912.png'}
                        width={60}
                        height={60}
                        className=""
                    />
                    </Link>
                    <div className="ml-4 mt-2 flex-shrink-0">
                    <NavLink to='/casos' className="text-lg inline-flex font-semibold leading-6 text-gray-900 border-b-2 border-transparent hover:border-orange-500 transition duration-300 ease-in-out mx-4">Casos</NavLink>
                    <NavLink to='/servicios' className="text-lg inline-flex font-semibold leading-6 text-gray-900 border-b-2 border-transparent hover:border-orange-500 transition duration-300 ease-in-out mx-4">Servicios</NavLink>
                    <NavLink to='/nosotros' className="text-lg inline-flex font-semibold leading-6 text-gray-900 border-b-2 border-transparent hover:border-orange-500 transition duration-300 ease-in-out mx-4">Nosotros</NavLink>
                    <NavLink to='/carreras' className="text-lg inline-flex font-semibold leading-6 text-gray-900 border-b-2 border-transparent hover:border-orange-500 transition duration-300 ease-in-out mx-4">Carreras</NavLink>
                    <NavLink to='/blog' className="text-lg inline-flex font-semibold leading-6 text-gray-900 border-b-2 border-transparent hover:border-orange-500 transition duration-300 ease-in-out mx-4">Blog</NavLink>
                    <NavLink to='/contacto' className="text-lg inline-flex font-semibold leading-6 text-gray-900 border-b-2 border-transparent hover:border-orange-500 transition duration-300 ease-in-out mx-4">Contacto</NavLink>
                    
                    <Link
                        to="/contacto"
                        className="inline-flex ml-12 items-center rounded-md border border-transparent bg-orange-button px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-gray-900 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                    >
                        Hire Us
                        <DotLoader className="ml-3 -mr-1 h-5 w-5" loading={loading} size={20} color="#f2f2f2" />
                    </Link>
                    </div>
                </div>
                {/* mobile nav */}
                <div className="-ml-4 -mt-2 lg:hidden flex flex-wrap items-center justify-between sm:flex-nowrap md:px-4 px-2 relative">
                    <Link to='/' className="ml-4 mt-3 flex-shrink-0">
                    <img
                        src={'https://cdn-icons-png.flaticon.com/256/9169/9169912.png'}
                        width={60}
                        height={60}
                        className=""
                        alt="FG Agency"
                    />
                    </Link>
                    <div className="relative flex-shrink-0 z-[60]">
                      <Popover className="relative">
                          {({ open }) => (
                          <>
                              <Popover.Button
                                  type="button"
                                  className={`
                                      inline-flex items-center justify-center p-3 min-w-[48px] min-h-[48px] touch-manipulation
                                      rounded-lg border-2 border-orange-500 text-gray-900
                                      hover:bg-orange-50 active:bg-orange-100
                                      focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2
                                  `}
                                  aria-expanded={open}
                                  aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
                              >
                                  {open ? (
                                      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                      </svg>
                                  ) : (
                                      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                      </svg>
                                  )}
                              </Popover.Button>

                              <Transition
                                  as={Fragment}
                                  enter="transition ease-out duration-200"
                                  enterFrom="opacity-0"
                                  enterTo="opacity-100"
                                  leave="transition ease-in duration-150"
                                  leaveFrom="opacity-100"
                                  leaveTo="opacity-0"
                              >
                                  <Popover.Panel
                                      className="fixed inset-x-0 top-[80px] z-[55] w-full bg-white shadow-lg border-t border-gray-200"
                                      style={{ maxHeight: 'calc(100vh - 80px)' }}
                                  >
                                      <div className="overflow-y-auto py-4" style={{ maxHeight: 'calc(100vh - 96px)' }}>
                                          <nav className="px-4 space-y-1" aria-label="Menú principal">
                                              {solutions.map((item) => (
                                                  <Link
                                                      key={item.name}
                                                      to={item.href}
                                                      className="flex items-center gap-3 rounded-lg px-4 py-3 text-base font-medium text-gray-900 hover:bg-orange-50 hover:text-orange-600 transition-colors"
                                                  >
                                                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-orange-100 text-orange-600">
                                                          <item.icon aria-hidden="true" />
                                                      </span>
                                                      <span>{item.name}</span>
                                                  </Link>
                                              ))}
                                              <div className="mt-4 pt-4 border-t border-gray-100">
                                                  <Link
                                                      to="/contacto"
                                                      className="flex items-center justify-center rounded-lg bg-orange-500 px-4 py-3 text-base font-medium text-white hover:bg-orange-600 transition-colors"
                                                  >
                                                      Hire Us
                                                  </Link>
                                              </div>
                                          </nav>
                                      </div>
                                  </Popover.Panel>
                              </Transition>
                          </>
                          )}
                      </Popover>
                    </div>
                </div>
            </div>
        </nav>
    )
}

const mapStateToProps=state=>({

})

export default connect(mapStateToProps, {

}) (Navbar)

function IconOne() {
    return (
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="48" height="48" rx="8" fill="#FFEDD5" />
        <path
          d="M24 11L35.2583 17.5V30.5L24 37L12.7417 30.5V17.5L24 11Z"
          stroke="#FB923C"
          strokeWidth="2"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16.7417 19.8094V28.1906L24 32.3812L31.2584 28.1906V19.8094L24 15.6188L16.7417 19.8094Z"
          stroke="#FDBA74"
          strokeWidth="2"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M20.7417 22.1196V25.882L24 27.7632L27.2584 25.882V22.1196L24 20.2384L20.7417 22.1196Z"
          stroke="#FDBA74"
          strokeWidth="2"
        />
      </svg>
    )
  }
  
  function IconTwo() {
    return (
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="48" height="48" rx="8" fill="#FFEDD5" />
        <path
          d="M28.0413 20L23.9998 13L19.9585 20M32.0828 27.0001L36.1242 34H28.0415M19.9585 34H11.8755L15.9171 27"
          stroke="#FB923C"
          strokeWidth="2"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M18.804 30H29.1963L24.0001 21L18.804 30Z"
          stroke="#FDBA74"
          strokeWidth="2"
        />
      </svg>
    )
  }
  
  function IconThree() {
    return (
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="48" height="48" rx="8" fill="#FFEDD5" />
        <rect x="13" y="32" width="2" height="4" fill="#FDBA74" />
        <rect x="17" y="28" width="2" height="8" fill="#FDBA74" />
        <rect x="21" y="24" width="2" height="12" fill="#FDBA74" />
        <rect x="25" y="20" width="2" height="16" fill="#FDBA74" />
        <rect x="29" y="16" width="2" height="20" fill="#FB923C" />
        <rect x="33" y="12" width="2" height="24" fill="#FB923C" />
      </svg>
    )
  }