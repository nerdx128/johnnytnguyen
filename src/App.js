import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./pages/Home";
import Me from "./pages/Me";
import Experience from "./pages/Experience";
import ScrollToTop from "./components/ScrollToTop";
import Projects from "./pages/Projects";
import {isMobile} from "react-device-detect";

export default function App() {
    const appCss = [
        'App',
        'flex',
        'flex-col',
        'h-full',
        'w-screen',
        'overflow-hidden',
        isMobile ? 'pt-35' : ''
    ].join(' ');

    return (
        <main className={appCss}>
            <Router>
                <ScrollToTop/>
                <Home/>
                <Me/>
                <Experience/>
                <Projects/>
                <Switch>
                </Switch>
            </Router>
        </main>
    );
}
