import React from "react";


function Function(props){
    return(
        <div className="functions">
            <img src={props.img} alt="pic"></img>
            <h2>{props.text1}</h2>
            <p>{props.text2}</p>
        </div>
    )
}

export default Function;