import React from "react";
import pic3 from "../images/illustration-stay-productive.png"
function Banner(){
    return(
        <div className="func2">
            <img src={pic3} alt="bg2"/>
            <div className="info">
                <h1>Stay productive, wherever you are</h1>
                <p>Never let location be an issue when accessing your files. Fylo has you covered for all of your file storage needs.</p>
                <p>Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.</p>
            </div>
        </div>
    )
}

export default Banner;