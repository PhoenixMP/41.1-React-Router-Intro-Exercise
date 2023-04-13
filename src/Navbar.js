import React from "react";
import { NavLink } from "react-router-dom";

function MyNavBar() {
    return (
        <nav className="MyNavBarClass">
            <p> <NavLink exact to="/milk">Milk</NavLink></p>
            <p> <NavLink exact to="/carrot">Carrots</NavLink></p>
            <p> <NavLink exact to="/pringle">Pringles</NavLink></p>
        </nav>
    );
}

export default MyNavBar