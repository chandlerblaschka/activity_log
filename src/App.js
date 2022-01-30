import React, { Fragment } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";
import './App.css';
import Dashboard from "./components/Dashboard";
import Ag from "./components/Ag";
import Golf from "./components/Golf";
import Landscape from "./components/Landscape";
import SkyHarvester from "./components/SkyHarvester";
import Muni from "./components/Muni";
import NavBar from "./components/NavBar";


function App() {
  return (
    <div className="App">
      <NavBar />
      <Fragment>
        <Routes>
          <Route exact path="/Golf" element={<Golf />} />
          <Route exact path="/Landscape" element={<Landscape />} />
          <Route exact path="/Muni" element={<Muni />} />
          <Route exact path="/Ag" element={<Ag />} />
          <Route exact path="/SkyHarvester" element={<SkyHarvester />} />
          <Route exact path="/" element={<Dashboard />} />
        </Routes >
      </Fragment>
    </div >
  );
}

export default App;

