import React, { useContext,useState  } from "react";
import { Link } from "react-router-dom";
import { WishlistContext } from "../context/WishlistContext";
import { CartContext } from "../context/CartContext";
import "./ProductCard.css";


const ProductCard = ({product}) => {
const [added, setAdded] = useState(false);

const {wishlist, addToWishlist, removeWishlist} = useContext(WishlistContext);

const {addToCart} = useContext(CartContext);



const isWishlisted = wishlist.some(
  (item)=> item.id === product.id
);



return (

<div className="product-card">



<div
className="wishlist-icon"
onClick={()=> 
  isWishlisted
  ?
  removeWishlist(product.id)
  :
  addToWishlist(product)
}
>

{
isWishlisted ? "❤️" : "♡"
}

</div>




<Link 
to={`/products/${product.id}`}
className="product-link"
>



<img
src={product.thumbnail}
alt={product.title}
className="product-image"
/>



<h2 className="product-title">
{product.title}
</h2>



<div className="rating">
⭐ {product.rating}
</div>



<h3 className="price">
₹ {product.price}
</h3>



<p className="discount">
{product.discountPercentage}% OFF
</p>



</Link>




<button
  className={added ? "cart-btn added" : "cart-btn"}
  onClick={()=>{

    addToCart(product);

    setAdded(true);

    setTimeout(()=>{
      setAdded(false);
    },2000);

  }}
>
  {
    added ? "✓ Added" : "Add Cart"
  }
</button>
</div>

)

}


export default ProductCard;