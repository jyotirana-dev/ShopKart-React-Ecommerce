
import React, { useContext, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { CartContext } from "../context/CartContext";
import "./ProductDetail.css";


const ProductDetail = () => {

const [added, setAdded] = useState(false);
const { addToCart } = useContext(CartContext);

const { id } = useParams();


const [product, setProduct] = useState(null);

const [selectedImage, setSelectedImage] = useState("");



useEffect(() => {


fetch(`https://dummyjson.com/products/${id}`)

.then((res) => res.json())

.then((data) => {

setProduct(data);

setSelectedImage(data.thumbnail);

})


.catch((error)=>{

console.log(error);

});


}, [id]);





if(!product){

return (

<h2 className="loading">
Loading...
</h2>

)

}




const finalPrice = (

product.price -

(product.price * product.discountPercentage) / 100

).toFixed(2);






return (

<div>


<Navbar />



<div className="detail-container">





<Link to="/products">

<button className="back-btn">

← Back To Products

</button>

</Link>






<div className="product-detail">





<div className="image-section">



<img

src={selectedImage}

alt={product.title}

className="main-image"

/>





<div className="thumbnail-box">


{

product.images.map((img,index)=>(


<img

key={index}

src={img}

alt="product"

onClick={()=>setSelectedImage(img)}

className="small-image"

/>


))


}



</div>



</div>








<div className="product-info">





<h1>

{product.title}

</h1>






<p>

<b>Brand:</b> {product.brand}

</p>






<p>

<b>Category:</b> {product.category}

</p>







<h2 className="price">

₹ {finalPrice}

</h2>





<p className="old-price">

₹ {product.price}

</p>






<p>

🔥 {product.discountPercentage}% OFF

</p>






<p>

⭐ Rating : {product.rating}

</p>







<p>

<b>Description:</b>

<br/>

{product.description}

</p>







<p>

<b>Stock:</b> {product.stock}

</p>






<p>

<b>Availability:</b> {product.availabilityStatus}

</p>






<p>

<b>Shipping:</b> {product.shippingInformation}

</p>






<p>

<b>Warranty:</b> {product.warrantyInformation}

</p>





<button
  className="cart-btn"
  disabled={added}
  onClick={()=>{

    addToCart(product);

    setAdded(true);

    setTimeout(()=>{
      setAdded(false);
    },2000);

  }}
>
  {added ? "✓ Added To Cart" : "Add To Cart"}
</button>




</div>






</div>









<div className="reviews">





<h2>

Customer Reviews

</h2>






{

product.reviews.map((review,index)=>(




<div

className="review-card"

key={index}

>





<p>

⭐ {review.rating}

</p>






<p>

{review.comment}

</p>






<b>

{review.reviewerName}

</b>






</div>




))


}






</div>






</div>





</div>



)

}



export default ProductDetail;