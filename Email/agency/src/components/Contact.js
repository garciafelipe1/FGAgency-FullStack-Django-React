import Footer from "components/navigation/Footer"
import Navbar from "components/navigation/Navbar"
import Layout from "hocs/layouts/Layout"
import { useEffect } from "react"
import { Helmet } from 'react-helmet-async';
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline'
import { Switch } from '@headlessui/react'
import { useState } from 'react'
import { Link } from "react-router-dom";
import axios from "axios";
import CircleLoader from "react-spinners/CircleLoader";
function Contact() {

    const [enabled, setEnabled] = useState(false)
    
    const[loading,setLoading]=useState(false)

    const[formdata,setformdata]=useState({
      name:"",
      email:"",
      message:"",
      subject:"",
      phone:"",
      budget:""
    });
    const { name,
    email,
    subject,
    message,
    phone,
    budget,
    }=formdata

    const onChange=(e)=>{
      setformdata({...formdata,[e.target.name]:e.target.value})
    }
    const onSubmit=(e)=>{
      e.preventDefault()

      if(enabled){
        setLoading(true)

        const config={
          headers: {
            'Content-Type': 'application/json'
          }
          
        }

        const formdata=new FormData()
        formdata.append("name",name)
        formdata.append("email",email)
        formdata.append("subject",subject)
        formdata.append("message",message)
        formdata.append("phone",phone)
        formdata.append("budget",budget)

        const fetchData=async()=>{
          const res= await axios.post(`${process.env.REACT_APP_API_URL}/api/contacts/`,formdata,config)

          if(res.status===200){
            setLoading(false)
            setformdata({
              name:"",
              email:"",
              message:"",
              subject:"",
              phone:"",
              budget:""
            })
            alert("Message sent successfully")
          }
          else{
            setLoading(false)
            alert("Something went wrong")
          }


        }
        fetchData()
      }else{
        alert("you must accept terms and conditions")
      }
    }


    return (
        <div className="w-full h-80 shadow-card rounded-lg p-12 overscroll-y-auto overflow-y-auto">
            <h1 className="font-bold text-4xl text-gray-900"> Want to work with us</h1>
            <p className="font-regular mt-4 text-2xl text-gray-700"> We are always looking for talented people</p>
            <form onSubmit={e=>onSubmit(e)} action="#" method="POST" className="grid grid-cols-1 gap-y-6">
              <div>
                <label htmlFor="full-name" className="sr-only mt-4">
                  Full name
                </label>
                <input
                  type="text"
                  name="name"
                  value={name}
                  required
                  onChange={e=>onChange(e)}
                  id="full-name"
                  autoComplete="name"
                  className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  placeholder="Full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <input
                  value={email}
                  required
                  onChange={e=>onChange(e)}
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  placeholder="Email"
                />
              </div>

              <div>
                <label htmlFor="price" className="sr-only">
                  Phone
                </label>
                <div className="relative mt-1 rounded-md shadow-sm">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <span className="text-gray-500 sm:text-sm">+</span>
                  </div>
                  <input
                    type="number"
                    name="phone"
                    value={phone}
                    required
                    onChange={e=>onChange(e)}
                    className="block w-full rounded-md border-gray-300 pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    placeholder="54 291 342 6732"
                    aria-describedby="price-currency"
                  />
                
                </div>
              
              </div>

              <div>
                <label className="sr-only">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={subject}
                  required
                  onChange={e=>onChange(e)}
                  className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                  placeholder="Subject"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="sr-only">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={message}
                  required
                  onChange={e=>onChange(e)}
                  rows={4}
                  className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  placeholder="Message"
                  defaultValue={''}
                />
              </div>
              <div>
                <label htmlFor="message" className="sr-only">
                  Budget
                </label>
                <select
                      name="budget"
                      value={budget}
                      required
                      onChange={e=>onChange(e)}
                      className="mt-1 block w-full pl-3 pr-3 py-1 text-base border-gray-300 text-gray-500">
                  <option value="" className="text-gray-500">Select a Budget(Optional)</option>
                  <option value="0-5K"className="tex-gray-700">$0-$5,000</option>
                  <option value="5-10K"className="tex-gray-700">$5,000-$10,000</option>
                  <option value="10-15K"className="tex-gray-700">$10,000-$15,000</option>
                  <option value="15-20K"className="tex-gray-700">$15,000-$20,000</option>
                </select>
                
              </div>

              <div className=" px-4 py-5 sm:px-6">
                <div className="-ml-4 -mt-2 flex flex-wrap items-center justify-between sm:flex-nowrap">
                  <div className="col-span-2 text-lg font-medium leadigng-6 text-gray-900">
                  <Switch
                        checked={enabled}
                        onChange={setEnabled}
                        className={`${enabled ? 'bg-orange-700' : 'bg-gray-600'}
                          col-span-2 relative inline-flex h-[28px] w-[64px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white/75`}
                          >
                        <span className="sr-only">Use setting</span>
                        <span
                          aria-hidden="true"
                          className={`${enabled ? 'translate-x-9' : 'translate-x-0'}
                            pointer-events-none inline-block h-[24px] w-[24px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
                        />
                      </Switch>
                    <p className="col-span-9 mt-2 text-sm font-regular leading-6 text-gray-900 text-left">
                      By selecting this you accept the <span className="text-orange-500"><Link to="/term"> therms of  service  </Link></span><span> and </span><span className="text-orange-500"><Link to="/privacy"> privacy policy</Link></span></p>
                      
                    
                  </div>  
                  <div className="ml-4 mt-2 flex-shrink-0">
                    {
                      loading ?
                      <div
                      
                      className="relative inline-flex items-center rounded-md border border-transparent bg-orange-700 px-4 py-2 text-lm font-medium text-white shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    
                    >
                      <CircleLoader loading={loading} size={25} color='#ffff'/>
                    </div>
                    :
                    <button
                      type="submit"
                      className="relative inline-flex items-center rounded-md border border-transparent bg-orange-700 px-4 py-2 text-lm font-medium text-white shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                      Send Message
                    </button>
                    }
                    
                  </div>
                </div>
              </div>

            </form>
        </div>
    )
}
export default Contact