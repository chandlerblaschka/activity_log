import react from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import Container from "react-bootstrap/Container";
import Table from 'react-bootstrap/Table'

function Golf() {
    return (
        <div>
            <h1>Golf</h1>
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
                <tbody>
                    <tr>
                        <td>002435</td>
                        <td>Johnathan Landing</td>
                        <td>VT</td>
                        <td>CSO Dwg</td>
                        <td>Green</td>
                        <td>DP</td>
                        <td>DP</td>
                        <td>2/4/2022</td>
                        <td>2/11/2022</td>
                        <td></td>
                        <td>None</td>
                        <td>
                            <Button size="sm" type="submit"  >Edit</Button>
                        </td>
                    </tr>
                    <tr>
                        <td>004531</td>
                        <td>Squires Course</td>
                        <td>VTVQ</td>
                        <td>CSO Dwg</td>
                        <td>JVC</td>
                        <td>MJH</td>
                        <td>MJH</td>
                        <td>2/5/2022</td>
                        <td>2/12/2022</td>
                        <td></td>
                        <td>None</td>
                        <td>
                            <Button size="sm" type="submit"  >Edit</Button>
                        </td>
                    </tr>
                    <tr>
                        <td>002541</td>
                        <td>Peter's Hill</td>
                        <td>HC</td>
                        <td>Release Mtg</td>
                        <td>Salisbury</td>
                        <td>DP</td>
                        <td>MTM</td>
                        <td>2/6/2022</td>
                        <td>2/8/2022</td>
                        <td></td>
                        <td>None</td>
                        <td>
                            <Button size="sm" type="submit"  >Edit</Button>
                        </td>
                    </tr>
                </tbody>
            </Table>
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
                        <th>Add</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <Form.Control size="sm" type="number" />
                            <Form.Text >
                            </Form.Text>
                        </td>
                        <td>
                            <Form.Control size="sm" type="text" />
                            <Form.Text >
                            </Form.Text>
                        </td>
                        <td>
                            <Form.Select size="sm" >
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
                            <Form.Select size="sm">
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
                            <Form.Select size="sm" >
                                <option>Salesman</option>
                            </Form.Select>
                        </td>
                        <td>
                            <Form.Select size="sm" >
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
                            <Form.Select size="sm" >
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
                            <Form.Control size="sm" type="date" />
                        </td>
                        <td>
                            <Form.Control size="sm" type="date" />
                        </td>
                        <td>
                            <Form.Control size="sm" type="date" />
                        </td>
                        <td>
                            <Form.Control size="sm" type="text" />
                            <Form.Text >
                            </Form.Text>
                        </td>
                        <td>
                            <Button size="sm" type="submit"  >Add</Button>
                        </td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}

export default Golf