import React from "react";
import "../Header/Navbar.css"
import fire from "./Asset/Frame.png"

const Navbar = () => {
    return (  <>
    
    
    <div className="nav">
<div className="change" ><a href="http://" target="_blank" rel="noopener noreferrer"><img src={fire} alt="img" srcset="" /><p id="style">Utiltiy</p></a></div>


<div id="home" className="center size"><a href="http://" target="_blank" rel="noopener noreferrer">Home</a></div>
<div className="center size"><a href="http://" target="_blank" rel="noopener noreferrer">About-me</a></div>
<div className="center size"><a href="http://" target="_blank" rel="noopener noreferrer">Pricing</a></div>
<div className="center size"><a href="http://" target="_blank" rel="noopener noreferrer">Features</a></div>

<div className="center size"><a href="http://" target="_blank" rel="noopener noreferrer"><button id="btn">Download</button></a></div>
    </div>
    </> );
}
 
export default Navbar;

