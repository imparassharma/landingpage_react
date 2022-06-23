import React from "react";
import Button from "./button";
import pic2 from "../images/illustration-intro.png"
function Main(){
    return(
        <div className="main">
            <div className="top-section">
                <img src={pic2}></img>
                <h1>All your files in one secure location, accesible anywhere</h1>
                <p>Fylo stores all your most important files in one secure location. Access them wherever you need, share and collaborate with friends family, and co-workers.</p>
                <Button/>
            </div>
            <div className="middle-section">

            </div>
            <div className="bottom-section">

            </div>
        </div>
    )
}


export default Main;