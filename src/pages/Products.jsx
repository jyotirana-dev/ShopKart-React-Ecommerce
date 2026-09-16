import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";
import "./Products.css";


const Products = () => {


const [products,setProducts] = useState([]);

const [search,setSearch] = useState("");

const [category,setCategory] = useState("All");




useEffect(()=>{


fetch("https://dummyjson.com/products?limit=30")

.then(res=>res.json())

.then(data=>{

setProducts(data.products);

})


},[]);





const categories = [

"All",
"beauty",
"fragrances",
"furniture",
"groceries",


];






const filteredProducts = products.filter((item)=>{


const searchMatch = item.title
.toLowerCase()
.includes(search.toLowerCase());



const categoryMatch =

category==="All"

?

true

:

item.category===category;



return searchMatch && categoryMatch;


});





return (

<div>


<Navbar />



<h1 className="products-title">
All Products
</h1>




<div className="filter-box">


<input

type="text"

placeholder="Search products..."

value={search}

onChange={(e)=>setSearch(e.target.value)}

/>




<select

value={category}

onChange={(e)=>setCategory(e.target.value)}

>


{
categories.map((cat)=>(

<option key={cat}>
{cat}
</option>

))
}


</select>



</div>





<div className="products-container">


{

filteredProducts.map((product)=>(


<ProductCard

key={product.id}

product={product}

/>


))


}



</div>



</div>

)

}


export default Products;