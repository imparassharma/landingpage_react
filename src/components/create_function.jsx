import React from "react";
import Details from "./function_detail";
import Function from "./function";

function Createfunc(detail){
    return
    (
        <Function
            img = {detail.img}
            text1 = {detail.text1}
            text2 = {detail.text2}
        />
    )
}

function Createfunctions(){
    return(
        <div className="func">
            {Details.map(Createfunc)}
        </div>
    )
}

export default Createfunctions;