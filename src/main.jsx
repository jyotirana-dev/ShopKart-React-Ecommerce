import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import CartProvider from './context/CartContext.jsx'
import { BrowserRouter } from 'react-router-dom'
import WishlistProvider from "./context/WishlistContext";
import AuthProvider from "./context/AuthContext.jsx";
ReactDOM.createRoot(document.getElementById('root')).render(

  <BrowserRouter>
 <AuthProvider>
<WishlistProvider>
    <CartProvider>
       <App />
    </CartProvider>
</WishlistProvider>
</AuthProvider>
  </BrowserRouter>

)