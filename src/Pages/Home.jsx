import React from "react";
import "../Styles/Home.css";
import Main from "../Layout/Main";
import Banner from "../Compenents/Banner";
import Cards from "../Compenents/Cards";




function Home () {
    
    return (
           <div className="home">
              <Main/>
              <Banner/>
              <Cards/>
           </div>
           
           
        
    )
}
export default Home;