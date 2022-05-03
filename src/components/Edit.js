import react, { useEffect, useState } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table'
import axios from "axios";
import { useParams } from 'react-router-dom'

function Edit() {

    const { id } = useParams()
    let [data, setData] = useState({})
    let [industry, setIndustry] = useState("")
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
    let [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
            const { data: response } = await axios.get(`http://localhost:8000/edit/${id}`)
            setData(response)
            setIndustry(response.industry)
            setOppNumber(response.oppNumber)
            setName(response.name)
            setProdCode(response.prodCode)
            setRequest(response.request)
            setSales(response.sales)
            setProjManager(response.projManager)
            setEngineer(response.engineer)
            setReqDate(response.reqDate)
            setDueDate(response.dueDate)
            setCompDate(response.compDate)
            setComments(response.comments)
        }
        fetchData()


    }, [id])

    console.log(data)
    console.log(industry)

    const submitPost = async (e) => {
        e.preventDefault();

        axios.put(`http://localhost:8000/edit/${id}`, {
            industry: industry,
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
                window.location = `/${industry}`
            })
            .catch(error => {
                console.log(error.response)
            })

    }

    const deleteAction = async (id) => {
        await axios.delete(`http://localhost:8000/edit/${id}`)
        window.location = `/${industry}`
    }

    return (
        <div>
            <h1>Edit Action Item</h1>
            <form onSubmit={(e) => submitPost(e)}>
                <Table striped bordered hover size="sm" style={{ width: "95%", margin: "auto" }}>
                    <thead>
                        <tr>
                            <th>Industry</th>
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
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>
                                <Form.Select size="sm" onChange={(e) => setIndustry(e.target.value)} value={industry}  >
                                    <option value="Golf">Golf</option>
                                    <option value="Landscape">Landscape</option>
                                    <option value="Muni">Muni</option>
                                    <option value="Ag">Ag</option>
                                    <option value="SkyHarvester">SkyHarvester</option>
                                </Form.Select>
                            </td>
                            <td>
                                <Form.Control size="sm" type="number" onChange={(e) => setOppNumber(e.target.value)} value={oppNumber} />
                                <Form.Text >
                                </Form.Text>
                            </td>
                            <td>
                                <Form.Control required size="sm" type="text" onChange={(e) => setName(e.target.value)} value={name} />
                                <Form.Text >
                                </Form.Text>
                            </td>
                            <td>
                                <Form.Select required size="sm" onChange={(e) => setProdCode(e.target.value)} value={prodCode}>
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
                                <Form.Select required size="sm" onChange={(e) => setRequest(e.target.value)} value={request}>
                                    <option>Book Order</option>
                                    <option>Budget</option>
                                    <option>Change Order</option>
                                    <option>CSO Dwg</option>
                                    <option>Drawing</option>
                                    <option>Elec Docs</option>
                                    <option>Other</option>
                                    <option>Quote</option>
                                    <option>Release Mtg</option>
                                    <option>Spec</option>
                                    <option>Sub OM</option>
                                </Form.Select>
                            </td>
                            <td>
                                <Form.Select required size="sm" onChange={(e) => setSales(e.target.value)} value={sales}>
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
                                <Form.Select required size="sm" onChange={(e) => setProjManager(e.target.value)} value={projManager}>
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
                                <Form.Select required size="sm" onChange={(e) => setEngineer(e.target.value)} value={engineer}>
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
                                <Form.Control size="sm" type="date" onChange={(e) => setReqDate(e.target.value)} value={reqDate} />
                            </td>
                            <td>
                                <Form.Control size="sm" type="date" onChange={(e) => setDueDate(e.target.value)} value={dueDate} />
                            </td>
                            <td>
                                <Form.Control size="sm" type="date" onChange={(e) => setCompDate(e.target.value)} value={compDate} />
                            </td>
                            <td>
                                <Form.Control size="sm" type="text" onChange={(e) => setComments(e.target.value)} value={comments} />
                                <Form.Text >
                                </Form.Text>
                            </td>
                            <td>
                                <Button size="sm" type="submit">Update</Button>
                            </td>
                            <td>
                                <Button size="sm" variant="danger" onClick={() => deleteAction(data.id)}>Delete</Button>
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </form>
        </div>
    )
}
export default Edit