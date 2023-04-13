import { NavLink } from "react-router-dom";
import carrot from "./images/carrot.jpg";
import logo from "./logo.svg"

function Carrots() {

    return (
        <div>
            <img src={carrot} alt={logo} />
            <p><NavLink exact to="/">Back</NavLink></p>
        </div>
    )
}

export default Carrots