import React from "react";
import { NavmainData } from "./Navmain-data";
import { Link as NavLinkScroll } from "react-scroll";
import {isMobile} from "react-device-detect";


export default function NavMain(){
    const data = isMobile ? NavmainData.slice(0).reverse() : NavmainData;
    return (
        <nav id='nav-main-items' className='nav-container flex h-9 justify-around bg-black bg-opacity-50 text-white'>
            {data.map((item, index) => {
                return (
                    <NavLinkScroll key={index} className="navbar-items" spy={true} smooth={true} duration={500} activeClass="active" to={item.path}>{item.title}</NavLinkScroll>
                );
            })}
        </nav>
    );
}
