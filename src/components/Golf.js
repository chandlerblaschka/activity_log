import react, { useEffect, useState } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import Container from "react-bootstrap/Container";
import Table from 'react-bootstrap/Table'
import axios from "axios";
import { Link } from 'react-router-dom'
import Edit from "./Edit"

function Golf(props) {

    // console.log(props.data)
    let actions = Array.from(props.data)
    let actionList = []

    let buttonText = ''
    let buttonLink = ''

    if (window.location == 'http://localhost:3000/Golf') {
        console.log("Showing All Golf")
        buttonText = 'Show Open'
        buttonLink = '/Golf/Open'
    }

    if (window.location == 'http://localhost:3000/Golf/Open') {
        console.log("Showing Open")
        buttonText = 'Show All'
        buttonLink = '/Golf'
    }

    if (actions) {
        actionList = actions.map((action) => {
            return <tr key={action.id}>
                <td>{action.oppNumber}</td>
                <td>{action.name}</td>
                <td>{action.prodCode}</td>
                <td>{action.request}</td>
                <td>{action.sales}</td>
                <td>{action.projManager}</td>
                <td>{action.engineer}</td>
                <td>{action.reqDate}</td>
                <td>{action.dueDate}</td>
                <td>{action.compDate}</td>
                <td>{action.comments}</td>
                <td>
                    <Link to={`/edit/${action.id}`}>
                        <Button size="sm" type="submit">Edit</Button>
                    </Link>
                </td>
            </tr >
        })
    }

    // let [industry, setIndustry] = useState("")
    let [oppNumber, setOppNumber] = useState("")
    let [name, setName] = useState("")
    let [prodCode, setProdCode] = useState("")
    let [request, setRequest] = useState("")
    let [sales, setSales] = useState("")
    let [projManager, setProjManager] = useState("")
    let [engineer, setEngineer] = useState("")
    let [reqDate, setReqDate] = useState(null)
    let [dueDate, setDueDate] = useState(null)
    let [compDate, setCompDate] = useState(null)
    let [comments, setComments] = useState("")

    const submitPost = async (e) => {
        e.preventDefault();

        axios.post('http://localhost:8000/golf/', {
            industry: "Golf",
            oppNumber: oppNumber,
            name: name,
            prodCode: prodCode,
            request: request,
            sales: sales,
            projManager: projManager,
            engineer: engineer,
            reqDate: reqDate,
            dueDate: dueDate,
            compDate: compDate,
            comments: comments
        })
            .then(res => {
                console.log(res);
                console.log(res.data)
                window.location.reload()
            })
            .catch(error => {
                console.log(error.response)
            })

    }
    return (
        <div>
            <h1>Golf</h1>
            {/* On click change button to all jobs. */}
            {/* <Link to={buttonLink}>
                <Button size="sm" type="submit">{buttonText}</Button>
            </Link> */}
            <form onSubmit={(e) => submitPost(e)}>
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
                            <th>Add</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>
                                <Form.Control size="sm" type="number" onChange={(e) => setOppNumber(e.target.value)} />
                                <Form.Text >
                                </Form.Text>
                            </td>
                            <td>
                                <Form.Control size="sm" type="text" onChange={(e) => setName(e.target.value)} />
                                <Form.Text >
                                </Form.Text>
                            </td>
                            <td>
                                <Form.Select size="sm" onChange={(e) => setProdCode(e.target.value)} >
                                    <option value={"Default"} hidden>PC</option>
                                    <option>AGCP</option>
                                    <option>BMX</option>
                                    <option>CLT</option>
                                    <option>CP</option>
                                    <option>HC</option>
                                    <option>LST</option>
                                    <option>MB</option>
                                    <option>MO</option>
                                    <option>RET</option>
                                    <option>RLT</option>
                                    <option>S3</option>
                                    <option>SH</option>
                                    <option>SST</option>
                                    <option>ST</option>
                                    <option>STP</option>
                                    <option>VC</option>
                                    <option>VMS</option>
                                    <option>VT</option>
                                    <option>VTVQ</option>
                                </Form.Select>
                            </td>
                            <td>
                                <Form.Select size="sm" onChange={(e) => setRequest(e.target.value)}>
                                    <option value={"Default"} hidden>Request</option>
                                    <option>Book Order</option>
                                    <option>Budget $</option>
                                    <option>CSO Dwg</option>
                                    <option>Drawing</option>
                                    <option>Elec Doc's</option>
                                    <option>Other</option>
                                    <option>Quote</option>
                                    <option>Release Mtg</option>
                                    <option>Spec</option>
                                    <option>Sub/O&M</option>
                                </Form.Select>
                            </td>
                            <td>
                                <Form.Select size="sm" onChange={(e) => setSales(e.target.value)}  >
                                    <option value={"Default"} hidden>Salesman</option>
                                    <option>Blaschka</option>
                                    <option>Campbell</option>
                                    <option>Gentile</option>
                                    <option>Green</option>
                                    <option>House</option>
                                    <option>Lakel</option>
                                    <option>JVC</option>
                                    <option>Milton</option>
                                    <option>Mock</option>
                                    <option>Palmerton</option>
                                    <option>Pifer</option>
                                    <option>Salisbury</option>
                                    <option>Slingerland</option>
                                    <option>Sylvester</option>
                                    <option>Thornton</option>
                                </Form.Select>
                            </td>
                            <td>
                                <Form.Select size="sm" onChange={(e) => setProjManager(e.target.value)}>
                                    <option value={"Default"} hidden>Project Manager</option>
                                    <option>AJC</option>
                                    <option>BXR</option>
                                    <option>CSB</option>
                                    <option>DP</option>
                                    <option>DXT</option>
                                    <option>EE</option>
                                    <option>ESP</option>
                                    <option>ESP</option>
                                    <option>EXR</option>
                                    <option>GAG</option>
                                    <option>GDS</option>
                                    <option>GOZ</option>
                                    <option>JWN</option>
                                    <option>IB</option>
                                    <option>MJH</option>
                                    <option>MJW</option>
                                    <option>MTM</option>
                                    <option>NAV</option>
                                    <option>PJB</option>
                                    <option>RJS</option>
                                    <option>RK</option>
                                    <option>SLM</option>
                                    <option>SRS</option>
                                </Form.Select>
                            </td>
                            <td>
                                <Form.Select size="sm" onChange={(e) => setEngineer(e.target.value)}>
                                    <option value={"Default"} hidden>Engineer</option>
                                    <option>AJC</option>
                                    <option>BXR</option>
                                    <option>CSB</option>
                                    <option>DP</option>
                                    <option>DXT</option>
                                    <option>EE</option>
                                    <option>ESP</option>
                                    <option>ESP</option>
                                    <option>EXR</option>
                                    <option>GAG</option>
                                    <option>GDS</option>
                                    <option>GOZ</option>
                                    <option>JWN</option>
                                    <option>IB</option>
                                    <option>MJH</option>
                                    <option>MJW</option>
                                    <option>MTM</option>
                                    <option>NAV</option>
                                    <option>PJB</option>
                                    <option>RJS</option>
                                    <option>RK</option>
                                    <option>SLM</option>
                                    <option>SRS</option>
                                </Form.Select>
                            </td>
                            <td>
                                <Form.Control size="sm" type="date" onChange={(e) => setReqDate(e.target.value)} />
                            </td>
                            <td>
                                <Form.Control size="sm" type="date" onChange={(e) => setDueDate(e.target.value)} />
                            </td>
                            <td>
                                <Form.Control size="sm" type="date" onChange={(e) => setCompDate(e.target.value)} />
                            </td>
                            <td>
                                <Form.Control size="sm" type="text" onChange={(e) => setComments(e.target.value)} />
                                <Form.Text >
                                </Form.Text>
                            </td>
                            <td>
                                <Button size="sm" type="submit"  >Add</Button>
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </form>
            {/* Add Edit function below to update within the industry. */}
            {/* <Edit /> */}
            <br></br>
            <br></br>
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
                        <th>Edit</th>
                    </tr>
                </thead>
                <thead>
                    <tr>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th>
                            <Link to={buttonLink}>
                                <Button size="sm" type="submit">{buttonText}</Button>
                            </Link>
                        </th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {actionList}
                </tbody>
            </Table>
        </div>
    )
}

export default Golf