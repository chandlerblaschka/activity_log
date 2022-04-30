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

function App() {

  let [loading, setLoading] = useState(true)
  let [data, setData] = useState({})

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const { data: response } = await axios.get('http://localhost:8000/golf/')
        setData(response)
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
      const { data: response } = await axios.get('http://localhost:8000/golf/open/')
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
              <Route exact path="/Golf" element={<Golf data={data} />} />
              <Route exact path="/Golf/Open" element={<Golf data={golfDataOpen} />} />
              <Route exact path="/Landscape" element={<Landscape />} />
              <Route exact path="/Muni" element={<Muni />} />
              <Route exact path="/Ag" element={<Ag />} />
              <Route exact path="/SkyHarvester" element={<SkyHarvester />} />
              <Route exact path="/" element={<Dashboard />} />
              <Route exact path="/Edit/:id" element={<Edit data={data} />} />
            </Routes >
          </Fragment>
        </div>
      )}
    </div >
  );
}

export default App;

