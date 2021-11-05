import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Me from "./pages/Me";
import Experience from "./pages/Experience";
import ScrollToTop from "./components/ScrollToTop";
import Projects from "./pages/Projects";
import Hobbies from "./pages/Hobbies";


export default function App() {
  return (
    <main className="App flex flex-col h-full w-full overflow-hidden">
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
