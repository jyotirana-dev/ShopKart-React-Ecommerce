import React, { useContext } from "react";
import Navbar from "../components/Navbar";
import { WishlistContext } from "../context/WishlistContext";
import { Link } from "react-router-dom";
import "./Wishlist.css";


const Wishlist = () => {

  const { wishlist, removeWishlist } = useContext(WishlistContext);


  return (

    <div>

      <Navbar />


      <div className="wishlist-container">

        <h1 className="wishlist-title">
          My Wishlist
        </h1>


        {
          wishlist.length === 0 ? (

            <div className="empty-wishlist">

              <h2>
                Wishlist is Empty
              </h2>

              <p>
                Add some products to your wishlist ❤️
              </p>

              <Link to="/products">

                <button className="shop-btn">
                  Continue Shopping
                </button>

              </Link>

            </div>

          ) : (

            <div className="wishlist-grid">

              {
                wishlist.map((item) => (

                  <div
                    className="wishlist-card"
                    key={item.id}
                  >

                    <Link to={`/products/${item.id}`}>

                      <img
                        src={item.thumbnail}
                        alt={item.title}
                        className="wishlist-image"
                      />

                    </Link>


                    <h3>
                      {item.title}
                    </h3>


                    <h4>
                      ₹ {item.price}
                    </h4>


                    <div className="wishlist-buttons">

                      <Link to={`/products/${item.id}`}>

                        <button className="view-btn">
                          View Product
                        </button>

                      </Link>


                      <button
                        className="remove-btn"
                        onClick={() => removeWishlist(item.id)}
                      >
                        Remove
                      </button>

                    </div>


                  </div>

                ))
              }

            </div>

          )
        }


      </div>

    </div>

  );

};


export default Wishlist;