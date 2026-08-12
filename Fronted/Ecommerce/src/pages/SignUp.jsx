import React from 'react'
import { useState } from 'react'
import api from '../api/axios'

const SignUp = () => {

  const [form , setform] = useState({
    name:"",
    email:"",
    password:""
  })

  const [msg,setmsg] = useState()

  const handleChange=(e)=>{
       setform({...form,[e.target.name]:e.target.value})
  }


  const handleSubmit = async(e) => {
     e.preventDefault();
     console.log("Form submitted");
     try {
       const response = await api.post('/auth/signUp',form)
       setmsg(response.data.message);
     } catch (error) {
       setmsg(error.response?.data?.message || "An error occurred");
     }
  }
  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-100 px-4'>
      <div className='bg-white p-8 rounded-lg shadow-md w-full max-w-sm'>
         <h2 className='text-2xl font-bold mb-6 text-center'>Create Account</h2>

         {
            msg && (
              <div className=' p-3 rounded mb-4 text-center'>
                {msg}
              </div>
            )
         }

         <form onSubmit={handleSubmit} className='space-y-4' >
          <input type="text" name='name' placeholder='Enetr Name' value={form.name} onChange={handleChange}
          className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none' 
          required
          />
          <input type="email" name='email' placeholder='Enetr email' value={form.email} onChange={handleChange}
          className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none' 
          required
          />
          <input type="password" name='password' placeholder='Enetr password' value={form.password} onChange={handleChange}
          className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none' 
          required
          />

           <button type='submit' className='w-full bg-blue-500 text-white py-2 px-4 mt-4 rounded-md hover:bg-balue-600'>Sign Up</button>

         </form>

        

      </div>
    </div>
  )
}

export default SignUp
