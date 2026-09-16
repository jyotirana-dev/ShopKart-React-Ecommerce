import React from "react";
import Navbar from "../components/Navbar";
import "./About.css";


const About = () => {


  return (

    <div>

      <Navbar />


      <div className="about-container">


        <h1>
          About ShopKart
        </h1>


        <p className="about-intro">

          ShopKart is an online shopping platform where users can
          explore and purchase products from different categories
          like beauty, fashion, electronics and lifestyle.

        </p>




        <div className="about-section">


          <h2>
            Our Mission
          </h2>


          <p>

            Our mission is to provide a simple, smooth and enjoyable
            shopping experience with quality products and easy
            browsing.

          </p>


        </div>





        <div className="about-section">


          <h2>
            Why Choose ShopKart?
          </h2>


          <ul>

            <li>
              Wide range of products
            </li>

            <li>
              Easy cart and wishlist features
            </li>

            <li>
              Simple checkout experience
            </li>

            <li>
              User-friendly shopping interface
            </li>


          </ul>


        </div>





        <div className="about-section">


          <h2>
            Our Vision
          </h2>


          <p>

            To create a convenient online shopping experience
            where customers can easily find their favourite products.

          </p>


        </div>




      </div>


    </div>

  )

}


export default About;