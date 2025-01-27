import React from "react";
import "../Styles/main.css";

function Main ({children}){
    return(
            <div className="main">
                {children}
            </div>
    )
}

export default Main