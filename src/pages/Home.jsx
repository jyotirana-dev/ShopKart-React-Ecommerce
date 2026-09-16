import React, { useEffect, useState } from "react";
import "./Home.css";
import ProductCard from "../components/ProductCard";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";


const Home = () => {

  const [startIndex, setStartIndex] = useState(0);

  const [products, setProducts] = useState([]);


  useEffect(() => {

    fetch("https://dummyjson.com/products?limit=30")

      .then(res => res.json())

      .then(data => {

        setProducts(data.products);

      });

  }, []);


  /* ================= DESKTOP SLIDER ================= */

const nextProducts = () => {

  if(startIndex < products.length - 4){

    setStartIndex(startIndex + 1);

  }
  else{

    setStartIndex(0);

  }

};



const prevProducts = () => {

  if(startIndex > 0){

    setStartIndex(startIndex - 1);

  }
  else{

    setStartIndex(products.length - 4);

  }

};

  /* ================= MOBILE SLIDER ================= */

const nextMobileProduct = () => {

  if (startIndex < products.length - 1) {

    setStartIndex(startIndex + 1);

  }
  else {

    setStartIndex(0);

  }

};



const prevMobileProduct = () => {

  if (startIndex > 0) {

    setStartIndex(startIndex - 1);

  }
  else {

    setStartIndex(products.length - 1);

  }

};


  const categories = [

    {
      name: "Fashion",
      image: "https://images.unsplash.com/photo-1445205170230-053b83016050"
    },

    {
      name: "Electronics",
      image: "https://images.unsplash.com/photo-1498049794561-7780e7231661"
    },

    {
      name: "Beauty",
      image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348"
    },

    {
      name: "Home",
      image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6"
    }

  ];


  return (

    <div className="home">


      <Navbar />


      {/* ================= HERO ================= */}


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



      {/* ================= CATEGORY ================= */}


      <section className="category-section">


        <h2>
          Shop By Category
        </h2>


        <div className="category-container">


          {
            categories.map((item, index) => (

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



      {/* ================= FEATURED PRODUCTS ================= */}


      <section className="featured">


        <h2>
          Featured Products
        </h2>


        {/* DESKTOP */}


        <div className="featured-slider desktop-featured">


          <button
            className="arrow-btn"
            onClick={prevProducts}
          >
            ◀
          </button>


          <div className="featured-container">


            {
              products
                .slice(startIndex, startIndex + 4)
                .map((product) => (

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



        {/* MOBILE */}


        <div className="mobile-featured">


          <button
            className="mobile-arrow"
            onClick={prevMobileProduct}
          >
            ◀
          </button>


          <div className="mobile-product">


            {
              products.length > 0 && (

                <ProductCard
                  product={products[startIndex]}
                />

              )
            }


          </div>


          <button
            className="mobile-arrow"
            onClick={nextMobileProduct}
          >
            ▶
          </button>


        </div>


      </section>



      {/* ================= OFFER ================= */}


      <section className="offer-banner">


        <h2>
          Special Offers
        </h2>


        <p>
          Get amazing discounts on latest products.
        </p>


      </section>


    </div>

  );

};


export default Home;