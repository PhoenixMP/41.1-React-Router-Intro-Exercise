
import { NavLink } from "react-router-dom";
import pringle from "./images/pringle.jpg";
import logo from "./logo.svg";

function Pringles() {

    return (
        <div>
            <img src={pringle} alt={logo} />
            <p><NavLink exact to="/">Back</NavLink></p>
        </div>
    )
}

export default Pringles


