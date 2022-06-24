import React from "react";

function Card(props){
    return(
        <div className="card">
            <p>{props.text}</p>
            <div className="user">
                <img src={props.img} alt="user"/>
                <div className="user_detail">
                    <h5>{props.name}</h5>
                    <p>{props.designation}</p>
                </div>
            </div>
        </div>
    )
}

export default Card;