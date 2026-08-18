import React from 'react'
import { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import api from '../api/axios.js'

function Login() {
  const [form,setform] = useState({
    email:"",
    password:""
  })
  const [msg,setmsg] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setform({
      ...form,
      [e.target.name]:e.target.value
    });
  }

  const handleSubmit = async(e) =>{
    e.preventDefault();
    console.log("Form submitted");
     try {
       const response = await api.post('/auth/Login',form)
       localStorage.setItem('token',response.data.token);
       setmsg("Login Successful");

       //redirect to dashboard
       setTimeout(() => {
          navigate('/')
       }, 1000);
       
     } catch (error) {
       setmsg(error.response?.data?.message || "An error occurred");
     }
  }
  return (
   <div className='flex items-center justify-center min-h-screen bg-gray-100 px-4'>
      <div className='bg-white p-8 rounded-lg shadow-md w-full max-w-sm'>
         <h2 className='text-2xl font-bold mb-6 text-center'>Login To Your Account</h2>

         {
            msg && (
              <div className=' p-3 rounded mb-4 text-center'>
                {msg}
              </div>
            )
         }

         <form onSubmit={handleSubmit} className='space-y-4' >
          <input type="email" name='email' placeholder='Enetr email' value={form.email} onChange={handleChange}
          className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none' 
          required
          />
          <input type="password" name='password' placeholder='Enetr password' value={form.password} onChange={handleChange}
          className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none' 
          required
          />

           <button type='submit' className='w-full bg-blue-500 text-white py-2 px-4 mt-4 rounded-md hover:bg-balue-600'>Login</button>
          

         </form>

      </div>
    </div>
  )
}

export default Login
