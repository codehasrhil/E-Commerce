import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import api from '../api/axios'
import {Link} from 'react-router-dom'


function Home() {

  const [products , setproducts]  = useState([]);
  const [search,setsearch] = useState("");
  const [category , setcategory] = useState("")

  const laodProduct = async() => {
      const res = await api.get(`/products?search=${search}&category=${category}`)
      setproducts(res.data)
  }

  useEffect(() => {
    laodProduct()
  },[search,category])


  return (
    <div className='p-6'>

          {/* Search */}
          <div className='mb-4 flex gap-3'>
              <input type="text"
              placeholder='Search Products...' 
              value={search}
              onChange={(e) => setsearch(e.target.value)}
              className='border px-2 py-2 rounded w-1/2'
              />
          {/* Category filter */}
          <select
             value={category}
             onChange={(e) => setcategory(e.target.value)}
             className='border px-3 py-2 rounded'
          >
                 <option value="">All Categories</option>
                 <option value="laptop">Laptop</option>
                 <option value="mobile">Mobile</option>
                 <option value="fasion">Fasion</option>
                 <option value="furnichar">furnichair</option>


          </select>
          </div> 

          {/* Products */}
          <div className='grid grid-cols-2 md:grid-cols-4 gap-5'>
              {products.map((product) => (
                <Link
                  key={product._id}
                  to={`/ProductDetails/${product._id}`}
                  className='border rounded p-3 flex flex-col items-center hover:shadow-lg transition'
                >

                        <img src={product.img} alt={product.title} className='w-full h-40 object-contain bg-white rounded'/>
                        <h2 className='mt-2 font-semibold text-lg'>{product.title}</h2>
                        <p className='text-gray-600'>{product.price}</p>
                        

                </Link>
              ))}
          </div>
      
      
    </div>
  )
}

export default Home
