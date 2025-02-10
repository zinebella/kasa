import React, { useState } from "react";
import chevronGauche from "../Assets/ChevronGauche.png";
import chevronDroit from "../Assets/ChevronDroit.png";
import "../Styles/Carrousel.css";


function Carrousel({pictures}) { //reçois un tableau avec les URL des images

    const [index, setIndex] = useState(0)  // variable de compteur, défini au départ sur 0
    const totalPictures = pictures.length-1 // nombre max d'images

    if (index < 0) setIndex(totalPictures)  // si inférieur à zéro, défini le nombre d'images max
    if (index > totalPictures) setIndex(0)  // si supérieur au max d'images, alors met à zéro
    
    return(
        <section className="carrousel">

            {/* affiche la première image */}
            <div className="imageCarrousel">  
                <img src={pictures[index]} className="ImageSlider" key={"car-"+index} alt={"photo "+index} />
            </div>

            {/* si plus d'une image, alors ce code sera exécuté */}
            {totalPictures > 0 && ( 
                <div> {/* les boutons pour les chevrons droit et gauche, servent pour naviguer au sein du Carousel */}
                    <button onClick={() => setIndex(index - 1)}>{index}
                        <img src={chevronGauche} className="previous_slide" alt={"show previous slider"+index} />
                    </button>
                    <button onClick={() => setIndex(index + 1)}>{index}
                        <img src={chevronDroit} className="next_slide" alt={"show next slider"+index} />
                    </button>
                </div>
            )}
            {totalPictures > 0 && (
                // compteur d'images qui ne s'affiche qu'en version Desktop et lorsqu'il y a plusieurs images
                <div className="Count"> 
                    <p className="SlideCount">
                        {index+1}/{totalPictures+1}
                    </p>
                </div>
            )}
        </section>
    )
}

export default Carrousel