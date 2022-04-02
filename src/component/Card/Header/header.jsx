import React from 'react';
import './header.css';
import image from '../images/Logo.jpg';

function Header(){
 return(
     <div className="header">
         <div> <img className="Logo" src={image} /> </div>
         <div className="search-bar">
         <input className="input"></input>
         <button className="btn">Filter </button></div>
     </div>
 )
}

export default Header;