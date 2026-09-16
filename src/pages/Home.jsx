import React, { useEffect, useState } from "react";
import "./Home.css";
import ProductCard from "../components/ProductCard";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";


const Home = () => {

const [startIndex,setStartIndex] = useState(0);
const [products,setProducts] = useState([]);



useEffect(()=>{

fetch("https://dummyjson.com/products?limit=30")

.then(res=>res.json())

.then(data=>{

setProducts(data.products);

})


},[]);


const nextProducts = ()=>{

  if(startIndex < products.length - 4){

    setStartIndex(startIndex + 1);

  }

};



const prevProducts = ()=>{

  if(startIndex > 0){

    setStartIndex(startIndex - 1);

  }

};

const categories = [

{
name:"Fashion",
image:"https://images.unsplash.com/photo-1445205170230-053b83016050"
},

{
name:"Electronics",
image:"https://images.unsplash.com/photo-1498049794561-7780e7231661"
},

{
name:"Beauty",
image:"https://images.unsplash.com/photo-1596462502278-27bfdc403348"
},

{
name:"Home",
image:"https://images.unsplash.com/photo-1618221195710-dd6b41faaea6"
}

];



return (

<div className="home">


<Navbar />



<section className="hero">


<div className="hero-text">


<h1>
Welcome to ShopKart
</h1>


<p>
Shop smart, shop stylish.
Explore fashion, electronics, beauty & home products.
</p>


<Link to="/products">

<button className="primary-btn">
Shop Now
</button>

</Link>


</div>


</section>






<section className="category-section">


<h2>
Shop By Category
</h2>



<div className="category-container">


{
categories.map((item,index)=>(

<div 
className="category-card"
key={index}
>


<img
src={item.image}
alt={item.name}
/>


<h3>
{item.name}
</h3>


</div>

))
}


</div>


</section>






<section className="featured">


<h2>
Featured Products
</h2>



<div className="featured-slider">


<button 
className="arrow-btn"
onClick={prevProducts}
>
◀
</button>



<div className="featured-container">


{
products
.slice(startIndex,startIndex+4)
.map((product)=>(

<ProductCard

key={product.id}

product={product}

/>

))
}


</div>



<button 
className="arrow-btn"
onClick={nextProducts}
>
▶
</button>


</div>


</section>







<section className="offer-banner">


<h2>
Special Offers
</h2>


<p>
Get amazing discounts on latest products.
</p>


</section>




</div>

)

}


export default Home;