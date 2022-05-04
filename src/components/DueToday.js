import react, { useEffect, useState } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table'
import axios from "axios";
import { useParams } from 'react-router-dom'


function DueToday(props) {

    // pass industry as prop to create DRY code
    const { ind } = useParams()
    let [dueToday, setDueToday] = useState({})

    useEffect(() => {
        const fetchData = async () => {
            const { data: response } = await axios.get(`http://localhost:8000/${ind}/today/`)
            setDueToday(response)
        }
        fetchData()
    }, [])

    let dueTodayArray = Array.from(dueToday)
    let displayDueToday = []

    if (dueTodayArray) {
        displayDueToday = dueTodayArray.map((opp, index) => {
            return < tr key={opp.id} >
                <td >{opp.oppNumber}</td>
                <td >{opp.name}</td>
                <td>{opp.prodCode}</td>
                <td>{opp.request}</td>
                <td>{opp.sales}</td>
                <td>{opp.projManager}</td>
                <td>{opp.engineer}</td>
                <td>{opp.reqDate}</td>
                <td >{opp.dueDate}</td>
                <td>{opp.compDate}</td>
                <td>{opp.comments}</td>
                {/* <td>
                    <Link to={`/edit/${action.id}`}>
                        <Button size="sm" type="submit">Edit</Button>
                    </Link>
                </td> */}
            </ tr>
        })
    }

    return (
        <div>
            <h1>{ind} Due Today</h1>

            <Table striped bordered hover size="sm" style={{ width: "95%", margin: "auto" }}>
                <thead>
                    <tr>
                        <th>Opportunity Number</th>
                        <th>Project Name</th>
                        <th>Product Code</th>
                        <th>Request</th>
                        <th>Salesman</th>
                        <th>Project Manager</th>
                        <th>Engineer</th>
                        <th>Request Date</th>
                        <th>Due Date</th>
                        <th>Date Completed</th>
                        <th>Comments</th>
                        {/* <th>Add</th> */}
                    </tr>
                </thead>
                <tbody>
                    {displayDueToday}
                </tbody>
            </Table>

        </div>
    )
}

export default DueToday