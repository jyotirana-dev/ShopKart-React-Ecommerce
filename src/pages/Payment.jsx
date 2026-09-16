import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import "./Payment.css";


const Payment = () => {


const [paymentMethod,setPaymentMethod] = useState("");

const navigate = useNavigate();



const handlePayment = ()=>{


if(!paymentMethod){

alert("Please select payment method");

return;

}


navigate("/success");


};




return (

<div>


<Navbar />


<h1 className="payment-title">
Payment
</h1>




<div className="payment-box">


<h2>
Select Payment Method
</h2>




<div className="payment-option">


<label>

<input

type="radio"

name="payment"

value="UPI"

onChange={(e)=>
setPaymentMethod(e.target.value)
}

/>

<span>
📱 UPI
</span>


</label>


</div>





<div className="payment-option">


<label>


<input

type="radio"

name="payment"

value="Card"

onChange={(e)=>
setPaymentMethod(e.target.value)
}

/>


<span>
💳 Credit / Debit Card
</span>


</label>


</div>







<div className="payment-option">


<label>


<input

type="radio"

name="payment"

value="Net Banking"

onChange={(e)=>
setPaymentMethod(e.target.value)
}

/>


<span>
🏦 Net Banking
</span>


</label>


</div>







<div className="payment-option">


<label>


<input

type="radio"

name="payment"

value="COD"

onChange={(e)=>
setPaymentMethod(e.target.value)
}

/>


<span>
🚚 Cash On Delivery
</span>


</label>


</div>






<button
className="confirm-btn"
onClick={handlePayment}
>

Confirm Order

</button>



</div>


</div>

)

}


export default Payment;