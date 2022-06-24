import React from "react";
import Button from "./button";
import pic2 from "../images/illustration-intro.png";
import Createfunctions from "./create_function";
import Banner from "./banner";
import Review from "./review";
import Signup from "./signup";

function Main(){
    return(
        <div className="main">
            <div className="top-section">
                <img src={pic2} alt="main_bg"></img>
                <div className="intro">
                    <h1>All your files in one secure location, accesible anywhere</h1>
                    <p>Fylo stores all your most important files in one secure location. Access them wherever you need, share and collaborate with friends family, and co-workers.</p>
                    <Button
                        text="Get Started"
                    />
                </div>
            </div>
            <div className="middle-section">
                <Createfunctions/>
                <Banner/>
                <Review/>
            </div>
            <div className="bottom-section">
                <Signup/>
            </div>
        </div>
    )
}


export default Main;