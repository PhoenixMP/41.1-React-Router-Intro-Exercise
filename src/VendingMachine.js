import React from "react";

import Pringles from "./Pringles";
import Milk from "./Milk";
import Carrots from "./Carrots";
import MyNavBar from "./Navbar";
import vending from "./images/vending.jpg";
import logo from "./logo.svg";

import { BrowserRouter, Route } from "react-router-dom";

function VendingMachine() {
    return (
        <div>
            <BrowserRouter>
                <Route exact path="/">
                    <img src={vending} alt={logo} />
                    <MyNavBar />
                </Route>
                <Route exact path="/milk">
                    <Milk />
                </Route>
                <Route exact path="/carrot">
                    <Carrots />
                </Route>
                <Route exact path="/pringle">
                    <Pringles />
                </Route>
            </BrowserRouter>

        </div>
    )
}

export default VendingMachine