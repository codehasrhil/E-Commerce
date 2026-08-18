import {createBrowserRouter , RouterProvider}  from 'react-router-dom';
import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import SignUp from './pages/SignUp.jsx'
import ProductDetails from './pages/ProductDetails.jsx'
import React from 'react';
import AddProduct from './admin/addProduct.jsx';
import EditProduct from './admin/EditProduct.jsx';
import ProductList from './admin/ProductList.jsx';


const router = createBrowserRouter([
  {path:"/",element: <Home/>},
  {path:"/Login",element: <Login/>},
  {path:"/SignUp",element: <SignUp/>},
  {path:"/ProductDetails/:id",element: <ProductDetails/>},

  {path:'/admin/products',element:<ProductList/>},
  {path:'/admin/products/add',element:<AddProduct/>},
  {path:'/admin/products/update/:id',element:<EditProduct/>},
]);

export default function App(){
  return <RouterProvider router={router} />
}