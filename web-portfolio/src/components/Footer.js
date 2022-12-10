import React from "react";
import { Link } from "react-router-dom";
import '../style/Footer.css'

function Footer() {
    return (
      <footer id="footer">
        <Link to={{ pathname: 'https://www.linkedin.com/in/mirelladourado/' }} target="_blank"> Linkedin </Link>
        <p> Mirella Dourado </p>
        <Link to={{ pathname:'https://github.com/MirellaDourado' }} target="_blank"> GitHub </Link>
      </footer>
    )

}

export default Footer;
