import React from "react";
const Chiken=({img,titre,text})=>{
    return(
        <div className="chiken">
            <img className="chiken_img" src={img} alt="avion" />
            <h3 className="chiken_titre">{titre}</h3>
            <p className="chiken_text">{text}</p>
        </div>

    );
}

export default Chiken;git