import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Me from "./pages/Me";
import Experience from "./pages/Experience";
import ScrollToTop from "./components/ScrollToTop";
import Projects from "./pages/Projects";
import {isMobile} from "react-device-detect";


export default function PC() {
    const appCss = [
        'flex',
        'flex-col',
        'h-full',
        'w-screen',
        'overflow-hidden',
        isMobile ? '' : ''
    ].join(' ');

    return (
        <Router>
            <ScrollToTop/>
            <Home/>
            <Me/>
            <Experience/>
            <Projects/>
            <Routes>
            </Routes>
        </Router>
    );
}
