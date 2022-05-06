import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from 'react-router-dom'

// NOT USED IN APP

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
    let [changeOrderData, setChangeOrderData] = useState({})

    useEffect(() => {
        const fetchData = async () => {
            const { data: response } = await axios.get('https://fathomless-dusk-94922.herokuapp.com/dashboard/Golf/Book-Order')
            setBookOrderData(response)
        }
        fetchData()
    }, [])
    let bookedOrders = Array.from(bookOrderData)

    useEffect(() => {
        const fetchData = async () => {
            const { data: response } = await axios.get('https://fathomless-dusk-94922.herokuapp.com/dashboard/Golf/Budget')
            setBudgetReqData(response)
        }
        fetchData()
    }, [])
    let budgetRequests = Array.from(budgetReqData)

    useEffect(() => {
        const fetchData = async () => {
            const { data: response } = await axios.get('https://fathomless-dusk-94922.herokuapp.com/dashboard/Golf/CSO-Dwg')
            setCsoReqData(response)
        }
        fetchData()
    }, [])
    let csoRequests = Array.from(csoReqData)

    useEffect(() => {
        const fetchData = async () => {
            const { data: response } = await axios.get('https://fathomless-dusk-94922.herokuapp.com/dashboard/Golf/Drawing')
            setDrawingData(response)
        }
        fetchData()
    }, [])
    let drawingRequests = Array.from(drawingData)

    useEffect(() => {
        const fetchData = async () => {
            const { data: response } = await axios.get('https://fathomless-dusk-94922.herokuapp.com/dashboard/Golf/Elec-Docs')
            setElecData(response)
        }
        fetchData()
    }, [])
    let elecRequests = Array.from(elecData)

    useEffect(() => {
        const fetchData = async () => {
            const { data: response } = await axios.get('https://fathomless-dusk-94922.herokuapp.com/dashboard/Golf/Other')
            setOtherData(response)
        }
        fetchData()
    }, [])
    let otherRequests = Array.from(otherData)

    useEffect(() => {
        const fetchData = async () => {
            const { data: response } = await axios.get('https://fathomless-dusk-94922.herokuapp.com/dashboard/Golf/Quote')
            setQuoteData(response)
        }
        fetchData()
    }, [])
    let quoteRequests = Array.from(quoteData)

    useEffect(() => {
        const fetchData = async () => {
            const { data: response } = await axios.get('https://fathomless-dusk-94922.herokuapp.com/dashboard/Golf/Release-Mtg')
            setReleaseData(response)
        }
        fetchData()
    }, [])
    let releaseMeetings = Array.from(releaseData)

    useEffect(() => {
        const fetchData = async () => {
            const { data: response } = await axios.get('https://fathomless-dusk-94922.herokuapp.com/dashboard/Golf/Spec')
            setSpecData(response)
        }
        fetchData()
    }, [])
    let specRequests = Array.from(specData)

    useEffect(() => {
        const fetchData = async () => {
            const { data: response } = await axios.get('https://fathomless-dusk-94922.herokuapp.com/dashboard/Golf/Sub-OM')
            setSubmittalData(response)
        }
        fetchData()
    }, [])
    let submittalRequests = Array.from(submittalData)

    useEffect(() => {
        const fetchData = async () => {
            const { data: response } = await axios.get('https://fathomless-dusk-94922.herokuapp.com/dashboard/Golf/Change-Order')
            setChangeOrderData(response)
        }
        fetchData()
    }, [])
    let changeOrders = Array.from(changeOrderData)

    let totalBookedOrders = bookedOrders.length
    let totalBudgetRequests = budgetRequests.length
    let totalCsoRequests = csoRequests.length
    let totalDrawingRequests = drawingRequests.length
    let totalElecRequests = elecRequests.length
    let totalOtherRequests = otherRequests.length
    let totalQuoteRequests = quoteRequests.length
    let totalReleaseMeetings = releaseMeetings.length
    let totalSpecRequests = specRequests.length
    let totalSubmittalRequests = submittalRequests.length
    let totalChangeOrders = changeOrders.length

    const data = [
        { name: 'Book Order', value: totalBookedOrders },
        { name: 'Budget', value: totalBudgetRequests },
        { name: 'CSO Dwg', value: totalCsoRequests },
        { name: 'Drawing', value: totalDrawingRequests },
        { name: 'Elec Doc', value: totalElecRequests },
        { name: 'Other', value: totalOtherRequests },
        { name: 'Quote', value: totalQuoteRequests },
        { name: 'Release Mtg', value: totalReleaseMeetings },
        { name: 'Spec', value: totalSpecRequests },
        { name: 'Submittal', value: totalSubmittalRequests },
        { name: 'Change Order', value: totalChangeOrders },
    ];

    const COLORS = ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Purple', 'LightBlue', 'Pink', 'LimeGreen', 'DarkBlue', 'Brown'];

    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };


    return (
        <div>
            <p>Book Order: {totalBookedOrders}</p>
            <p>Budget: {totalBudgetRequests}</p>
            <p>CSO Dwg: {totalCsoRequests}</p>
            <p>Drawing: {totalDrawingRequests}</p>
            <p>Elec Docs: {totalElecRequests}</p>
            <p>Other: {totalOtherRequests}</p>
            <p>Quote: {totalQuoteRequests}</p>
            <p>Release Mtg: {totalReleaseMeetings}</p>
            <p>Spec: {totalSpecRequests}</p>
            <p>Sub O/M: {totalSubmittalRequests}</p>
            <p>Change Order: {totalChangeOrders}</p>
        </div>
    )
}

export default GolfData