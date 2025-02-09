import React from "react";
import Collapse from "../Compenents/Collapse";
import aboutData from "../Data/AboutData.json";
import "../Styles/About.css";

function APropos(){

    return(
      <> 
        <div className="about_image" ></div>
        <section className="about_container">
          {/*parcours des données aboutData por générer un bloc dynamique*/}
          {aboutData.map(data=> {
            return(
            <div key= {data.id} className="collapse1">
              {/*Collapse affichant le titre et le contenu*/}
              <Collapse title={data.title} content={data.content} />
            </div>
            )
           })}
        </section>
        
      </>
     
    )

}
export default APropos;