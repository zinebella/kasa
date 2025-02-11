import React from "react";
import "../Styles/Home.css";
import Banner from "../Compenents/Banner";
import Cards from "../Compenents/Cards";


function Home () {
    return (
           <div className="home">
              <Banner/>
              <Cards/>
           </div>
    )
}
export default Home;