import React  from "react";
import NavMain from "./Navmain";
import { isMobile } from "react-device-detect";

export default class Navbar extends React.Component{
    render() {
        const navClass = [
            'nav-info',
            isMobile ? 'navbar-rotate-right-mobile': 'navbar-rotate-right'
        ].join(' ');

        return (
            <nav className={navClass}>
                <NavMain/>
                <div>{isMobile}</div>
            </nav>
        );
    }
}
