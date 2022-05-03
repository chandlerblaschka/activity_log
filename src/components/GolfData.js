import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from 'react-router-dom'

function GolfData() {

    let [bookOrderData, setBookOrderData] = useState({})
    let [budgetReqData, setBudgetReqData] = useState({})
    let [csoReqData, setCsoReqData] = useState({})
    let [drawingData, setDrawingData] = useState({})
    let [elecData, setElecData] = useState({})
    let [otherData, setOtherData] = useState({})
    let [quoteData, setQuoteData] = useState({})
    let [releaseData, setReleaseData] = useState({})
    let [specData, setSpecData] = useState({})
    let [submittalData, setSubmittalData] = useState({})
    // add change order usestate

    useEffect(() => {
        const fetchData = async () => {
            const { data: response } = await axios.get('http://localhost:8000/dashboard/Golf/Book-Order')
            setBookOrderData(response)
        }
        fetchData()
    }, [])
    let bookedOrders = Array.from(bookOrderData)
    let totalBookedOrders = bookedOrders.length

    useEffect(() => {
        const fetchData = async () => {
            const { data: response } = await axios.get('http://localhost:8000/dashboard/Golf/Budget')
            setBudgetReqData(response)
        }
        fetchData()
    }, [])
    let budgetRequests = Array.from(budgetReqData)
    let totalBudgetRequests = budgetRequests.length

    return (
        <div>
            <h1>Test GolfData</h1>
            <p>{totalBookedOrders}</p>
        </div>
    )
}

export default GolfData