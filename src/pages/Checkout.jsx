import React, { useContext, useState } from "react";
import Navbar from "../components/Navbar";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import "./Checkout.css";


const Checkout = () => {


const { cart } = useContext(CartContext);

const navigate = useNavigate();



const [formData,setFormData] = useState({

name:"",
email:"",
mobile:"",
address:"",
city:"",
pincode:"",
payment:""

});



const totalPrice = cart.reduce(

(total,item)=>
total + Number(item.price)*item.quantity

,0);



const handleChange=(e)=>{


setFormData({

...formData,

[e.target.name]:e.target.value

});


};



const handleSubmit=(e)=>{

e.preventDefault();


navigate("/payment");


};



return (

<div>


<Navbar />



<h1 className="checkout-title">
Checkout
</h1>




<div className="checkout-container">





<div className="checkout-form">


<h2>
Customer Details
</h2>



<form onSubmit={handleSubmit}>


<input
type="text"
name="name"
placeholder="Full Name"
value={formData.name}
onChange={handleChange}
required
/>



<input
type="email"
name="email"
placeholder="Email"
value={formData.email}
onChange={handleChange}
required
/>



<input
type="number"
name="mobile"
placeholder="Mobile Number"
value={formData.mobile}
onChange={handleChange}
required
/>



<textarea

name="address"

placeholder="Full Address"

value={formData.address}

onChange={handleChange}

required

/>




<input
type="text"
name="city"
placeholder="City"
value={formData.city}
onChange={handleChange}
required
/>



<input
type="number"
name="pincode"
placeholder="Pincode"
value={formData.pincode}
onChange={handleChange}
required
/>





<h3>
Payment Method
</h3>


<label>

<input
type="radio"
name="payment"
value="UPI"
onChange={handleChange}
/>

 UPI

</label>



<label>

<input
type="radio"
name="payment"
value="Card"
onChange={handleChange}
/>

 Card

</label>



<label>

<input
type="radio"
name="payment"
value="COD"
onChange={handleChange}
/>

 Cash On Delivery

</label>





<button className="place-btn">

Place Order

</button>



</form>


</div>







<div className="order-summary">


<h2>
Order Summary
</h2>



{
cart.map((item)=>(

<div 
className="summary-item"
key={item.id}
>

<p>
{item.title}
</p>


<p>
Qty: {item.quantity}
</p>


<p>
₹ {item.price * item.quantity}
</p>


<hr />


</div>

))
}



<h2>

Total: ₹ {totalPrice.toFixed(2)}

</h2>


</div>




</div>



</div>

)

}


export default Checkout;