import {createBrowserRouter , RouterProvider}  from 'react-router-dom';
import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import SignUp from './pages/SignUp.jsx'
import ProductDetails from './pages/ProductDetails.jsx'
import React from 'react';


const router = createBrowserRouter([
  {path:"/",element: <Home/>},
  {path:"/Login",element: <Login/>},
  {path:"/SignUp",element: <SignUp/>},
  {path:"/ProductDetails/:id",element: <ProductDetails/>}
]);

export default function App(){
  return <RouterProvider router={router} />
}