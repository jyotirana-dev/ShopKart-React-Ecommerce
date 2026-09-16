import React from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import "./Success.css";


const Success = () => {


const orderId = Math.floor(
Math.random()*100000
);



return (

<div>


<Navbar />



<div className="success-page">



<div className="success-card">



<div className="success-icon">
✓
</div>




<h1>
Order Placed Successfully!
</h1>




<h3>
Thank you for shopping with ShopKart
</h3>




<p className="order-id">

Order ID: #SK{orderId}

</p>




<p>
Your order has been confirmed.
</p>





<Link to="/">

<button className="continue-btn">

Continue Shopping

</button>

</Link>




</div>



</div>



</div>

)

}


export default Success;