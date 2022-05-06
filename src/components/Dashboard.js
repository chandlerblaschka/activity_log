// import axios from "axios";
// import MasterList from "./test";
// import AddTaskMaster from "./submitForm";
import React from 'react';
import '../components/dashboard.css'
import DashboardTable from './DashboardTable';
import react, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom'

function Dashboard() {
    // console.log(props.data)
    let [golfToday, setGolfToday] = useState({})

    useEffect(() => {
        const fetchData = async () => {
            const { data: response } = await axios.get('https://fathomless-dusk-94922.herokuapp.com/Golf/today/')
            setGolfToday(response)
        }
        fetchData()
    }, [])

    let golfDueToday = Array.from(golfToday)
    let displayGolfDueToday = golfDueToday.length

    let [golfThisWeek, setGolfThisWeek] = useState({})

    useEffect(() => {
        const fetchData = async () => {
            const { data: response } = await axios.get('https://fathomless-dusk-94922.herokuapp.com/Golf/this_week/')
            setGolfThisWeek(response)
        }
        fetchData()
    }, [])

    let golfDueThisWeek = Array.from(golfThisWeek)
    let displayGolfDueThisWeek = golfDueThisWeek.length

    let [landscapeToday, setLandscapeToday] = useState({})

    useEffect(() => {
        const fetchData = async () => {
            const { data: response } = await axios.get('https://fathomless-dusk-94922.herokuapp.com/Landscape/today/')
            setLandscapeToday(response)
        }
        fetchData()
    }, [])

    let landscapeDueToday = Array.from(landscapeToday)
    let displayLandscapeDueToday = landscapeDueToday.length

    let [landscapeThisWeek, setLandscapeThisWeek] = useState({})

    useEffect(() => {
        const fetchData = async () => {
            const { data: response } = await axios.get('https://fathomless-dusk-94922.herokuapp.com/Landscape/this_week/')
            setLandscapeThisWeek(response)
        }
        fetchData()
    }, [])

    let landscapeDueThisWeek = Array.from(landscapeThisWeek)
    let displayLandscapeDueThisWeek = landscapeDueThisWeek.length

    let [muniToday, setMuniToday] = useState({})

    useEffect(() => {
        const fetchData = async () => {
            const { data: response } = await axios.get('https://fathomless-dusk-94922.herokuapp.com/Muni/today/')
            setMuniToday(response)
        }
        fetchData()
    }, [])

    let muniDueToday = Array.from(muniToday)
    let displayMuniDueToday = muniDueToday.length

    let [muniThisWeek, setMuniThisWeek] = useState({})

    useEffect(() => {
        const fetchData = async () => {
            const { data: response } = await axios.get('https://fathomless-dusk-94922.herokuapp.com/Muni/this_week/')
            setMuniThisWeek(response)
        }
        fetchData()
    }, [])

    let muniDueThisWeek = Array.from(muniThisWeek)
    let displayMuniDueThisWeek = muniDueThisWeek.length

    let [agToday, setAgToday] = useState({})

    useEffect(() => {
        const fetchData = async () => {
            const { data: response } = await axios.get('https://fathomless-dusk-94922.herokuapp.com/Ag/today/')
            setAgToday(response)
        }
        fetchData()
    }, [])

    let agDueToday = Array.from(agToday)
    let displayAgDueToday = agDueToday.length

    let [agThisWeek, setAgThisWeek] = useState({})

    useEffect(() => {
        const fetchData = async () => {
            const { data: response } = await axios.get('https://fathomless-dusk-94922.herokuapp.com/Ag/this_week/')
            setAgThisWeek(response)
        }
        fetchData()
    }, [])

    let agDueThisWeek = Array.from(agThisWeek)
    let displayAgDueThisWeek = agDueThisWeek.length

    let [skyharvesterToday, setSkyharvesterToday] = useState({})

    useEffect(() => {
        const fetchData = async () => {
            const { data: response } = await axios.get('https://fathomless-dusk-94922.herokuapp.com/Skyharvester/today/')
            setSkyharvesterToday(response)
        }
        fetchData()
    }, [])

    let skyharvesterDueToday = Array.from(skyharvesterToday)
    let displaySkyharvesterDueToday = skyharvesterDueToday.length

    let [skyharvesterThisWeek, setSkyharvesterThisWeek] = useState({})

    useEffect(() => {
        const fetchData = async () => {
            const { data: response } = await axios.get('https://fathomless-dusk-94922.herokuapp.com/Skyharvester/this_week/')
            setSkyharvesterThisWeek(response)
        }
        fetchData()
    }, [])

    let skyharvesterDueThisWeek = Array.from(skyharvesterThisWeek)
    let displaySkyharvesterDueThisWeek = skyharvesterDueThisWeek.length


    return (
        <div>
            <h1>Dashboard</h1>
            <div className='top'>
                <div className='Golf industry'>
                    <h3>Golf</h3>
                    <Link to={`/Duetoday/Golf/`}><h4>Due Today: {displayGolfDueToday}</h4></Link>

                    <h4>Due This Week: {displayGolfDueThisWeek}</h4>
                </div>
                <div className='Landscape industry'>
                    <h3>Landscape</h3>
                    <Link to={`/Duetoday/Landscape/`}><h4>Due Today: {displayLandscapeDueToday}</h4></Link>
                    <h4>Due This Week: {displayLandscapeDueThisWeek}</h4>
                </div>
                <div className='Muni industry'>
                    <h3>Muni</h3>
                    <Link to={`/Duetoday/Muni/`}><h4>Due Today: {displayMuniDueToday}</h4></Link>
                    <h4>Due This Week: {displayMuniDueThisWeek}</h4>
                </div>
                <div className='Ag industry'>
                    <h3>Ag</h3>
                    <Link to={`/Duetoday/Ag/`}><h4>Due Today: {displayAgDueToday}</h4></Link>
                    <h4>Due This Week: {displayAgDueThisWeek}</h4>
                </div>
                <div className='SH industry'>
                    <h3>SkyHarvester</h3>
                    <Link to={`/Duetoday/Skyharvester/`}><h4>Due Today: {displaySkyharvesterDueToday}</h4></Link>
                    <h4>Due This Week: {displaySkyharvesterDueThisWeek}</h4>
                </div>
            </div>
            <br></br>
            <br></br>
            <div>
                <DashboardTable />
            </div>
        </div>
    )
}

export default Dashboard