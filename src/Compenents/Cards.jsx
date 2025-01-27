import React from "react";
import { Link } from "react-router-dom";
import datas from "../Data/data.json";
import "../Styles/Cards.css";

//le composant qui sert à récupérer la liste des logements et de les afficher sous forme de cards
const Cards=() => {
  return (
    <div className="cards">
      {/*liste de la base de données*/}
       {datas.map((data) => {
        const { id,cover,title } = data;
        // affiche la fiche logement sur la page home 
        return(
          <div className="card" key={id}>
            <Link to={{ pathname: "/Logement", search: "?_id="+id }}>
              <img src={cover} alt={title} className="card_img"/>
              <h3>{title}</h3>
            </Link>
          </div>
        )
      })}
    </div>
  )
}
export default Cards

