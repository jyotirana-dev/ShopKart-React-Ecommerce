import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { WishlistContext } from "../context/WishlistContext";
import "./Navbar.css";


const Navbar = () => {


const {cart} = useContext(CartContext);

const {wishlist} = useContext(WishlistContext);


const [menuOpen,setMenuOpen] = useState(false);



return (

<nav className="navbar">


<div className="logo">

<Link to="/">
ShopKart
</Link>

</div>




<div className={menuOpen ? "nav-links active" : "nav-links"}>



<Link 
to="/"
onClick={()=>setMenuOpen(false)}
>
Home
</Link>




<Link 
to="/products"
onClick={()=>setMenuOpen(false)}
>
Products
</Link>




<Link 
to="/wishlist"
onClick={()=>setMenuOpen(false)}
>

Wishlist

<span className="count">
{wishlist.length}
</span>

</Link>





<Link 
to="/cart"
onClick={()=>setMenuOpen(false)}
>

Cart

<span className="count">
{cart.length}
</span>


</Link>

<Link to="/contact">
Contact
</Link>

<Link to="/about">
About
</Link>

</div>






<button

className="menu-btn"

onClick={()=>setMenuOpen(!menuOpen)}

>

{
menuOpen ? "✕" : "☰"
}


</button>



</nav>

)

}


export default Navbar;