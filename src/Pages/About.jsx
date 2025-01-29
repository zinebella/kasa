import React from "react";
import Collapse from "../Compenents/Collapse";
import aboutData from "../Data/AboutData.json";
import "../Styles/About.css";

function APropos(){

    return(
      <> 
        <div className="about_image" ></div>
        <div className="about_container">
          {aboutData.map(data=> {
            return(
            <div key= {data.id} className="collapse1">
              <Collapse title={data.title} content={data.content} />
            </div>
            )
           })}
        </div>
        
      </>
     
    )

}
export default APropos;