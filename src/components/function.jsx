import React from "react";


function Function(props){
    return(
        <div className="functions">
            <img src={props.img} alt="pic"/>
            <h3>{props.text1}</h3>
            <p>{props.text2}</p>
        </div>
    )
}

export default Function;