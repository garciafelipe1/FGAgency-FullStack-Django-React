
import { connect } from "react-redux"

import React, { useState } from 'react';
import { reset_password } from "redux/actions/auth/auth";
import { useEffect } from "react";
import { refresh } from "redux/actions/auth/auth";
import { check_authenticated } from "redux/actions/auth/auth";
import { load_user } from "redux/actions/auth/auth";
import { Navigate, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { EnvelopeIcon } from "@heroicons/react/24/outline";


function ResetPassword({
  reset_password,
  isAuthenticated,
  loading,
  refresh,
  check_authenticated,
  load_user,
}){

  useEffect(()=>{
      isAuthenticated ? <></>:
      <>
      {refresh()}
      {check_authenticated()}
      {load_user()}
      </>
  },[])

  const [formdata, setFormData] = useState({
    email: "",
    
  })

  const { email } = formdata

  const onchange = e => {
    setFormData({ ...formdata, [e.target.name]: e.target.value })
  }


  const navigate=useNavigate()

  const onsubmit = async (e) => {
    e.preventDefault();
    await reset_password(email);
    navigate('/');
  };



  if(isAuthenticated){
    return <Navigate to='/dashboard'/>
  }
  return (
    <>
      <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div>
            <img
              className="mx-auto h-12 w-auto"
              src="https://cdn-icons-png.flaticon.com/256/9169/9169912.png"
              alt="Your Company"
            />
          </div>
          <form onSubmit={e => onsubmit(e)} className="mt-8 space-y-6" action="#" method="POST">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="-space-y-px rounded-md shadow-sm">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  value={email}
                  onChange={e => onchange(e)}
                  type="email"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Email address"
                />
              </div>
              
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                />
                
              </div>

              <div className="text-sm">
                Alredy have an account?
                <Link to="/" className="font-medium text-indigo-600 hover:text-indigo-500">
                  Login
                </Link>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <EnvelopeIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
                </span>
                Send Email
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  loading: state.auth.loading
})

export default connect(mapStateToProps, { 
  refresh,
  check_authenticated,
  load_user,
  
  reset_password })(ResetPassword)
