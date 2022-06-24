import React from "react";
import Card from "./card";
import Info from "./user_detail";
function create_card(card){
    return(
        <Card
        key={card.id}
        text = {card.text}
        img={card.img}
        name = {card.name}
        designation = {card.designation}
        />
    )

}


function Review(){
    return(
        <div className="review">
            {Info.map(create_card)}
        </div>
       
    )
}

export default Review;