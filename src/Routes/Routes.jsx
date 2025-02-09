import React from "react";
import { createBrowserRouter, Outlet } from "react-router-dom";
import Home from "../Pages/Home";
import Logement from "../Pages/Logement";
import About from"../Pages/About";
import ErrorPage from "../Pages/ErrorPage";
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";
import Main from "../Layout/Main";

//Definition du composant fonctionnel Layout 
const Layout = () => {
  return <>
          <Main>
          <Header/>
                <Outlet/>
          <Footer/>
          </Main>
         
  </>
};


  export const router = createBrowserRouter ([
    {
      element:<Layout/>,
      // Toutes les routes non trouvées destination => ErrorPage 
      errorElement:<ErrorPage/>,
      children:[
        {
          path:"/",
          element:<Home/>
        },
        {
          path:"/logement",
          element:<Logement/>
        },
        {
          path:"/about",
          element:<About/>
        }
      ]
    }
])

