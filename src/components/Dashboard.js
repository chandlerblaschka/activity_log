// import axios from "axios";
// import MasterList from "./test";
// import AddTaskMaster from "./submitForm";
import React from 'react';
import { Container } from 'react-bootstrap';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts'
import GolfData from './GolfData';
import '../components/dashboard.css'
import DashboardTable from './DashboardTable';

function Dashboard(props) {
    console.log(props.data)


    return (
        <div>
            <h1>Dashboard</h1>
            <div className='top'>
                <div className='Golf industry'>
                    <h3>Golf</h3>
                    <GolfData />
                </div>
                <div className='Landscape industry'>
                    <h3>Landscape</h3>
                </div>
                <div className='Muni industry'>
                    <h3>Muni</h3>
                </div>
                <div className='Ag industry'>
                    <h3>Ag</h3>
                </div>
                <div className='SH industry'>
                    <h3>SH</h3>
                </div>
            </div>
            <div>
                <DashboardTable />
            </div>
        </div>
    )
}

export default Dashboard