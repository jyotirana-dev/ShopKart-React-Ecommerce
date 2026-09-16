
import {Route,Routes} from 'react-router-dom'
import React from 'react'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Products from './pages/Products'
import NotFound from './pages/NotFound'
import ProductDetail from './pages/ProductDetail'
import Cart from './pages/Cart'
import Wishlist from "./pages/Wishlist";
import Checkout from "./pages/Checkout";
import Payment from "./pages/Payment";
import Success from "./pages/Success";
import Footer from "./components/Footer";

const App=()=> {
 

  return (
    <div>
    <Routes>
    
      <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
           <Route path='/products' element={<Products/>}/>
         
          <Route path='/products/:id' element={<ProductDetail/>}/>
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<Wishlist />} />
<Route path="/checkout" element={<Checkout />} />
<Route path="/payment" element={<Payment />} />
<Route path="/success" element={<Success />} />

           <Route path='*' element={<NotFound/>}/>
         
    </Routes>
     <Footer />
   </div>
        
  )         
}

export default App
