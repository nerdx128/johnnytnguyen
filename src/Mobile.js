import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Me from "./pages/Me";
import mExperience from "./pages/mExperience";
import mProjects from "./pages/mProjects";
import {isMobile} from "react-device-detect";


export default function Mobile() {
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
            <Home/>
            <Me/>
            <mExperience/>
            <mProjects/>
            <Routes>
            </Routes>
        </Router>
    );
}
