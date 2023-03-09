import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function Nav() {
    return(
        <nav>
            <ul id="navBar">
                <li><Link to="/">Home 🏠</Link></li>
                <li><Link to="/">Contact 📞</Link></li>
                <li><Link to="/book">Book Table 📅</Link></li>
            </ul>
        </nav>
    );
}

export default Nav;