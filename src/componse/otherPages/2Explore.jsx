import React from "react";

import Explores1 from './explorePages/Explore1';
import Explores2 from './explorePages/Explore2';
import Explores3 from './explorePages/Explore3';
import Explores4 from './explorePages/Explore4';
import Lives from './explorePages/LiveAduction5';
import ItemDetails from './explorePages/ItemDetails6';



function Explore1() {
    return (
        <Explores1 />
    )
}

function Explore2() {
    return (
        <Explores2 />
    )
}

function Explore3() {
    return (
        <Explores3 />
    )
}

function Explore4() {
    return (
        <Explores4 />
    )
}

function Live() {
    return (
        <Lives />
    )
}

function Items() {
    return (
        <ItemDetails />
    )

}

export {Explore1, Explore2, Explore3, Explore4, Live, Items}