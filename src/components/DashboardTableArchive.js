import { useEffect, useState } from "react";
import axios from "axios";
import Table from 'react-bootstrap/Table'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import '../components/dashboard.css'


function DashboardTableArchive() {

    let [year, setYear] = useState("")
    let [month, setMonth] = useState("")
    let [industry, setIndustry] = useState("")
    let [request, setRequest] = useState("")
    let [employee, setEmployee] = useState("")
    let [januaryBookOrder, setJanuaryBookOrder] = useState({})
    let [januaryBudget, setJanuaryBudget] = useState({})
    let [januaryChangeOrder, setJanuaryChangeOrder] = useState({})
    let [januaryCso, setJanuaryCso] = useState({})
    let [januaryDrawing, setJanuaryDrawing] = useState({})
    let [januaryElec, setJanuaryElec] = useState({})
    let [januaryOther, setJanuaryOther] = useState({})
    let [januaryQuote, setJanuaryQuote] = useState({})
    let [januaryRelease, setJanuaryRelease] = useState({})
    let [januarySpec, setJanuarySpec] = useState({})
    let [januarySubmittal, setJanuarySubmittal] = useState({})
    let [februaryBookOrder, setFebruaryBookOrder] = useState({})
    let [februaryBudget, setFebruaryBudget] = useState({})
    let [februaryChangeOrder, setFebruaryChangeOrder] = useState({})
    let [februaryCso, setFebruaryCso] = useState({})
    let [februaryDrawing, setFebruaryDrawing] = useState({})
    let [februaryElec, setFebruaryElec] = useState({})
    let [februaryOther, setFebruaryOther] = useState({})
    let [februaryQuote, setFebruaryQuote] = useState({})
    let [februaryRelease, setFebruaryRelease] = useState({})
    let [februarySpec, setFebruarySpec] = useState({})
    let [februarySubmittal, setFebruarySubmittal] = useState({})
    let [marchBookOrder, setMarchBookOrder] = useState({})
    let [marchBudget, setMarchBudget] = useState({})
    let [marchChangeOrder, setMarchChangeOrder] = useState({})
    let [marchCso, setMarchCso] = useState({})
    let [marchDrawing, setMarchDrawing] = useState({})
    let [marchElec, setMarchElec] = useState({})
    let [marchOther, setMarchOther] = useState({})
    let [marchQuote, setMarchQuote] = useState({})
    let [marchRelease, setMarchRelease] = useState({})
    let [marchSpec, setMarchSpec] = useState({})
    let [marchSubmittal, setMarchSubmittal] = useState({})
    let [aprilBookOrder, setAprilBookOrder] = useState({})
    let [aprilBudget, setAprilBudget] = useState({})
    let [aprilChangeOrder, setAprilChangeOrder] = useState({})
    let [aprilCso, setAprilCso] = useState({})
    let [aprilDrawing, setAprilDrawing] = useState({})
    let [aprilElec, setAprilElec] = useState({})
    let [aprilOther, setAprilOther] = useState({})
    let [aprilQuote, setAprilQuote] = useState({})
    let [aprilRelease, setAprilRelease] = useState({})
    let [aprilSpec, setAprilSpec] = useState({})
    let [aprilSubmittal, setAprilSubmittal] = useState({})




    const FindData = async (year, month, industry, request, employee) => {
        const fetchJanuaryBookData = async () => {
            const { data: response } = await axios.get(`http://localhost:8000/dashboard/${year}/01/${industry}/Book-Order/${employee}`)
            setJanuaryBookOrder(response)
        }
        const fetchJanuaryBudgetData = async () => {
            const { data: response } = await axios.get(`http://localhost:8000/dashboard/${year}/01/${industry}/Budget/${employee}`)
            setJanuaryBudget(response)
        }
        const fetchJanuaryChangeOrderData = async () => {
            const { data: response } = await axios.get(`http://localhost:8000/dashboard/${year}/01/${industry}/Change-Order/${employee}`)
            setJanuaryChangeOrder(response)
        }
        const fetchJanuaryCsoData = async () => {
            const { data: response } = await axios.get(`http://localhost:8000/dashboard/${year}/01/${industry}/CSO-Dwg/${employee}`)
            setJanuaryCso(response)
        }
        const fetchJanuaryDrawingData = async () => {
            const { data: response } = await axios.get(`http://localhost:8000/dashboard/${year}/01/${industry}/Drawing/${employee}`)
            setJanuaryDrawing(response)
        }
        const fetchJanuaryElecData = async () => {
            const { data: response } = await axios.get(`http://localhost:8000/dashboard/${year}/01/${industry}/Elec-Docs/${employee}`)
            setJanuaryElec(response)
        }
        const fetchJanuaryOtherData = async () => {
            const { data: response } = await axios.get(`http://localhost:8000/dashboard/${year}/01/${industry}/Other/${employee}`)
            setJanuaryOther(response)
        }
        const fetchJanuaryQuoteData = async () => {
            const { data: response } = await axios.get(`http://localhost:8000/dashboard/${year}/01/${industry}/Quote/${employee}`)
            setJanuaryQuote(response)
        }
        const fetchJanuaryReleaseData = async () => {
            const { data: response } = await axios.get(`http://localhost:8000/dashboard/${year}/01/${industry}/Release-Mtg/${employee}`)
            setJanuaryRelease(response)
        }
        const fetchJanuarySpecData = async () => {
            const { data: response } = await axios.get(`http://localhost:8000/dashboard/${year}/01/${industry}/Spec/${employee}`)
            setJanuarySpec(response)
        }
        const fetchJanuarySubmittalData = async () => {
            const { data: response } = await axios.get(`http://localhost:8000/dashboard/${year}/01/${industry}/Sub-OM/${employee}`)
            setJanuarySubmittal(response)
        }
        const fetchFebruaryBookData = async () => {
            const { data: response } = await axios.get(`http://localhost:8000/dashboard/${year}/02/${industry}/Book-Order/${employee}`)
            setFebruaryBookOrder(response)
        }
        const fetchFebruaryBudgetData = async () => {
            const { data: response } = await axios.get(`http://localhost:8000/dashboard/${year}/02/${industry}/Budget/${employee}`)
            setFebruaryBudget(response)
        }
        const fetchFebruaryChangeOrderData = async () => {
            const { data: response } = await axios.get(`http://localhost:8000/dashboard/${year}/02/${industry}/Change-Order/${employee}`)
            setFebruaryChangeOrder(response)
        }
        const fetchFebruaryCsoData = async () => {
            const { data: response } = await axios.get(`http://localhost:8000/dashboard/${year}/02/${industry}/CSO-Dwg/${employee}`)
            setFebruaryCso(response)
        }
        const fetchFebruaryDrawingData = async () => {
            const { data: response } = await axios.get(`http://localhost:8000/dashboard/${year}/02/${industry}/Drawing/${employee}`)
            setFebruaryDrawing(response)
        }
        const fetchFebruaryElecData = async () => {
            const { data: response } = await axios.get(`http://localhost:8000/dashboard/${year}/02/${industry}/Elec-Docs/${employee}`)
            setFebruaryElec(response)
        }
        const fetchFebruaryOtherData = async () => {
            const { data: response } = await axios.get(`http://localhost:8000/dashboard/${year}/02/${industry}/Other/${employee}`)
            setFebruaryOther(response)
        }
        const fetchFebruaryQuoteData = async () => {
            const { data: response } = await axios.get(`http://localhost:8000/dashboard/${year}/02/${industry}/Quote/${employee}`)
            setFebruaryQuote(response)
        }
        const fetchFebruaryReleaseData = async () => {
            const { data: response } = await axios.get(`http://localhost:8000/dashboard/${year}/02/${industry}/Release-Mtg/${employee}`)
            setFebruaryRelease(response)
        }
        const fetchFebruarySpecData = async () => {
            const { data: response } = await axios.get(`http://localhost:8000/dashboard/${year}/02/${industry}/Spec/${employee}`)
            setFebruarySpec(response)
        }
        const fetchFebruarySubmittalData = async () => {
            const { data: response } = await axios.get(`http://localhost:8000/dashboard/${year}/02/${industry}/Sub-OM/${employee}`)
            setFebruarySubmittal(response)
        }
        const fetchMarchBookData = async () => {
            const { data: response } = await axios.get(`http://localhost:8000/dashboard/${year}/03/${industry}/Book-Order/${employee}`)
            setMarchBookOrder(response)
        }
        const fetchMarchBudgetData = async () => {
            const { data: response } = await axios.get(`http://localhost:8000/dashboard/${year}/03/${industry}/Budget/${employee}`)
            setMarchBudget(response)
        }
        const fetchMarchChangeOrderData = async () => {
            const { data: response } = await axios.get(`http://localhost:8000/dashboard/${year}/03/${industry}/Change-Order/${employee}`)
            setMarchChangeOrder(response)
        }
        const fetchMarchCsoData = async () => {
            const { data: response } = await axios.get(`http://localhost:8000/dashboard/${year}/03/${industry}/CSO-Dwg/${employee}`)
            setMarchCso(response)
        }
        const fetchMarchDrawingData = async () => {
            const { data: response } = await axios.get(`http://localhost:8000/dashboard/${year}/03/${industry}/Drawing/${employee}`)
            setMarchDrawing(response)
        }
        const fetchMarchElecData = async () => {
            const { data: response } = await axios.get(`http://localhost:8000/dashboard/${year}/03/${industry}/Elec-Docs/${employee}`)
            setMarchElec(response)
        }
        const fetchMarchOtherData = async () => {
            const { data: response } = await axios.get(`http://localhost:8000/dashboard/${year}/03/${industry}/Other/${employee}`)
            setMarchOther(response)
        }
        const fetchMarchQuoteData = async () => {
            const { data: response } = await axios.get(`http://localhost:8000/dashboard/${year}/03/${industry}/Quote/${employee}`)
            setMarchQuote(response)
        }
        const fetchMarchReleaseData = async () => {
            const { data: response } = await axios.get(`http://localhost:8000/dashboard/${year}/03/${industry}/Release-Mtg/${employee}`)
            setMarchRelease(response)
        }
        const fetchMarchSpecData = async () => {
            const { data: response } = await axios.get(`http://localhost:8000/dashboard/${year}/03/${industry}/Spec/${employee}`)
            setMarchSpec(response)
        }
        const fetchMarchSubmittalData = async () => {
            const { data: response } = await axios.get(`http://localhost:8000/dashboard/${year}/03/${industry}/Sub-OM/${employee}`)
            setMarchSubmittal(response)
        }
        const fetchAprilBookData = async () => {
            const { data: response } = await axios.get(`http://localhost:8000/dashboard/${year}/04/${industry}/Book-Order/${employee}`)
            setAprilBookOrder(response)
        }
        const fetchAprilBudgetData = async () => {
            const { data: response } = await axios.get(`http://localhost:8000/dashboard/${year}/04/${industry}/Budget/${employee}`)
            setAprilBudget(response)
        }
        const fetchAprilChangeOrderData = async () => {
            const { data: response } = await axios.get(`http://localhost:8000/dashboard/${year}/04/${industry}/Change-Order/${employee}`)
            setAprilChangeOrder(response)
        }
        const fetchAprilCsoData = async () => {
            const { data: response } = await axios.get(`http://localhost:8000/dashboard/${year}/04/${industry}/CSO-Dwg/${employee}`)
            setAprilCso(response)
        }
        const fetchAprilDrawingData = async () => {
            const { data: response } = await axios.get(`http://localhost:8000/dashboard/${year}/04/${industry}/Drawing/${employee}`)
            setAprilDrawing(response)
        }
        const fetchAprilElecData = async () => {
            const { data: response } = await axios.get(`http://localhost:8000/dashboard/${year}/04/${industry}/Elec-Docs/${employee}`)
            setAprilElec(response)
        }
        const fetchAprilOtherData = async () => {
            const { data: response } = await axios.get(`http://localhost:8000/dashboard/${year}/04/${industry}/Other/${employee}`)
            setAprilOther(response)
        }
        const fetchAprilQuoteData = async () => {
            const { data: response } = await axios.get(`http://localhost:8000/dashboard/${year}/04/${industry}/Quote/${employee}`)
            setAprilQuote(response)
        }
        const fetchAprilReleaseData = async () => {
            const { data: response } = await axios.get(`http://localhost:8000/dashboard/${year}/04/${industry}/Release-Mtg/${employee}`)
            setAprilRelease(response)
        }
        const fetchAprilSpecData = async () => {
            const { data: response } = await axios.get(`http://localhost:8000/dashboard/${year}/04/${industry}/Spec/${employee}`)
            setAprilSpec(response)
        }
        const fetchAprilSubmittalData = async () => {
            const { data: response } = await axios.get(`http://localhost:8000/dashboard/${year}/04/${industry}/Sub-OM/${employee}`)
            setAprilSubmittal(response)
        }



        fetchJanuaryBookData()
        fetchJanuaryBudgetData()
        fetchJanuaryChangeOrderData()
        fetchJanuaryCsoData()
        fetchJanuaryDrawingData()
        fetchJanuaryElecData()
        fetchJanuaryOtherData()
        fetchJanuaryQuoteData()
        fetchJanuaryReleaseData()
        fetchJanuarySpecData()
        fetchJanuarySubmittalData()
        fetchFebruaryBookData()
        fetchFebruaryBudgetData()
        fetchFebruaryChangeOrderData()
        fetchFebruaryCsoData()
        fetchFebruaryDrawingData()
        fetchFebruaryElecData()
        fetchFebruaryOtherData()
        fetchFebruaryQuoteData()
        fetchFebruaryReleaseData()
        fetchFebruarySpecData()
        fetchFebruarySubmittalData()
        fetchMarchBookData()
        fetchMarchBudgetData()
        fetchMarchChangeOrderData()
        fetchMarchCsoData()
        fetchMarchDrawingData()
        fetchMarchElecData()
        fetchMarchOtherData()
        fetchMarchQuoteData()
        fetchMarchReleaseData()
        fetchMarchSpecData()
        fetchMarchSubmittalData()
        fetchAprilBookData()
        fetchAprilBudgetData()
        fetchAprilChangeOrderData()
        fetchAprilCsoData()
        fetchAprilDrawingData()
        fetchAprilElecData()
        fetchAprilOtherData()
        fetchAprilQuoteData()
        fetchAprilReleaseData()
        fetchAprilSpecData()
        fetchAprilSubmittalData()


    }


    let januaryBookedOrders = Array.from(januaryBookOrder)
    let januaryBookedOrderTotals = januaryBookedOrders.length
    let januaryBudgetRequest = Array.from(januaryBudget)
    let januaryBudgetRequestTotals = januaryBudgetRequest.length
    let januaryChangeOrders = Array.from(januaryChangeOrder)
    let januaryChangeOrderTotals = januaryChangeOrders.length
    let januaryCsoRequests = Array.from(januaryCso)
    let januaryCsoTotals = januaryCsoRequests.length
    let januaryDrawingRequests = Array.from(januaryDrawing)
    let januaryDrawingTotals = januaryDrawingRequests.length
    let januaryElecRequests = Array.from(januaryElec)
    let januaryElecTotals = januaryElecRequests.length
    let januaryOtherRequests = Array.from(januaryOther)
    let januaryOtherTotals = januaryOtherRequests.length
    let januaryQuoteRequests = Array.from(januaryQuote)
    let januaryQuoteTotals = januaryQuoteRequests.length
    let januaryReleases = Array.from(januaryRelease)
    let januaryReleaseTotals = januaryReleases.length
    let januarySpecRequests = Array.from(januarySpec)
    let januarySpecTotals = januarySpecRequests.length
    let januarySubmittalRequests = Array.from(januarySubmittal)
    let januarySubmittalTotals = januarySubmittalRequests.length
    let februaryBookedOrders = Array.from(februaryBookOrder)
    let februaryBookedOrderTotals = februaryBookedOrders.length
    let februaryBudgetRequest = Array.from(februaryBudget)
    let februaryBudgetRequestTotals = februaryBudgetRequest.length
    let februaryChangeOrders = Array.from(februaryChangeOrder)
    let februaryChangeOrderTotals = februaryChangeOrders.length
    let februaryCsoRequests = Array.from(februaryCso)
    let februaryCsoTotals = februaryCsoRequests.length
    let februaryDrawingRequests = Array.from(februaryDrawing)
    let februaryDrawingTotals = februaryDrawingRequests.length
    let februaryElecRequests = Array.from(februaryElec)
    let februaryElecTotals = februaryElecRequests.length
    let februaryOtherRequests = Array.from(februaryOther)
    let februaryOtherTotals = februaryOtherRequests.length
    let februaryQuoteRequests = Array.from(februaryQuote)
    let februaryQuoteTotals = februaryQuoteRequests.length
    let februaryReleases = Array.from(februaryRelease)
    let februaryReleaseTotals = februaryReleases.length
    let februarySpecRequests = Array.from(februarySpec)
    let februarySpecTotals = februarySpecRequests.length
    let februarySubmittalRequests = Array.from(februarySubmittal)
    let februarySubmittalTotals = februarySubmittalRequests.length
    let marchBookedOrders = Array.from(marchBookOrder)
    let marchBookedOrderTotals = marchBookedOrders.length
    let marchBudgetRequest = Array.from(marchBudget)
    let marchBudgetRequestTotals = marchBudgetRequest.length
    let marchChangeOrders = Array.from(marchChangeOrder)
    let marchChangeOrderTotals = marchChangeOrders.length
    let marchCsoRequests = Array.from(marchCso)
    let marchCsoTotals = marchCsoRequests.length
    let marchDrawingRequests = Array.from(marchDrawing)
    let marchDrawingTotals = marchDrawingRequests.length
    let marchElecRequests = Array.from(marchElec)
    let marchElecTotals = marchElecRequests.length
    let marchOtherRequests = Array.from(marchOther)
    let marchOtherTotals = marchOtherRequests.length
    let marchQuoteRequests = Array.from(marchQuote)
    let marchQuoteTotals = marchQuoteRequests.length
    let marchReleases = Array.from(marchRelease)
    let marchReleaseTotals = marchReleases.length
    let marchSpecRequests = Array.from(marchSpec)
    let marchSpecTotals = marchSpecRequests.length
    let marchSubmittalRequests = Array.from(marchSubmittal)
    let marchSubmittalTotals = marchSubmittalRequests.length
    let aprilBookedOrders = Array.from(aprilBookOrder)
    let aprilBookedOrderTotals = aprilBookedOrders.length
    let aprilBudgetRequest = Array.from(aprilBudget)
    let aprilBudgetRequestTotals = aprilBudgetRequest.length
    let aprilChangeOrders = Array.from(aprilChangeOrder)
    let aprilChangeOrderTotals = aprilChangeOrders.length
    let aprilCsoRequests = Array.from(aprilCso)
    let aprilCsoTotals = aprilCsoRequests.length
    let aprilDrawingRequests = Array.from(aprilDrawing)
    let aprilDrawingTotals = aprilDrawingRequests.length
    let aprilElecRequests = Array.from(aprilElec)
    let aprilElecTotals = aprilElecRequests.length
    let aprilOtherRequests = Array.from(aprilOther)
    let aprilOtherTotals = aprilOtherRequests.length
    let aprilQuoteRequests = Array.from(aprilQuote)
    let aprilQuoteTotals = aprilQuoteRequests.length
    let aprilReleases = Array.from(aprilRelease)
    let aprilReleaseTotals = aprilReleases.length
    let aprilSpecRequests = Array.from(aprilSpec)
    let aprilSpecTotals = aprilSpecRequests.length
    let aprilSubmittalRequests = Array.from(aprilSubmittal)
    let aprilSubmittalTotals = aprilSubmittalRequests.length




    console.log(aprilBookOrder)


    return (
        <div>
            <h1>Dashboard Table</h1>
            <div className="inputDiv">
                <Form.Select required size="sm" onChange={(e) => setYear(e.target.value)}>
                    <option value="" hidden>Year</option>
                    <option>All</option>
                    <option>2022</option>
                    <option>2021</option>
                    <option>2020</option>
                </Form.Select>
                <Form.Select required size="sm" onChange={(e) => setEmployee(e.target.value)}>
                    <option value="" hidden>Salesman</option>
                    <option>All</option>
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
                <Form.Select required size="sm" onChange={(e) => setIndustry(e.target.value)}>
                    <option value="" hidden>Industry</option>
                    <option>All</option>
                    <option>Golf</option>
                    <option>Landscape</option>
                    <option>Muni</option>
                    <option>Ag</option>
                    <option>SH</option>
                </Form.Select>
                <Button onClick={() => FindData(year, month, industry, request, employee)}>Find</Button>
            </div>
            <Table striped bordered hover size="sm" style={{ width: "95%", margin: "auto" }}>
                <thead>
                    <tr>
                        <th>Request</th>
                        <th>January</th>
                        <th>February</th>
                        <th>March</th>
                        <th>April</th>
                        <th>May</th>
                        <th>June</th>
                        <th>July</th>
                        <th>August</th>
                        <th>September</th>
                        <th>October</th>
                        <th>November</th>
                        <th>December</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Book Order</td>
                        <td>{januaryBookedOrderTotals}</td>
                        <td>{februaryBookedOrderTotals}</td>
                        <td>{marchBookedOrderTotals}</td>
                        <td>{aprilBookedOrderTotals}</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Budget $</td>
                        <td>{januaryBudgetRequestTotals}</td>
                        <td>{februaryBudgetRequestTotals}</td>
                        <td>{marchBudgetRequestTotals}</td>
                        <td>{aprilBudgetRequestTotals}</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Change Order</td>
                        <td>{januaryChangeOrderTotals}</td>
                        <td>{februaryChangeOrderTotals}</td>
                        <td>{marchChangeOrderTotals}</td>
                        <td>{aprilChangeOrderTotals}</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>CSO Dwg</td>
                        <td>{januaryCsoTotals}</td>
                        <td>{februaryCsoTotals}</td>
                        <td>{marchCsoTotals}</td>
                        <td>{aprilCsoTotals}</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Drawing</td>
                        <td>{januaryDrawingTotals}</td>
                        <td>{februaryDrawingTotals}</td>
                        <td>{marchDrawingTotals}</td>
                        <td>{aprilDrawingTotals}</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Elec Doc's</td>
                        <td>{januaryElecTotals}</td>
                        <td>{februaryElecTotals}</td>
                        <td>{marchElecTotals}</td>
                        <td>{aprilElecTotals}</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Other</td>
                        <td>{januaryOtherTotals}</td>
                        <td>{februaryOtherTotals}</td>
                        <td>{marchOtherTotals}</td>
                        <td>{aprilOtherTotals}</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Quote</td>
                        <td>{januaryQuoteTotals}</td>
                        <td>{februaryQuoteTotals}</td>
                        <td>{marchQuoteTotals}</td>
                        <td>{aprilQuoteTotals}</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Release Mtg</td>
                        <td>{januaryReleaseTotals}</td>
                        <td>{februaryReleaseTotals}</td>
                        <td>{marchReleaseTotals}</td>
                        <td>{aprilReleaseTotals}</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Spec</td>
                        <td>{januarySpecTotals}</td>
                        <td>{februarySpecTotals}</td>
                        <td>{marchSpecTotals}</td>
                        <td>{aprilSpecTotals}</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Sub O/M</td>
                        <td>{januarySubmittalTotals}</td>
                        <td>{februarySubmittalTotals}</td>
                        <td>{marchSubmittalTotals}</td>
                        <td>{aprilSubmittalTotals}</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>


            </Table>
        </div >
    )

}

export default DashboardTableArchive