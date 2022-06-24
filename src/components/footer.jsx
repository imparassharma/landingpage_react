import React from "react";
import pic4 from "../images/logo.svg";
import pic5 from "../images/icon-location.svg";
import pic6 from "../images/icon-phone.svg";
import pic7 from "../images/icon-email.svg";

function Footer(){
    return(
        <footer>
            <div className="logo">
                <img src={pic4} alt="logo"/>
            </div>
            <div className="information">
                <div className="location">
                    <img  src={pic5} alt="loc"/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                </div>
                <div className="contact">
                    <div className="mobile">
                        <img src={pic6} alt="mob"/>
                        <p>+1-543-123-4567</p>
                    </div>
                    <div className="gmail">
                        <img src={pic7} alt="email"/>
                        <p>example@fylo.com</p>
                    </div>
                </div>
                <div className="links">
                    <div className="col1">
                        <p>About us</p>
                        <p>Jobs</p>
                        <p>Press</p>
                        <p>Blogs</p>
                    </div>
                    <div className="col2">
                        <p>Contact Us</p>
                        <p>Terms</p>
                        <p>Policy</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}


export default Footer;