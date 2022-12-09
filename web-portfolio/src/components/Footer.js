import React from "react";
import { Link } from "react-router-dom";
import '../style/Footer.css'

function Footer() {
    return (
      <footer id="footer">
        <Link to='https://www.linkedin.com/in/mirelladourado/' target="_blank"> Linkedin </Link>
        <p> Mirella Dourado </p>
        <Link to='https://github.com/MirellaDourado' target="_blank"> GitHub </Link>
      </footer>
    )

}

export default Footer;
