import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Navbar from "./components/Navbar";
import Me from "./pages/Me";
import Resume from "./pages/Resume";
import ScrollToTop from "./components/ScrollToTop";
import Projects from "./pages/Projects";
import Hobbies from "./pages/Hobbies";


export default function App() {
  return (
    <div className="App flex flex-col h-full w-full">
      <Router>
        <ScrollToTop/>
        <Navbar/>
          <Me/>
          <Resume/>
          <Projects/>
          <Hobbies/>
        <Switch>
        </Switch>
      </Router>
    </div>
  );
}
