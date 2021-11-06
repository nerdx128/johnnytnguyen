import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Me from "./pages/Me";
import Experience from "./pages/Experience";
import ScrollToTop from "./components/ScrollToTop";
import Projects from "./pages/Projects";
import {isMobile} from "react-device-detect";
import SwipeableViews from "react-swipeable-views";

const WrappedComponents = () => {
    const appCss = [
        'flex',
        'flex-col',
        'h-full',
        'w-screen',
        'overflow-hidden'
        // isMobile ? 'pt-35' : ''
    ].join(' ');
    return (
        <div className={appCss}>
            <ScrollToTop/>
            <Home/>
            <Me/>
            <Experience/>
            <Projects/>
        </div>
    )
}

const Swipe = () => {

    return (
        <SwipeableViews slideClassName="flex flex-row w-screen overflow-hidden">
            <Home/>
            <Me/>
            <Experience/>
            <Projects/>
        </SwipeableViews>
    )
}

export default function App() {
    const appCss = [
        'flex',
        'flex-col',
        'h-full',
        'w-screen',
        'overflow-hidden'
        // isMobile ? 'pt-35' : ''
    ].join(' ');

    return (
        <main className={appCss + ' App'}>
            <Router>
                {isMobile ? <Swipe/> : <WrappedComponents/> }
                <Routes>
                </Routes>
            </Router>
        </main>
    );
}
