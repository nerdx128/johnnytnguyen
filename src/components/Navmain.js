import React, {useState} from "react";
import {NavmainDataLeft, NavmainDataRight} from "./Navmain-data";
import { NavLink as NavLinkRouter } from "react-router-dom";
import { Link as NavLinkScroll } from "react-scroll";


export default function Navmain(){
    return (
        <nav id='nav-main-items' className='nav-container flex justify-around p-2 bg-black bg-opacity-50 text-white'>
            <div id='nav-left' className='nav-container flex w-1/2 justify-evenly'>
                {NavmainDataLeft.map((item, index)=>{
                    const id = "nav-info-" + item.id;

                    return (
                        <div key={index} id={id} className={item.cName}>
                            <NavLinkScroll className="navbar-items" spy={true} smooth={true} activeClass="active" to={item.path}>{item.title}</NavLinkScroll>
                        </div>
                    );
                })}
            </div>
            <div className='logo'>
                {/*<LogoImg id='logo' src="" alt="Anti Social Icecream Co"/>*/}
            </div>
            <div id='nav-right' className='nav-container flex w-1/2 justify-evenly'>
                {NavmainDataRight.map((item, index)=>{
                    const id = "nav-info-" + item.id;
                    return (
                        <div key={index} id={id} className={item.cName}>
                            <NavLinkScroll className="navbar-items" spy={true} smooth={true} activeClass="active" to={item.path}>{item.title}</NavLinkScroll>
                        </div>
                    );
                })}
            </div>
        </nav>
    );
}
