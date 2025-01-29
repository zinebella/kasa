import React,{useState} from "react";
import { useSearchParams } from "react-router-dom";
import ErrorPage from "../Pages/ErrorPage";
import Collapse from"../Compenents/Collapse";
import Carousel from "../Compenents/Carousel";
import Main from "../Layout/Main";
import datas from "../Data/data.json";
import "../Styles/Logement.css";


      const arrayStars = [1, 2, 3, 4, 5]

  function Logement(){
    // récupère l'ID de l'URL
    const [searchParams] = useSearchParams();
    const [idLogement] = useState(searchParams.get('_id'));

    // cherche l'id dans le fichier logements.json
    const data = datas.find(element => element.id === idLogement)

    // si l'URL à été modifié manuellement, redirection vers la page d'erreur
    if (!data) return(<ErrorPage />)

    // récupère la liste des équipements
    const equipements = data.equipments.map((element, index) => (
      <li className="description_content" key={"equip-"+index.toString()}>{element}</li>
    ))

    return(
    <div className="logement">
      <Main>
             
            {/* carousel d'images */}
              <Carousel pictures={data.pictures}/>
             
            {/* 1 - affiche le titre, l'emplacement et les tags */}
            <section className="ficheLogement">
                <div className="ficheLogement_content">
                    <h1>{data.title}</h1>
                    <h4>{data.location}</h4>
                    <div className="logement_tags">
                          { data.tags.map((element, index) => {
                                return(<p className="tags" key={"tags-"+index}>{element}</p>)
                          })}
                    </div>
                </div>
            
            
            {/* 2 - Affiche le nom du propriétaireet sa photo */}
            
                <div className="logement_owner">
                    <div className="logement_owner_details">
                      <h3>{data.host.name}</h3>
                      <img src={data.host.picture} alt={data.title} />
                    </div>
             {/* 3 - les étoiles */}
                    <div className="logement_owner_stars">
                    {
                      arrayStars.map(element => {
                          const numberStars = parseInt(data.rating)
                              return(<span key={"star-"+element} className={element <= numberStars ? "span1" : "span2"}>★</span>)
                      })
                    }
                    </div>
                </div>
            </section>
    
              {/* affiche la description et les équipements */}
              <div className="collapseLogement">
                  <Collapse title="Description" content={data.description} />
                  <Collapse title="Equipements" content={equipements} />
              </div>
              
              
      </Main>
             
    
    </div>
            
              

  )
}

export default Logement