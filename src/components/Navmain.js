import React from "react";
import {NavmainData} from "./Navmain-data";
import { Link as NavLinkScroll } from "react-scroll";


export default function NavMain(){
    return (
        <nav id='nav-main-items' className='nav-container flex h-9 justify-around bg-black bg-opacity-50 text-white'>
            {NavmainData.map((item, index) => {
                return (
                    <NavLinkScroll key={index} className="navbar-items" spy={true} smooth={true} duration={500} activeClass="active" to={item.path}>{item.title}</NavLinkScroll>
                );
            })}
        </nav>
    );
}
