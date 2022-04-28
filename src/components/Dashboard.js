import react from "react";
import axios from "axios";
import MasterList from "./test";
import AddTaskMaster from "./submitForm";



function Dashboard(props) {

    return (
        <div>
            <h1>Dashboard</h1>
            <MasterList />
            <AddTaskMaster />
        </div>
    )
}

export default Dashboard