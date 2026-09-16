import React, { useState } from "react";
import Navbar from "../components/Navbar";
import "./Contact.css";


const Contact = () => {


  const [formData, setFormData] = useState({

    name:"",
    email:"",
    message:""

  });



  const handleChange = (e)=>{

    setFormData({

      ...formData,
      [e.target.name]: e.target.value

    });

  };



  const handleSubmit = (e)=>{

    e.preventDefault();


    console.log(formData);


    alert("Message Sent Successfully!");



    setFormData({

      name:"",
      email:"",
      message:""

    });


  };



  return (

    <div>

      <Navbar />


      <div className="contact-container">


        <h1>
          Contact Us
        </h1>


        <p className="contact-text">
          Have any questions? Feel free to contact us.
        </p>



        <form 
        className="contact-form"
        onSubmit={handleSubmit}
        >


          <input

            type="text"

            name="name"

            placeholder="Enter Your Name"

            value={formData.name}

            onChange={handleChange}

            required

          />



          <input

            type="email"

            name="email"

            placeholder="Enter Your Email"

            value={formData.email}

            onChange={handleChange}

            required

          />



          <textarea

            name="message"

            placeholder="Enter Your Message"

            rows="5"

            value={formData.message}

            onChange={handleChange}

            required

          ></textarea>




          <button>

            Send Message

          </button>



        </form>




        <div className="contact-info">

          <h3>
            ShopKart
          </h3>

          <p>
            Email: support@shopkart.com
          </p>

          <p>
            Phone: +91 9876543210
          </p>


        </div>



      </div>


    </div>

  )

}


export default Contact;