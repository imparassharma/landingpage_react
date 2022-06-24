import React from "react";
import Button from "./button";
function Signup(){
    return(
        <div className="signup">
            <h1>Get early access today</h1>
            <p>It only takes a minute to sign up and our free starter tier is extremely generous. If you have any questions, our support team would be happy to help you.</p>
            <div className="signup-row">
                <input placeholder="email@example.com" type="text"></input>
                <Button
                    text="Get Started For Free"
                />
            </div>
        </div>
    )
}

export default Signup