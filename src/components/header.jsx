import React from "react";
import pic1 from "../images/logo.svg"

function Header(){
    return(
        <header>
            <div className="row">
                <div className="logo">
                    <img src={pic1} alt="avatar"></img>
                </div>
                <nav>
                    <ul>
                        <li className="litems">
                            <a>Features</a>
                            <a>Team</a>
                            <a>Sign In</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}


export default Header;