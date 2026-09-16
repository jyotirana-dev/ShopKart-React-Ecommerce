import React, { useContext } from "react";
import Navbar from "../components/Navbar";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import "./Cart.css";


const Cart = () => {


const { 
cart,
increaseQuantity,
decreaseQuantity,
removeFromCart
} = useContext(CartContext);



const totalPrice = cart.reduce(
(total,item)=>
total + Number(item.price) * item.quantity
,0);



return (

<div>


<Navbar />


<h1 className="cart-heading">
My Cart
</h1>




{
cart.length === 0

?

<h2 className="empty-cart">
Cart is Empty
</h2>


:

<div className="cart-page">



<div className="cart-container">


{
cart.map((item)=>(


<div className="cart-card" key={item.id}>


<img
src={item.thumbnail}
alt={item.title}
/>



<h3>
{item.title}
</h3>



<h4>
₹ {item.price}
</h4>




<div className="quantity-box">


<button
onClick={()=>decreaseQuantity(item.id)}
>
-
</button>



<span>
{item.quantity}
</span>



<button
onClick={()=>increaseQuantity(item.id)}
>
+
</button>



</div>




<button
className="remove-btn"
onClick={()=>removeFromCart(item.id)}
>
Remove
</button>




</div>


))
}


</div>




<div className="cart-summary">


<h2>
Total: ₹ {totalPrice.toFixed(2)}
</h2>



<Link to="/checkout">

<button className="checkout-btn">
Proceed to Checkout
</button>


</Link>


</div>



</div>


}



</div>

)

}


export default Cart;