import './App.css';
import React from 'react'; 

const ContactUs = ({show, pressOk}) => {
    console.log("show: "  + show ) 
    return (show ? (<div className="overlay">
        <div id="contact-us" className="contact-us content">
    <div className="heading">
        <h3>Contact Us</h3>
    </div>
    <p>885c/3, Near popular Hyundai, Thirurkkad, 
      Perinthalmanna, Malappuram-679321</p>
      <a href="tel:8606858236">Phone <span>@8606858236</span></a>
      <a href="tel:9961666472"> or <span>@9961666472</span></a>
        <br/>
    <div
        className="ok-button" >

      <button onClick={()=> pressOk()}>OK</button>
    </div>

  </div>
    </div>
    ) : '' )
}


export default ContactUs; 