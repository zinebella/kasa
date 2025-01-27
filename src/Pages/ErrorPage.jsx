import React, {Fragment} from "react";
import Main from "../Layout/Main";
import { Link } from "react-router-dom";
import "../Styles/ErrorPage.css";


function ErrorPage() {
    return (
		<Fragment>
			<Main>
			
			<div className=" error error_page">
				<span>404</span>
				<h4>La page que vous recherchez n'existe pas.</h4>
				<p><Link to='/'>Retourner sur la page d'accueil</Link></p>
		    </div>
			</Main>
		</Fragment>
	)
}
export default ErrorPage;