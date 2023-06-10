
import React from "react";



function NavProps(props) {
    return (
        <li data-aos= "fade-down" data-aos-duration={props.daley}  id="li">
            <a className={props.class} id="links" aria-current="page" href={props.href}>{props.text} {props.ico} </a>
        </li>
    )
}


export default NavProps;