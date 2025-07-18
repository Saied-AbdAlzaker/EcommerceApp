import React from 'react';
import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, createHashRouter, RouterProvider } from 'react-router-dom';
import MasterLayout from './Shared/MasterLayout/MasterLayout';
import Home from './Features/Components/Home/Home';
import Products from './Features/Components/Products/Products';
import Categories from './Features/Components/Categories/Categories';
import Brands from './Features/Components/Brands/Brands';
import Cart from './Features/Components/Cart/Cart';
import Signin from './Core/Auth/Components/Signin/Signin';
import Signup from './Core/Auth/Components/Signup/Signup';
import Notfound from './Shared/Notfound/Notfound';
import ForgetPassword from './Core/Auth/Components/ForgetPassword/ForgetPassword';
import ResetPassword from './Core/Auth/Components/ResetPassword/ResetPassword';
import UserContextProvider from './Core/Context/TokenContext';
import ProtectedRoute from './Core/ProtectedRoute/ProtectedRoute';
import AuthProtectedRoute from './Core/ProtectedRoute/AuthProtectedRoute';
// React Queery
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import ProductDetails from './Features/Components/ProductDetails/ProductDetails';
import CartContextProvider from './Core/Context/CartContext';
import { Toaster } from 'react-hot-toast';
import Checkout from './Features/Components/Checkout/Checkout';
import Orders from './Features/Components/Orders/Orders';

const qoeryClient = new QueryClient()

const routes = createHashRouter([
  {
    path: '', element: <MasterLayout />, children: [
      { path: '', element: <ProtectedRoute><Home /></ProtectedRoute> },
      { path: 'home', element: <ProtectedRoute><Home /></ProtectedRoute> },
      { path: 'products', element: <ProtectedRoute><Products /></ProtectedRoute> },
      { path: 'product/:productId', element: <ProtectedRoute><ProductDetails /></ProtectedRoute> },
      { path: 'categories', element: <ProtectedRoute><Categories /></ProtectedRoute> },
      { path: 'brands', element: <ProtectedRoute><Brands /></ProtectedRoute> },
      { path: 'cart', element: <ProtectedRoute><Cart /></ProtectedRoute> },
      { path: 'checkout', element: <ProtectedRoute><Checkout /></ProtectedRoute> },
      { path: 'allorders', element: <ProtectedRoute><Orders /></ProtectedRoute> },
      { path: 'signin', element: <AuthProtectedRoute><Signin /></AuthProtectedRoute> },
      { path: 'signup', element: <AuthProtectedRoute><Signup /></AuthProtectedRoute> },
      { path: 'forgetPassword', element: <AuthProtectedRoute><ForgetPassword /> </AuthProtectedRoute> },
      { path: 'resetPassword', element: <AuthProtectedRoute><ResetPassword /></AuthProtectedRoute> },
      { path: '*', element: <Notfound /> },
    ]
  }
])

function App() {
  return (
    <>
      <QueryClientProvider client={qoeryClient}>
        <CartContextProvider>
          <UserContextProvider>
            <RouterProvider router={routes}></RouterProvider>
            <Toaster position="top-right"/>
          </UserContextProvider>
        </CartContextProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
