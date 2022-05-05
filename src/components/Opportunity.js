import react, { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table'
import axios from "axios";
import { useParams } from 'react-router-dom'

function Opportunity(props) {

    const { oppNumber } = useParams()
    let [oppData, setOppData] = useState({})

    useEffect(() => {
        const fetchData = async () => {
            const { data: response } = await axios.get(`http://localhost:8000/opportunity/${oppNumber}`)
            setOppData(response)
        }
        fetchData()
    }, [])

    let opportunityActivities = Array.from(oppData)
    let opportunityList = []

    if (opportunityActivities) {
        opportunityList = opportunityActivities.map((opp, index) => {
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

    console.log(oppNumber)

    return (
        <div>
            <h1>Opportunity: {oppNumber}</h1>

            <Table responsive striped bordered hover size="sm" style={{ width: "95%", margin: "auto" }}>
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
                    {opportunityList}
                </tbody>
            </Table>

        </div>
    )
}

export default Opportunity