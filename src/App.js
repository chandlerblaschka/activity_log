import React, { useEffect, useState, Fragment } from "react";
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
import axios from "axios";
import Edit from "./components/Edit"
import GolfData from "./components/GolfData";
import Opportunity from "./components/Opportunity";

function App() {

  let [loading, setLoading] = useState(true)
  let [golfData, setGolfData] = useState({})
  let [masterData, setMasterData] = useState({})

  // update to reflect all data once other industries are populated
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const { data: golfResponse } = await axios.get('http://localhost:8000/industry/Golf')
        setGolfData(golfResponse)
        const { data: masterResponse } = await axios.get('http://localhost:8000/dashboard/')
        setMasterData(masterResponse)
      } catch (error) {
        console.error(error.message)
      }
      setLoading(false);
    }
    fetchData()
  }, [])

  let [golfDataOpen, setGolfDataOpen] = useState({})

  useEffect(() => {
    const fetchData = async () => {
      const { data: response } = await axios.get('http://localhost:8000/Golf/open/')
      setGolfDataOpen(response)
    }
    fetchData()
  }, [])

  return (
    <div className="App">
      {loading && <div>Loading</div>}
      {!loading && (
        <div>
          <NavBar />
          <Fragment>
            <Routes>
              <Route exact path="/Golf" element={<Golf data={golfData} />} />
              <Route exact path="/Golf/Open" element={<Golf data={golfDataOpen} />} />
              {/* <Route exact path="/Landscape" element={<Landscape data={landscapeData} />} />
              <Route exact path="/Landscape/Open" element={<Landscape data={landscapeDataOpen} />} /> */}
              <Route exact path="/Muni" element={<Muni />} />
              <Route exact path="/Ag" element={<Ag />} />
              <Route exact path="/SkyHarvester" element={<SkyHarvester />} />
              <Route exact path="/" element={<Dashboard />} />
              <Route exact path="/Dashboard/Golf/" element={<GolfData data={golfData} />} />
              <Route exact path="/Edit/:id" element={<Edit data={masterData} />} />
              <Route exact path="/Opportunity/:oppNumber" element={<Opportunity data={golfData} />} />
            </Routes >
          </Fragment>
        </div>
      )}
    </div >
  );
}

export default App;

