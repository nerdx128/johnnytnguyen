import React, {useState} from "react";
import {NavmainDataLeft, NavmainDataRight} from "./Navmain-data";
import { Link as NavLinkScroll } from "react-scroll";


export default function Navmain(){
    return (
        <nav id='nav-main-items' className='nav-container flex h-9 justify-around bg-black bg-opacity-50 text-white'>
            {NavmainDataLeft.map((item, index)=>{
                const id = "nav-info-" + item.id;
                return (
                    <NavLinkScroll className="navbar-items" spy={true} smooth={true} duration={500} activeClass="active" to={item.path}>{item.title}</NavLinkScroll>
                );
            })}
        </nav>
    );
}
