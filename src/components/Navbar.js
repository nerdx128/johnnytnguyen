import React, {useState} from "react";
import Navmain from "./Navmain";

export default class Navbar extends React.Component{
    render() {
        return (
            <nav className='nav-info flex flex-col fixed top bg-transparent z-100 navbar-rotate-right'>
                <Navmain/>
            </nav>
        );
    }
}
