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
import Skyharvester from "./components/Skyharvester";
import Muni from "./components/Muni";
import NavBar from "./components/NavBar";
import axios from "axios";
import Edit from "./components/Edit"
import GolfData from "./components/GolfData";
import Opportunity from "./components/Opportunity";
import DueToday from "./components/DueToday";

function App() {

  let [loading, setLoading] = useState(true)
  let [golfData, setGolfData] = useState({})
  let [landscapeData, setLandscapeData] = useState({})
  let [muniData, setMuniData] = useState({})
  let [agData, setAgData] = useState({})
  let [skyharvesterData, setSkyharvesterData] = useState({})
  let [masterData, setMasterData] = useState({})

  // update to reflect all data once other industries are populated
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const { data: golfResponse } = await axios.get('https://fathomless-dusk-94922.herokuapp.com/industry/Golf')
        setGolfData(golfResponse)
        const { data: landscapeResponse } = await axios.get('https://fathomless-dusk-94922.herokuapp.com/industry/Landscape')
        setLandscapeData(landscapeResponse)
        const { data: muniResponse } = await axios.get('https://fathomless-dusk-94922.herokuapp.com/industry/Muni')
        setMuniData(muniResponse)
        const { data: agResponse } = await axios.get('https://fathomless-dusk-94922.herokuapp.com/industry/Ag')
        setAgData(agResponse)
        const { data: skyharvesterResponse } = await axios.get('https://fathomless-dusk-94922.herokuapp.com/industry/Skyharvester')
        setSkyharvesterData(skyharvesterResponse)
        const { data: masterResponse } = await axios.get('https://fathomless-dusk-94922.herokuapp.com/dashboard/')
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
      const { data: response } = await axios.get('https://fathomless-dusk-94922.herokuapp.com/Golf/open/')
      setGolfDataOpen(response)
    }
    fetchData()
  }, [])

  let [landscapeDataOpen, setLandscapeDataOpen] = useState({})

  useEffect(() => {
    const fetchData = async () => {
      const { data: response } = await axios.get('https://fathomless-dusk-94922.herokuapp.com/Landscape/open/')
      setLandscapeDataOpen(response)
    }
    fetchData()
  }, [])

  let [muniDataOpen, setMuniDataOpen] = useState({})

  useEffect(() => {
    const fetchData = async () => {
      const { data: response } = await axios.get('https://fathomless-dusk-94922.herokuapp.com/Muni/open/')
      setMuniDataOpen(response)
    }
    fetchData()
  }, [])

  let [agDataOpen, setAgDataOpen] = useState({})

  useEffect(() => {
    const fetchData = async () => {
      const { data: response } = await axios.get('https://fathomless-dusk-94922.herokuapp.com/Ag/open/')
      setAgDataOpen(response)
    }
    fetchData()
  }, [])

  let [skyharvesterDataOpen, setSkyharvesterDataOpen] = useState({})

  useEffect(() => {
    const fetchData = async () => {
      const { data: response } = await axios.get('https://fathomless-dusk-94922.herokuapp.com/Skyharvester/open/')
      setSkyharvesterDataOpen(response)
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
              <Route exact path="/Landscape" element={<Landscape data={landscapeData} />} />
              <Route exact path="/Landscape/Open" element={<Landscape data={landscapeDataOpen} />} />
              <Route exact path="/Muni" element={<Muni data={muniData} />} />
              <Route exact path="/Muni/Open" element={<Muni data={muniDataOpen} />} />
              <Route exact path="/Ag" element={<Ag data={agData} />} />
              <Route exact path="/Ag/Open" element={<Ag data={agDataOpen} />} />
              <Route exact path="/Skyharvester" element={<Skyharvester data={skyharvesterData} />} />
              <Route exact path="/Skyharvester/Open" element={<Skyharvester data={skyharvesterDataOpen} />} />
              <Route exact path="/" element={<Dashboard />} />
              <Route exact path="/Duetoday/:ind" element={<DueToday data={masterData} />} />
              <Route exact path="/Dashboard/Golf/" element={<GolfData data={golfData} />} />
              <Route exact path="/Edit/:id" element={<Edit data={masterData} />} />
              <Route exact path="/Opportunity/:oppNumber" element={<Opportunity data={masterData} />} />
            </Routes >
          </Fragment>
        </div>
      )}
    </div >
  );
}

export default App;

