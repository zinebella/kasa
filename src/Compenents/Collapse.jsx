import React, { useState } from "react";
import "../Styles/Collapse.css";

function Collapse({title, content}){
      //declaration du state en utilisant le Hook useState(),définir le collapse par défaut comme fermé
    const [contentVisible , setContentVisible ] = useState(false);

     // à chaque clic sur le collapse, ça inverse la valeur pour (ouvert/fermé)
    const showContent = () => { 
      setContentVisible(!contentVisible) // inverse la valeur actuelle
    }
    // définir les classes selon si c'est visible ou pas, idem pour le chevron
    const collapseContent = (contentVisible ? "visible" : "hidden") + " collapse"
    const collapseChevron = (contentVisible ? "fa fa-chevron-up":" fa fa-chevron-down" );
       

  return(
    <div className="collapse">

      {/*affiche le titre et le chevron*/}
      <div className="collapse_header" onClick={showContent}>
        <h2>{title}</h2>
        <div className="chevronValue">
            <i className={collapseChevron}/><i/>
        </div>
      </div>
      
      {/* affiche le contenu */}
      <div className={collapseContent}>
        <ul>{content}</ul>
      </div>

    </div>
  )
}
export default Collapse



  
  
 

  
  
    
  

