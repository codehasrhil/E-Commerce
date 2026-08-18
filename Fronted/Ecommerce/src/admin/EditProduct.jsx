import React from 'react'
import { useState,useEffect } from 'react'
import api from '../api/axios'
import { useNavigate,useParams } from 'react-router-dom'

const EditProduct = () => {

    const {id} = useParams();
    const navigate = useNavigate();
    const [form ,setform] = useState({
            title:'',
            description:'',
            price:'',
            category:'',
            image:'',
            stock:''
        })

        const allowrdFields = ['title','description','price','category','image','stock']

        const loadProduct = async() => {
               const resp = await api.get('/products')
               const product = resp.data.find((p) => p._id === id);
               setform(product)
        }

        useEffect(() => {
             loadProduct();
        },[])

        const handleChange = (e) => {
          setform({
            ...form,
            [e.target.name]: e.target.value
          })
        }

        const handleSubmit = async (e) => {
          e.preventDefault();
          try {

            await api.put(`/products/update/${id}`,form)
            alert('Product Updated successfully!')
            navigate("/admin/products")
            
          } catch (error) {
            console.log("error while editing",error)
          }
        }


  return (
   <div className='max-w-lg mx-auto mt-10 bg-white p-6 shadow rounded'>
       <h2 className='text-2xl font-bold mb-6'>Add New Product</h2>
      <form onSubmit={handleSubmit} className='space-y-3'>
        {
            allowrdFields.map((key) => (
              allowrdFields.includes(key) &&
                 <input  
                      key={key} 
                      name={key} 
                      value={form[key]} 
                      onChange={handleChange} 
                      placeholder={key}
                      className="w-full p-2 border border-gray-300 rounded" />
            ))
        }
        <button type='submit' className='w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600'>Edit Product</button>
      </form>
    </div>
  )
}

export default EditProduct
