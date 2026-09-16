import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";


const Footer = () => {


  return (

    <footer className="footer">


      <div className="footer-container">


        <div className="footer-section">

          <h2>
            ShopKart
          </h2>

          <p>
            Your one stop destination for quality products.
          </p>

        </div>





        <div className="footer-section">

          <h3>
            Quick Links
          </h3>


          <Link to="/">
            Home
          </Link>


          <Link to="/products">
            Products
          </Link>


          <Link to="/wishlist">
            Wishlist
          </Link>


          <Link to="/contact">
            Contact
          </Link>


        </div>






        <div className="footer-section">


          <h3>
            Contact
          </h3>


          <p>
            Email: jyotirana7388@gmail.com
          </p>


          <p>
            Phone: +91 9876543210
          </p>


        </div>



      </div>





      <div className="footer-bottom">

        <p>
          © 2026 ShopKart. All Rights Reserved.
        </p>

      </div>



    </footer>

  )

}


export default Footer;