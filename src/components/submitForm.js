import React, { useState } from "react";
import axios from "axios";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import Container from "react-bootstrap/Container";
import Table from 'react-bootstrap/Table'

const AddTaskMaster = () => {

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

    // state = {
    //     industry: '',
    //     oppNumber: '',
    //     name: '',
    //     prodCode: '',
    //     request: '',
    //     sales: '',
    //     projManager: '',
    //     engineer: '',
    //     reqDate: '',
    //     dueDate: '',
    //     compDate: '',
    //     comments: ''
    // }

    // handleChange = event => {
    //     this.setState({
    //         industry: event.target.value,
    //         oppNumber: event.target.value,
    //         name: event.target.value,
    //         prodCode: event.target.value,
    //         request: event.target.value,
    //         sales: event.target.value,
    //         projManager: event.target.value,
    //         engineer: event.target.value,
    //         reqDate: event.target.value,
    //         dueDate: event.target.value,
    //         compDate: event.target.value,
    //         comments: event.target.value
    //     })
    // }

    const submitPost = async (e) => {
        e.preventDefault();

        axios.post('http://localhost:8000/golf/', {
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
            })
            .catch(error => {
                console.log(error.response)
            })

    }
    return (
        <div>
            <form onSubmit={(e) => submitPost(e)}>
                <label>
                    Industry:
                    <input type="text" name="industry" onChange={(e) => setIndustry(e.target.value)} />
                </label>
                <label>
                    Opportunity Number:
                    <input type="text" name="oppNumber" onChange={(e) => setOppNumber(e.target.value)} />
                </label>
                <label>
                    Name:
                    <input type="text" name="name" onChange={(e) => setName(e.target.value)} />
                </label>
                <label>
                    Product Code:
                    <input type="text" name="prodCode" onChange={(e) => setProdCode(e.target.value)} />
                </label>
                <label>
                    Request:
                    <input type="text" name="request" onChange={(e) => setRequest(e.target.value)} />
                </label>
                <label>
                    Salesmen:
                    <input type="text" name="sales" onChange={(e) => setSales(e.target.value)} />
                </label>
                <label>
                    Project Manager:
                    <input type="text" name="projManager" onChange={(e) => setProjManager(e.target.value)} />
                </label>
                <label>
                    Engineer:
                    <input type="text" name="engineer" onChange={(e) => setEngineer(e.target.value)} />
                </label>
                <label>
                    Request Date:
                    <input type="date" name="reqDate" onChange={(e) => setReqDate(e.target.value)} />
                </label>
                <label>
                    Due Date:
                    <input type="date" name="dueDate" onChange={(e) => setDueDate(e.target.value)} />
                </label>
                <label>
                    Completion Date:
                    <input type="date" name="compDate" onChange={(e) => setCompDate(e.target.value)} />
                </label>
                <label>
                    Comments:
                    <input type="text" name="comments" onChange={(e) => setComments(e.target.value)} />
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
    )

}

export default AddTaskMaster