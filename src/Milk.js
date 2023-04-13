import { NavLink } from "react-router-dom";

import milk from "./images/milk.jpg";
import logo from "./logo.svg"


function Milk() {

    return (
        <div>
            <img src={milk} alt={logo} />
            <p><NavLink exact to="/">Back</NavLink></p>
        </div>
    )
}

export default Milk

