import { useEffect, useState } from "react";
import axios from "axios";
import Table from 'react-bootstrap/Table'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import '../components/dashboard.css'


function DashboardTable() {

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
    let [mayBookOrder, setMayBookOrder] = useState({})
    let [mayBudget, setMayBudget] = useState({})
    let [mayChangeOrder, setMayChangeOrder] = useState({})
    let [mayCso, setMayCso] = useState({})
    let [mayDrawing, setMayDrawing] = useState({})
    let [mayElec, setMayElec] = useState({})
    let [mayOther, setMayOther] = useState({})
    let [mayQuote, setMayQuote] = useState({})
    let [mayRelease, setMayRelease] = useState({})
    let [maySpec, setMaySpec] = useState({})
    let [maySubmittal, setMaySubmittal] = useState({})
    let [juneBookOrder, setJuneBookOrder] = useState({})
    let [juneBudget, setJuneBudget] = useState({})
    let [juneChangeOrder, setJuneChangeOrder] = useState({})
    let [juneCso, setJuneCso] = useState({})
    let [juneDrawing, setJuneDrawing] = useState({})
    let [juneElec, setJuneElec] = useState({})
    let [juneOther, setJuneOther] = useState({})
    let [juneQuote, setJuneQuote] = useState({})
    let [juneRelease, setJuneRelease] = useState({})
    let [juneSpec, setJuneSpec] = useState({})
    let [juneSubmittal, setJuneSubmittal] = useState({})
    let [julyBookOrder, setJulyBookOrder] = useState({})
    let [julyBudget, setJulyBudget] = useState({})
    let [julyChangeOrder, setJulyChangeOrder] = useState({})
    let [julyCso, setJulyCso] = useState({})
    let [julyDrawing, setJulyDrawing] = useState({})
    let [julyElec, setJulyElec] = useState({})
    let [julyOther, setJulyOther] = useState({})
    let [julyQuote, setJulyQuote] = useState({})
    let [julyRelease, setJulyRelease] = useState({})
    let [julySpec, setJulySpec] = useState({})
    let [julySubmittal, setJulySubmittal] = useState({})
    let [augustBookOrder, setAugustBookOrder] = useState({})
    let [augustBudget, setAugustBudget] = useState({})
    let [augustChangeOrder, setAugustChangeOrder] = useState({})
    let [augustCso, setAugustCso] = useState({})
    let [augustDrawing, setAugustDrawing] = useState({})
    let [augustElec, setAugustElec] = useState({})
    let [augustOther, setAugustOther] = useState({})
    let [augustQuote, setAugustQuote] = useState({})
    let [augustRelease, setAugustRelease] = useState({})
    let [augustSpec, setAugustSpec] = useState({})
    let [augustSubmittal, setAugustSubmittal] = useState({})
    let [septemberBookOrder, setSeptemberBookOrder] = useState({})
    let [septemberBudget, setSeptemberBudget] = useState({})
    let [septemberChangeOrder, setSeptemberChangeOrder] = useState({})
    let [septemberCso, setSeptemberCso] = useState({})
    let [septemberDrawing, setSeptemberDrawing] = useState({})
    let [septemberElec, setSeptemberElec] = useState({})
    let [septemberOther, setSeptemberOther] = useState({})
    let [septemberQuote, setSeptemberQuote] = useState({})
    let [septemberRelease, setSeptemberRelease] = useState({})
    let [septemberSpec, setSeptemberSpec] = useState({})
    let [septemberSubmittal, setSeptemberSubmittal] = useState({})
    let [octoberBookOrder, setOctoberBookOrder] = useState({})
    let [octoberBudget, setOctoberBudget] = useState({})
    let [octoberChangeOrder, setOctoberChangeOrder] = useState({})
    let [octoberCso, setOctoberCso] = useState({})
    let [octoberDrawing, setOctoberDrawing] = useState({})
    let [octoberElec, setOctoberElec] = useState({})
    let [octoberOther, setOctoberOther] = useState({})
    let [octoberQuote, setOctoberQuote] = useState({})
    let [octoberRelease, setOctoberRelease] = useState({})
    let [octoberSpec, setOctoberSpec] = useState({})
    let [octoberSubmittal, setOctoberSubmittal] = useState({})
    let [novemberBookOrder, setNovemberBookOrder] = useState({})
    let [novemberBudget, setNovemberBudget] = useState({})
    let [novemberChangeOrder, setNovemberChangeOrder] = useState({})
    let [novemberCso, setNovemberCso] = useState({})
    let [novemberDrawing, setNovemberDrawing] = useState({})
    let [novemberElec, setNovemberElec] = useState({})
    let [novemberOther, setNovemberOther] = useState({})
    let [novemberQuote, setNovemberQuote] = useState({})
    let [novemberRelease, setNovemberRelease] = useState({})
    let [novemberSpec, setNovemberSpec] = useState({})
    let [novemberSubmittal, setNovemberSubmittal] = useState({})
    let [decemberBookOrder, setDecemberBookOrder] = useState({})
    let [decemberBudget, setDecemberBudget] = useState({})
    let [decemberChangeOrder, setDecemberChangeOrder] = useState({})
    let [decemberCso, setDecemberCso] = useState({})
    let [decemberDrawing, setDecemberDrawing] = useState({})
    let [decemberElec, setDecemberElec] = useState({})
    let [decemberOther, setDecemberOther] = useState({})
    let [decemberQuote, setDecemberQuote] = useState({})
    let [decemberRelease, setDecemberRelease] = useState({})
    let [decemberSpec, setDecemberSpec] = useState({})
    let [decemberSubmittal, setDecemberSubmittal] = useState({})

    const FindData = async (year, month, industry, request, employee) => {
        const fetchJanuaryBookData = async () => {
            const { data: response } = await axios.get(`https://fathomless-dusk-94922.herokuapp.com/dashboard/${year}/01/Book-Order/${employee}`)
            setJanuaryBookOrder(response)
        }
        const fetchJanuaryBudgetData = async () => {
            const { data: response } = await axios.get(`https://fathomless-dusk-94922.herokuapp.com/dashboard/${year}/01/Budget/${employee}`)
            setJanuaryBudget(response)
        }
        const fetchJanuaryChangeOrderData = async () => {
            const { data: response } = await axios.get(`https://fathomless-dusk-94922.herokuapp.com/dashboard/${year}/01/Change-Order/${employee}`)
            setJanuaryChangeOrder(response)
        }
        const fetchJanuaryCsoData = async () => {
            const { data: response } = await axios.get(`https://fathomless-dusk-94922.herokuapp.com/dashboard/${year}/01/CSO-Dwg/${employee}`)
            setJanuaryCso(response)
        }
        const fetchJanuaryDrawingData = async () => {
            const { data: response } = await axios.get(`https://fathomless-dusk-94922.herokuapp.com/dashboard/${year}/01/Drawing/${employee}`)
            setJanuaryDrawing(response)
        }
        const fetchJanuaryElecData = async () => {
            const { data: response } = await axios.get(`https://fathomless-dusk-94922.herokuapp.com/dashboard/${year}/01/Elec-Docs/${employee}`)
            setJanuaryElec(response)
        }
        const fetchJanuaryOtherData = async () => {
            const { data: response } = await axios.get(`https://fathomless-dusk-94922.herokuapp.com/dashboard/${year}/01/Other/${employee}`)
            setJanuaryOther(response)
        }
        const fetchJanuaryQuoteData = async () => {
            const { data: response } = await axios.get(`https://fathomless-dusk-94922.herokuapp.com/dashboard/${year}/01/Quote/${employee}`)
            setJanuaryQuote(response)
        }
        const fetchJanuaryReleaseData = async () => {
            const { data: response } = await axios.get(`https://fathomless-dusk-94922.herokuapp.com/dashboard/${year}/01/Release-Mtg/${employee}`)
            setJanuaryRelease(response)
        }
        const fetchJanuarySpecData = async () => {
            const { data: response } = await axios.get(`https://fathomless-dusk-94922.herokuapp.com/dashboard/${year}/01/Spec/${employee}`)
            setJanuarySpec(response)
        }
        const fetchJanuarySubmittalData = async () => {
            const { data: response } = await axios.get(`https://fathomless-dusk-94922.herokuapp.com/dashboard/${year}/01/Sub-OM/${employee}`)
            setJanuarySubmittal(response)
        }
        const fetchFebruaryBookData = async () => {
            const { data: response } = await axios.get(`https://fathomless-dusk-94922.herokuapp.com/dashboard/${year}/02/Book-Order/${employee}`)
            setFebruaryBookOrder(response)
        }
        const fetchFebruaryBudgetData = async () => {
            const { data: response } = await axios.get(`https://fathomless-dusk-94922.herokuapp.com/dashboard/${year}/02/Budget/${employee}`)
            setFebruaryBudget(response)
        }
        const fetchFebruaryChangeOrderData = async () => {
            const { data: response } = await axios.get(`https://fathomless-dusk-94922.herokuapp.com/dashboard/${year}/02/Change-Order/${employee}`)
            setFebruaryChangeOrder(response)
        }
        const fetchFebruaryCsoData = async () => {
            const { data: response } = await axios.get(`https://fathomless-dusk-94922.herokuapp.com/dashboard/${year}/02/CSO-Dwg/${employee}`)
            setFebruaryCso(response)
        }
        const fetchFebruaryDrawingData = async () => {
            const { data: response } = await axios.get(`https://fathomless-dusk-94922.herokuapp.com/dashboard/${year}/02/Drawing/${employee}`)
            setFebruaryDrawing(response)
        }
        const fetchFebruaryElecData = async () => {
            const { data: response } = await axios.get(`https://fathomless-dusk-94922.herokuapp.com/dashboard/${year}/02/Elec-Docs/${employee}`)
            setFebruaryElec(response)
        }
        const fetchFebruaryOtherData = async () => {
            const { data: response } = await axios.get(`https://fathomless-dusk-94922.herokuapp.com/dashboard/${year}/02/Other/${employee}`)
            setFebruaryOther(response)
        }
        const fetchFebruaryQuoteData = async () => {
            const { data: response } = await axios.get(`https://fathomless-dusk-94922.herokuapp.com/dashboard/${year}/02/Quote/${employee}`)
            setFebruaryQuote(response)
        }
        const fetchFebruaryReleaseData = async () => {
            const { data: response } = await axios.get(`https://fathomless-dusk-94922.herokuapp.com/dashboard/${year}/02/Release-Mtg/${employee}`)
            setFebruaryRelease(response)
        }
        const fetchFebruarySpecData = async () => {
            const { data: response } = await axios.get(`https://fathomless-dusk-94922.herokuapp.com/dashboard/${year}/02/Spec/${employee}`)
            setFebruarySpec(response)
        }
        const fetchFebruarySubmittalData = async () => {
            const { data: response } = await axios.get(`https://fathomless-dusk-94922.herokuapp.com/dashboard/${year}/02/Sub-OM/${employee}`)
            setFebruarySubmittal(response)
        }
        const fetchMarchBookData = async () => {
            const { data: response } = await axios.get(`https://fathomless-dusk-94922.herokuapp.com/dashboard/${year}/03/Book-Order/${employee}`)
            setMarchBookOrder(response)
        }
        const fetchMarchBudgetData = async () => {
            const { data: response } = await axios.get(`https://fathomless-dusk-94922.herokuapp.com/dashboard/${year}/03/Budget/${employee}`)
            setMarchBudget(response)
        }
        const fetchMarchChangeOrderData = async () => {
            const { data: response } = await axios.get(`https://fathomless-dusk-94922.herokuapp.com/dashboard/${year}/03/Change-Order/${employee}`)
            setMarchChangeOrder(response)
        }
        const fetchMarchCsoData = async () => {
            const { data: response } = await axios.get(`https://fathomless-dusk-94922.herokuapp.com/dashboard/${year}/03/CSO-Dwg/${employee}`)
            setMarchCso(response)
        }
        const fetchMarchDrawingData = async () => {
            const { data: response } = await axios.get(`https://fathomless-dusk-94922.herokuapp.com/dashboard/${year}/03/Drawing/${employee}`)
            setMarchDrawing(response)
        }
        const fetchMarchElecData = async () => {
            const { data: response } = await axios.get(`https://fathomless-dusk-94922.herokuapp.com/dashboard/${year}/03/Elec-Docs/${employee}`)
            setMarchElec(response)
        }
        const fetchMarchOtherData = async () => {
            const { data: response } = await axios.get(`https://fathomless-dusk-94922.herokuapp.com/dashboard/${year}/03/Other/${employee}`)
            setMarchOther(response)
        }
        const fetchMarchQuoteData = async () => {
            const { data: response } = await axios.get(`https://fathomless-dusk-94922.herokuapp.com/dashboard/${year}/03/Quote/${employee}`)
            setMarchQuote(response)
        }
        const fetchMarchReleaseData = async () => {
            const { data: response } = await axios.get(`https://fathomless-dusk-94922.herokuapp.com/dashboard/${year}/03/Release-Mtg/${employee}`)
            setMarchRelease(response)
        }
        const fetchMarchSpecData = async () => {
            const { data: response } = await axios.get(`https://fathomless-dusk-94922.herokuapp.com/dashboard/${year}/03/Spec/${employee}`)
            setMarchSpec(response)
        }
        const fetchMarchSubmittalData = async () => {
            const { data: response } = await axios.get(`https://fathomless-dusk-94922.herokuapp.com/dashboard/${year}/03/Sub-OM/${employee}`)
            setMarchSubmittal(response)
        }
        const fetchAprilBookData = async () => {
            const { data: response } = await axios.get(`https://fathomless-dusk-94922.herokuapp.com/dashboard/${year}/04/Book-Order/${employee}`)
            setAprilBookOrder(response)
        }
        const fetchAprilBudgetData = async () => {
            const { data: response } = await axios.get(`https://fathomless-dusk-94922.herokuapp.com/dashboard/${year}/04/Budget/${employee}`)
            setAprilBudget(response)
        }
        const fetchAprilChangeOrderData = async () => {
            const { data: response } = await axios.get(`https://fathomless-dusk-94922.herokuapp.com/dashboard/${year}/04/Change-Order/${employee}`)
            setAprilChangeOrder(response)
        }
        const fetchAprilCsoData = async () => {
            const { data: response } = await axios.get(`https://fathomless-dusk-94922.herokuapp.com/dashboard/${year}/04/CSO-Dwg/${employee}`)
            setAprilCso(response)
        }
        const fetchAprilDrawingData = async () => {
            const { data: response } = await axios.get(`https://fathomless-dusk-94922.herokuapp.com/dashboard/${year}/04/Drawing/${employee}`)
            setAprilDrawing(response)
        }
        const fetchAprilElecData = async () => {
            const { data: response } = await axios.get(`https://fathomless-dusk-94922.herokuapp.com/dashboard/${year}/04/Elec-Docs/${employee}`)
            setAprilElec(response)
        }
        const fetchAprilOtherData = async () => {
            const { data: response } = await axios.get(`https://fathomless-dusk-94922.herokuapp.com/dashboard/${year}/04/Other/${employee}`)
            setAprilOther(response)
        }
        const fetchAprilQuoteData = async () => {
            const { data: response } = await axios.get(`https://fathomless-dusk-94922.herokuapp.com/dashboard/${year}/04/Quote/${employee}`)
            setAprilQuote(response)
        }
        const fetchAprilReleaseData = async () => {
            const { data: response } = await axios.get(`https://fathomless-dusk-94922.herokuapp.com/dashboard/${year}/04/Release-Mtg/${employee}`)
            setAprilRelease(response)
        }
        const fetchAprilSpecData = async () => {
            const { data: response } = await axios.get(`https://fathomless-dusk-94922.herokuapp.com/dashboard/${year}/04/Spec/${employee}`)
            setAprilSpec(response)
        }
        const fetchAprilSubmittalData = async () => {
            const { data: response } = await axios.get(`https://fathomless-dusk-94922.herokuapp.com/dashboard/${year}/04/Sub-OM/${employee}`)
            setAprilSubmittal(response)
        }
        const fetchMayBookData = async () => {
            const { data: response } = await axios.get(`https://fathomless-dusk-94922.herokuapp.com/dashboard/${year}/05/Book-Order/${employee}`)
            setMayBookOrder(response)
        }
        const fetchMayBudgetData = async () => {
            const { data: response } = await axios.get(`https://fathomless-dusk-94922.herokuapp.com/dashboard/${year}/05/Budget/${employee}`)
            setMayBudget(response)
        }
        const fetchMayChangeOrderData = async () => {
            const { data: response } = await axios.get(`https://fathomless-dusk-94922.herokuapp.com/dashboard/${year}/05/Change-Order/${employee}`)
            setMayChangeOrder(response)
        }
        const fetchMayCsoData = async () => {
            const { data: response } = await axios.get(`https://fathomless-dusk-94922.herokuapp.com/dashboard/${year}/05/CSO-Dwg/${employee}`)
            setMayCso(response)
        }
        const fetchMayDrawingData = async () => {
            const { data: response } = await axios.get(`https://fathomless-dusk-94922.herokuapp.com/dashboard/${year}/05/Drawing/${employee}`)
            setMayDrawing(response)
        }
        const fetchMayElecData = async () => {
            const { data: response } = await axios.get(`https://fathomless-dusk-94922.herokuapp.com/dashboard/${year}/05/Elec-Docs/${employee}`)
            setMayElec(response)
        }
        const fetchMayOtherData = async () => {
            const { data: response } = await axios.get(`https://fathomless-dusk-94922.herokuapp.com/dashboard/${year}/05/Other/${employee}`)
            setMayOther(response)
        }
        const fetchMayQuoteData = async () => {
            const { data: response } = await axios.get(`https://fathomless-dusk-94922.herokuapp.com/dashboard/${year}/05/Quote/${employee}`)
            setMayQuote(response)
        }
        const fetchMayReleaseData = async () => {
            const { data: response } = await axios.get(`https://fathomless-dusk-94922.herokuapp.com/dashboard/${year}/05/Release-Mtg/${employee}`)
            setMayRelease(response)
        }
        const fetchMaySpecData = async () => {
            const { data: response } = await axios.get(`https://fathomless-dusk-94922.herokuapp.com/dashboard/${year}/05/Spec/${employee}`)
            setMaySpec(response)
        }
        const fetchMaySubmittalData = async () => {
            const { data: response } = await axios.get(`https://fathomless-dusk-94922.herokuapp.com/dashboard/${year}/05/Sub-OM/${employee}`)
            setMaySubmittal(response)
        }
        const fetchJuneBookData = async () => {
            const { data: response } = await axios.get(`https://fathomless-dusk-94922.herokuapp.com/dashboard/${year}/06/Book-Order/${employee}`)
            setJuneBookOrder(response)
        }
        const fetchJuneBudgetData = async () => {
            const { data: response } = await axios.get(`https://fathomless-dusk-94922.herokuapp.com/dashboard/${year}/06/Budget/${employee}`)
            setJuneBudget(response)
        }
        const fetchJuneChangeOrderData = async () => {
            const { data: response } = await axios.get(`https://fathomless-dusk-94922.herokuapp.com/dashboard/${year}/06/Change-Order/${employee}`)
            setJuneChangeOrder(response)
        }
        const fetchJuneCsoData = async () => {
            const { data: response } = await axios.get(`https://fathomless-dusk-94922.herokuapp.com/dashboard/${year}/06/CSO-Dwg/${employee}`)
            setJuneCso(response)
        }
        const fetchJuneDrawingData = async () => {
            const { data: response } = await axios.get(`https://fathomless-dusk-94922.herokuapp.com/dashboard/${year}/06/Drawing/${employee}`)
            setJuneDrawing(response)
        }
        const fetchJuneElecData = async () => {
            const { data: response } = await axios.get(`https://fathomless-dusk-94922.herokuapp.com/dashboard/${year}/06/Elec-Docs/${employee}`)
            setJuneElec(response)
        }
        const fetchJuneOtherData = async () => {
            const { data: response } = await axios.get(`https://fathomless-dusk-94922.herokuapp.com/dashboard/${year}/06/Other/${employee}`)
            setJuneOther(response)
        }
        const fetchJuneQuoteData = async () => {
            const { data: response } = await axios.get(`https://fathomless-dusk-94922.herokuapp.com/dashboard/${year}/06/Quote/${employee}`)
            setJuneQuote(response)
        }
        const fetchJuneReleaseData = async () => {
            const { data: response } = await axios.get(`https://fathomless-dusk-94922.herokuapp.com/dashboard/${year}/06/Release-Mtg/${employee}`)
            setJuneRelease(response)
        }
        const fetchJuneSpecData = async () => {
            const { data: response } = await axios.get(`https://fathomless-dusk-94922.herokuapp.com/dashboard/${year}/06/Spec/${employee}`)
            setJuneSpec(response)
        }
        const fetchJuneSubmittalData = async () => {
            const { data: response } = await axios.get(`https://fathomless-dusk-94922.herokuapp.com/dashboard/${year}/06/Sub-OM/${employee}`)
            setJuneSubmittal(response)
        }
        const fetchJulyBookData = async () => {
            const { data: response } = await axios.get(`https://fathomless-dusk-94922.herokuapp.com/dashboard/${year}/07/Book-Order/${employee}`)
            setJulyBookOrder(response)
        }
        const fetchJulyBudgetData = async () => {
            const { data: response } = await axios.get(`https://fathomless-dusk-94922.herokuapp.com/dashboard/${year}/07/Budget/${employee}`)
            setJulyBudget(response)
        }
        const fetchJulyChangeOrderData = async () => {
            const { data: response } = await axios.get(`https://fathomless-dusk-94922.herokuapp.com/dashboard/${year}/07/Change-Order/${employee}`)
            setJulyChangeOrder(response)
        }
        const fetchJulyCsoData = async () => {
            const { data: response } = await axios.get(`https://fathomless-dusk-94922.herokuapp.com/dashboard/${year}/07/CSO-Dwg/${employee}`)
            setJulyCso(response)
        }
        const fetchJulyDrawingData = async () => {
            const { data: response } = await axios.get(`https://fathomless-dusk-94922.herokuapp.com/dashboard/${year}/07/Drawing/${employee}`)
            setJulyDrawing(response)
        }
        const fetchJulyElecData = async () => {
            const { data: response } = await axios.get(`https://fathomless-dusk-94922.herokuapp.com/dashboard/${year}/07/Elec-Docs/${employee}`)
            setJulyElec(response)
        }
        const fetchJulyOtherData = async () => {
            const { data: response } = await axios.get(`https://fathomless-dusk-94922.herokuapp.com/dashboard/${year}/07/Other/${employee}`)
            setJulyOther(response)
        }
        const fetchJulyQuoteData = async () => {
            const { data: response } = await axios.get(`https://fathomless-dusk-94922.herokuapp.com/dashboard/${year}/07/Quote/${employee}`)
            setJulyQuote(response)
        }
        const fetchJulyReleaseData = async () => {
            const { data: response } = await axios.get(`https://fathomless-dusk-94922.herokuapp.com/dashboard/${year}/07/Release-Mtg/${employee}`)
            setJulyRelease(response)
        }
        const fetchJulySpecData = async () => {
            const { data: response } = await axios.get(`https://fathomless-dusk-94922.herokuapp.com/dashboard/${year}/07/Spec/${employee}`)
            setJulySpec(response)
        }
        const fetchJulySubmittalData = async () => {
            const { data: response } = await axios.get(`https://fathomless-dusk-94922.herokuapp.com/dashboard/${year}/07/Sub-OM/${employee}`)
            setJulySubmittal(response)
        }
        const fetchAugustBookData = async () => {
            const { data: response } = await axios.get(`https://fathomless-dusk-94922.herokuapp.com/dashboard/${year}/08/Book-Order/${employee}`)
            setAugustBookOrder(response)
        }
        const fetchAugustBudgetData = async () => {
            const { data: response } = await axios.get(`https://fathomless-dusk-94922.herokuapp.com/dashboard/${year}/08/Budget/${employee}`)
            setAugustBudget(response)
        }
        const fetchAugustChangeOrderData = async () => {
            const { data: response } = await axios.get(`https://fathomless-dusk-94922.herokuapp.com/dashboard/${year}/08/Change-Order/${employee}`)
            setAugustChangeOrder(response)
        }
        const fetchAugustCsoData = async () => {
            const { data: response } = await axios.get(`https://fathomless-dusk-94922.herokuapp.com/dashboard/${year}/08/CSO-Dwg/${employee}`)
            setAugustCso(response)
        }
        const fetchAugustDrawingData = async () => {
            const { data: response } = await axios.get(`https://fathomless-dusk-94922.herokuapp.com/dashboard/${year}/08/Drawing/${employee}`)
            setAugustDrawing(response)
        }
        const fetchAugustElecData = async () => {
            const { data: response } = await axios.get(`https://fathomless-dusk-94922.herokuapp.com/dashboard/${year}/08/Elec-Docs/${employee}`)
            setAugustElec(response)
        }
        const fetchAugustOtherData = async () => {
            const { data: response } = await axios.get(`https://fathomless-dusk-94922.herokuapp.com/dashboard/${year}/08/Other/${employee}`)
            setAugustOther(response)
        }
        const fetchAugustQuoteData = async () => {
            const { data: response } = await axios.get(`https://fathomless-dusk-94922.herokuapp.com/dashboard/${year}/08/Quote/${employee}`)
            setAugustQuote(response)
        }
        const fetchAugustReleaseData = async () => {
            const { data: response } = await axios.get(`https://fathomless-dusk-94922.herokuapp.com/dashboard/${year}/08/Release-Mtg/${employee}`)
            setAugustRelease(response)
        }
        const fetchAugustSpecData = async () => {
            const { data: response } = await axios.get(`https://fathomless-dusk-94922.herokuapp.com/dashboard/${year}/08/Spec/${employee}`)
            setAugustSpec(response)
        }
        const fetchAugustSubmittalData = async () => {
            const { data: response } = await axios.get(`https://fathomless-dusk-94922.herokuapp.com/dashboard/${year}/08/Sub-OM/${employee}`)
            setAugustSubmittal(response)
        }
        const fetchSeptemberBookData = async () => {
            const { data: response } = await axios.get(`https://fathomless-dusk-94922.herokuapp.com/dashboard/${year}/09/Book-Order/${employee}`)
            setSeptemberBookOrder(response)
        }
        const fetchSeptemberBudgetData = async () => {
            const { data: response } = await axios.get(`https://fathomless-dusk-94922.herokuapp.com/dashboard/${year}/09/Budget/${employee}`)
            setSeptemberBudget(response)
        }
        const fetchSeptemberChangeOrderData = async () => {
            const { data: response } = await axios.get(`https://fathomless-dusk-94922.herokuapp.com/dashboard/${year}/09/Change-Order/${employee}`)
            setSeptemberChangeOrder(response)
        }
        const fetchSeptemberCsoData = async () => {
            const { data: response } = await axios.get(`https://fathomless-dusk-94922.herokuapp.com/dashboard/${year}/09/CSO-Dwg/${employee}`)
            setSeptemberCso(response)
        }
        const fetchSeptemberDrawingData = async () => {
            const { data: response } = await axios.get(`https://fathomless-dusk-94922.herokuapp.com/dashboard/${year}/09/Drawing/${employee}`)
            setSeptemberDrawing(response)
        }
        const fetchSeptemberElecData = async () => {
            const { data: response } = await axios.get(`https://fathomless-dusk-94922.herokuapp.com/dashboard/${year}/09/Elec-Docs/${employee}`)
            setSeptemberElec(response)
        }
        const fetchSeptemberOtherData = async () => {
            const { data: response } = await axios.get(`https://fathomless-dusk-94922.herokuapp.com/dashboard/${year}/09/Other/${employee}`)
            setSeptemberOther(response)
        }
        const fetchSeptemberQuoteData = async () => {
            const { data: response } = await axios.get(`https://fathomless-dusk-94922.herokuapp.com/dashboard/${year}/09/Quote/${employee}`)
            setSeptemberQuote(response)
        }
        const fetchSeptemberReleaseData = async () => {
            const { data: response } = await axios.get(`https://fathomless-dusk-94922.herokuapp.com/dashboard/${year}/09/Release-Mtg/${employee}`)
            setSeptemberRelease(response)
        }
        const fetchSeptemberSpecData = async () => {
            const { data: response } = await axios.get(`https://fathomless-dusk-94922.herokuapp.com/dashboard/${year}/09/Spec/${employee}`)
            setSeptemberSpec(response)
        }
        const fetchSeptemberSubmittalData = async () => {
            const { data: response } = await axios.get(`https://fathomless-dusk-94922.herokuapp.com/dashboard/${year}/09/Sub-OM/${employee}`)
            setSeptemberSubmittal(response)
        }
        const fetchOctoberBookData = async () => {
            const { data: response } = await axios.get(`https://fathomless-dusk-94922.herokuapp.com/dashboard/${year}/10/Book-Order/${employee}`)
            setOctoberBookOrder(response)
        }
        const fetchOctoberBudgetData = async () => {
            const { data: response } = await axios.get(`https://fathomless-dusk-94922.herokuapp.com/dashboard/${year}/10/Budget/${employee}`)
            setOctoberBudget(response)
        }
        const fetchOctoberChangeOrderData = async () => {
            const { data: response } = await axios.get(`https://fathomless-dusk-94922.herokuapp.com/dashboard/${year}/10/Change-Order/${employee}`)
            setOctoberChangeOrder(response)
        }
        const fetchOctoberCsoData = async () => {
            const { data: response } = await axios.get(`https://fathomless-dusk-94922.herokuapp.com/dashboard/${year}/10/CSO-Dwg/${employee}`)
            setOctoberCso(response)
        }
        const fetchOctoberDrawingData = async () => {
            const { data: response } = await axios.get(`https://fathomless-dusk-94922.herokuapp.com/dashboard/${year}/10/Drawing/${employee}`)
            setOctoberDrawing(response)
        }
        const fetchOctoberElecData = async () => {
            const { data: response } = await axios.get(`https://fathomless-dusk-94922.herokuapp.com/dashboard/${year}/10/Elec-Docs/${employee}`)
            setOctoberElec(response)
        }
        const fetchOctoberOtherData = async () => {
            const { data: response } = await axios.get(`https://fathomless-dusk-94922.herokuapp.com/dashboard/${year}/10/Other/${employee}`)
            setOctoberOther(response)
        }
        const fetchOctoberQuoteData = async () => {
            const { data: response } = await axios.get(`https://fathomless-dusk-94922.herokuapp.com/dashboard/${year}/10/Quote/${employee}`)
            setOctoberQuote(response)
        }
        const fetchOctoberReleaseData = async () => {
            const { data: response } = await axios.get(`https://fathomless-dusk-94922.herokuapp.com/dashboard/${year}/10/Release-Mtg/${employee}`)
            setOctoberRelease(response)
        }
        const fetchOctoberSpecData = async () => {
            const { data: response } = await axios.get(`https://fathomless-dusk-94922.herokuapp.com/dashboard/${year}/10/Spec/${employee}`)
            setOctoberSpec(response)
        }
        const fetchOctoberSubmittalData = async () => {
            const { data: response } = await axios.get(`https://fathomless-dusk-94922.herokuapp.com/dashboard/${year}/10/Sub-OM/${employee}`)
            setOctoberSubmittal(response)
        }
        const fetchNovemberBookData = async () => {
            const { data: response } = await axios.get(`https://fathomless-dusk-94922.herokuapp.com/dashboard/${year}/11/Book-Order/${employee}`)
            setNovemberBookOrder(response)
        }
        const fetchNovemberBudgetData = async () => {
            const { data: response } = await axios.get(`https://fathomless-dusk-94922.herokuapp.com/dashboard/${year}/11/Budget/${employee}`)
            setNovemberBudget(response)
        }
        const fetchNovemberChangeOrderData = async () => {
            const { data: response } = await axios.get(`https://fathomless-dusk-94922.herokuapp.com/dashboard/${year}/11/Change-Order/${employee}`)
            setNovemberChangeOrder(response)
        }
        const fetchNovemberCsoData = async () => {
            const { data: response } = await axios.get(`https://fathomless-dusk-94922.herokuapp.com/dashboard/${year}/11/CSO-Dwg/${employee}`)
            setNovemberCso(response)
        }
        const fetchNovemberDrawingData = async () => {
            const { data: response } = await axios.get(`https://fathomless-dusk-94922.herokuapp.com/dashboard/${year}/11/Drawing/${employee}`)
            setNovemberDrawing(response)
        }
        const fetchNovemberElecData = async () => {
            const { data: response } = await axios.get(`https://fathomless-dusk-94922.herokuapp.com/dashboard/${year}/11/Elec-Docs/${employee}`)
            setNovemberElec(response)
        }
        const fetchNovemberOtherData = async () => {
            const { data: response } = await axios.get(`https://fathomless-dusk-94922.herokuapp.com/dashboard/${year}/11/Other/${employee}`)
            setNovemberOther(response)
        }
        const fetchNovemberQuoteData = async () => {
            const { data: response } = await axios.get(`https://fathomless-dusk-94922.herokuapp.com/dashboard/${year}/11/Quote/${employee}`)
            setNovemberQuote(response)
        }
        const fetchNovemberReleaseData = async () => {
            const { data: response } = await axios.get(`https://fathomless-dusk-94922.herokuapp.com/dashboard/${year}/11/Release-Mtg/${employee}`)
            setNovemberRelease(response)
        }
        const fetchNovemberSpecData = async () => {
            const { data: response } = await axios.get(`https://fathomless-dusk-94922.herokuapp.com/dashboard/${year}/11/Spec/${employee}`)
            setNovemberSpec(response)
        }
        const fetchNovemberSubmittalData = async () => {
            const { data: response } = await axios.get(`https://fathomless-dusk-94922.herokuapp.com/dashboard/${year}/11/Sub-OM/${employee}`)
            setNovemberSubmittal(response)
        }
        const fetchDecemberBookData = async () => {
            const { data: response } = await axios.get(`https://fathomless-dusk-94922.herokuapp.com/dashboard/${year}/12/Book-Order/${employee}`)
            setDecemberBookOrder(response)
        }
        const fetchDecemberBudgetData = async () => {
            const { data: response } = await axios.get(`https://fathomless-dusk-94922.herokuapp.com/dashboard/${year}/12/Budget/${employee}`)
            setDecemberBudget(response)
        }
        const fetchDecemberChangeOrderData = async () => {
            const { data: response } = await axios.get(`https://fathomless-dusk-94922.herokuapp.com/dashboard/${year}/12/Change-Order/${employee}`)
            setDecemberChangeOrder(response)
        }
        const fetchDecemberCsoData = async () => {
            const { data: response } = await axios.get(`https://fathomless-dusk-94922.herokuapp.com/dashboard/${year}/12/CSO-Dwg/${employee}`)
            setDecemberCso(response)
        }
        const fetchDecemberDrawingData = async () => {
            const { data: response } = await axios.get(`https://fathomless-dusk-94922.herokuapp.com/dashboard/${year}/12/Drawing/${employee}`)
            setDecemberDrawing(response)
        }
        const fetchDecemberElecData = async () => {
            const { data: response } = await axios.get(`https://fathomless-dusk-94922.herokuapp.com/dashboard/${year}/12/Elec-Docs/${employee}`)
            setDecemberElec(response)
        }
        const fetchDecemberOtherData = async () => {
            const { data: response } = await axios.get(`https://fathomless-dusk-94922.herokuapp.com/dashboard/${year}/12/Other/${employee}`)
            setDecemberOther(response)
        }
        const fetchDecemberQuoteData = async () => {
            const { data: response } = await axios.get(`https://fathomless-dusk-94922.herokuapp.com/dashboard/${year}/12/Quote/${employee}`)
            setDecemberQuote(response)
        }
        const fetchDecemberReleaseData = async () => {
            const { data: response } = await axios.get(`https://fathomless-dusk-94922.herokuapp.com/dashboard/${year}/12/Release-Mtg/${employee}`)
            setDecemberRelease(response)
        }
        const fetchDecemberSpecData = async () => {
            const { data: response } = await axios.get(`https://fathomless-dusk-94922.herokuapp.com/dashboard/${year}/12/Spec/${employee}`)
            setDecemberSpec(response)
        }
        const fetchDecemberSubmittalData = async () => {
            const { data: response } = await axios.get(`https://fathomless-dusk-94922.herokuapp.com/dashboard/${year}/12/Sub-OM/${employee}`)
            setDecemberSubmittal(response)
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
        fetchMayBookData()
        fetchMayBudgetData()
        fetchMayChangeOrderData()
        fetchMayCsoData()
        fetchMayDrawingData()
        fetchMayElecData()
        fetchMayOtherData()
        fetchMayQuoteData()
        fetchMayReleaseData()
        fetchMaySpecData()
        fetchMaySubmittalData()
        fetchJuneBookData()
        fetchJuneBudgetData()
        fetchJuneChangeOrderData()
        fetchJuneCsoData()
        fetchJuneDrawingData()
        fetchJuneElecData()
        fetchJuneOtherData()
        fetchJuneQuoteData()
        fetchJuneReleaseData()
        fetchJuneSpecData()
        fetchJuneSubmittalData()
        fetchJulyBookData()
        fetchJulyBudgetData()
        fetchJulyChangeOrderData()
        fetchJulyCsoData()
        fetchJulyDrawingData()
        fetchJulyElecData()
        fetchJulyOtherData()
        fetchJulyQuoteData()
        fetchJulyReleaseData()
        fetchJulySpecData()
        fetchJulySubmittalData()
        fetchAugustBookData()
        fetchAugustBudgetData()
        fetchAugustChangeOrderData()
        fetchAugustCsoData()
        fetchAugustDrawingData()
        fetchAugustElecData()
        fetchAugustOtherData()
        fetchAugustQuoteData()
        fetchAugustReleaseData()
        fetchAugustSpecData()
        fetchAugustSubmittalData()
        fetchSeptemberBookData()
        fetchSeptemberBudgetData()
        fetchSeptemberChangeOrderData()
        fetchSeptemberCsoData()
        fetchSeptemberDrawingData()
        fetchSeptemberElecData()
        fetchSeptemberOtherData()
        fetchSeptemberQuoteData()
        fetchSeptemberReleaseData()
        fetchSeptemberSpecData()
        fetchSeptemberSubmittalData()
        fetchOctoberBookData()
        fetchOctoberBudgetData()
        fetchOctoberChangeOrderData()
        fetchOctoberCsoData()
        fetchOctoberDrawingData()
        fetchOctoberElecData()
        fetchOctoberOtherData()
        fetchOctoberQuoteData()
        fetchOctoberReleaseData()
        fetchOctoberSpecData()
        fetchOctoberSubmittalData()
        fetchNovemberBookData()
        fetchNovemberBudgetData()
        fetchNovemberChangeOrderData()
        fetchNovemberCsoData()
        fetchNovemberDrawingData()
        fetchNovemberElecData()
        fetchNovemberOtherData()
        fetchNovemberQuoteData()
        fetchNovemberReleaseData()
        fetchNovemberSpecData()
        fetchNovemberSubmittalData()
        fetchDecemberBookData()
        fetchDecemberBudgetData()
        fetchDecemberChangeOrderData()
        fetchDecemberCsoData()
        fetchDecemberDrawingData()
        fetchDecemberElecData()
        fetchDecemberOtherData()
        fetchDecemberQuoteData()
        fetchDecemberReleaseData()
        fetchDecemberSpecData()
        fetchDecemberSubmittalData()
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
    let mayBookedOrders = Array.from(mayBookOrder)
    let mayBookedOrderTotals = mayBookedOrders.length
    let mayBudgetRequest = Array.from(mayBudget)
    let mayBudgetRequestTotals = mayBudgetRequest.length
    let mayChangeOrders = Array.from(mayChangeOrder)
    let mayChangeOrderTotals = mayChangeOrders.length
    let mayCsoRequests = Array.from(mayCso)
    let mayCsoTotals = mayCsoRequests.length
    let mayDrawingRequests = Array.from(mayDrawing)
    let mayDrawingTotals = mayDrawingRequests.length
    let mayElecRequests = Array.from(mayElec)
    let mayElecTotals = mayElecRequests.length
    let mayOtherRequests = Array.from(mayOther)
    let mayOtherTotals = mayOtherRequests.length
    let mayQuoteRequests = Array.from(mayQuote)
    let mayQuoteTotals = mayQuoteRequests.length
    let mayReleases = Array.from(mayRelease)
    let mayReleaseTotals = mayReleases.length
    let maySpecRequests = Array.from(maySpec)
    let maySpecTotals = maySpecRequests.length
    let maySubmittalRequests = Array.from(maySubmittal)
    let maySubmittalTotals = maySubmittalRequests.length
    let juneBookedOrders = Array.from(juneBookOrder)
    let juneBookedOrderTotals = juneBookedOrders.length
    let juneBudgetRequest = Array.from(juneBudget)
    let juneBudgetRequestTotals = juneBudgetRequest.length
    let juneChangeOrders = Array.from(juneChangeOrder)
    let juneChangeOrderTotals = juneChangeOrders.length
    let juneCsoRequests = Array.from(juneCso)
    let juneCsoTotals = juneCsoRequests.length
    let juneDrawingRequests = Array.from(juneDrawing)
    let juneDrawingTotals = juneDrawingRequests.length
    let juneElecRequests = Array.from(juneElec)
    let juneElecTotals = juneElecRequests.length
    let juneOtherRequests = Array.from(juneOther)
    let juneOtherTotals = juneOtherRequests.length
    let juneQuoteRequests = Array.from(juneQuote)
    let juneQuoteTotals = juneQuoteRequests.length
    let juneReleases = Array.from(juneRelease)
    let juneReleaseTotals = juneReleases.length
    let juneSpecRequests = Array.from(juneSpec)
    let juneSpecTotals = juneSpecRequests.length
    let juneSubmittalRequests = Array.from(juneSubmittal)
    let juneSubmittalTotals = juneSubmittalRequests.length
    let julyBookedOrders = Array.from(julyBookOrder)
    let julyBookedOrderTotals = julyBookedOrders.length
    let julyBudgetRequest = Array.from(julyBudget)
    let julyBudgetRequestTotals = julyBudgetRequest.length
    let julyChangeOrders = Array.from(julyChangeOrder)
    let julyChangeOrderTotals = julyChangeOrders.length
    let julyCsoRequests = Array.from(julyCso)
    let julyCsoTotals = julyCsoRequests.length
    let julyDrawingRequests = Array.from(julyDrawing)
    let julyDrawingTotals = julyDrawingRequests.length
    let julyElecRequests = Array.from(julyElec)
    let julyElecTotals = julyElecRequests.length
    let julyOtherRequests = Array.from(julyOther)
    let julyOtherTotals = julyOtherRequests.length
    let julyQuoteRequests = Array.from(julyQuote)
    let julyQuoteTotals = julyQuoteRequests.length
    let julyReleases = Array.from(julyRelease)
    let julyReleaseTotals = julyReleases.length
    let julySpecRequests = Array.from(julySpec)
    let julySpecTotals = julySpecRequests.length
    let julySubmittalRequests = Array.from(julySubmittal)
    let julySubmittalTotals = julySubmittalRequests.length
    let augustBookedOrders = Array.from(augustBookOrder)
    let augustBookedOrderTotals = augustBookedOrders.length
    let augustBudgetRequest = Array.from(augustBudget)
    let augustBudgetRequestTotals = augustBudgetRequest.length
    let augustChangeOrders = Array.from(augustChangeOrder)
    let augustChangeOrderTotals = augustChangeOrders.length
    let augustCsoRequests = Array.from(augustCso)
    let augustCsoTotals = augustCsoRequests.length
    let augustDrawingRequests = Array.from(augustDrawing)
    let augustDrawingTotals = augustDrawingRequests.length
    let augustElecRequests = Array.from(augustElec)
    let augustElecTotals = augustElecRequests.length
    let augustOtherRequests = Array.from(augustOther)
    let augustOtherTotals = augustOtherRequests.length
    let augustQuoteRequests = Array.from(augustQuote)
    let augustQuoteTotals = augustQuoteRequests.length
    let augustReleases = Array.from(augustRelease)
    let augustReleaseTotals = augustReleases.length
    let augustSpecRequests = Array.from(augustSpec)
    let augustSpecTotals = augustSpecRequests.length
    let augustSubmittalRequests = Array.from(augustSubmittal)
    let augustSubmittalTotals = augustSubmittalRequests.length
    let septemberBookedOrders = Array.from(septemberBookOrder)
    let septemberBookedOrderTotals = septemberBookedOrders.length
    let septemberBudgetRequest = Array.from(septemberBudget)
    let septemberBudgetRequestTotals = septemberBudgetRequest.length
    let septemberChangeOrders = Array.from(septemberChangeOrder)
    let septemberChangeOrderTotals = septemberChangeOrders.length
    let septemberCsoRequests = Array.from(septemberCso)
    let septemberCsoTotals = septemberCsoRequests.length
    let septemberDrawingRequests = Array.from(septemberDrawing)
    let septemberDrawingTotals = septemberDrawingRequests.length
    let septemberElecRequests = Array.from(septemberElec)
    let septemberElecTotals = septemberElecRequests.length
    let septemberOtherRequests = Array.from(septemberOther)
    let septemberOtherTotals = septemberOtherRequests.length
    let septemberQuoteRequests = Array.from(septemberQuote)
    let septemberQuoteTotals = septemberQuoteRequests.length
    let septemberReleases = Array.from(septemberRelease)
    let septemberReleaseTotals = septemberReleases.length
    let septemberSpecRequests = Array.from(septemberSpec)
    let septemberSpecTotals = septemberSpecRequests.length
    let septemberSubmittalRequests = Array.from(septemberSubmittal)
    let septemberSubmittalTotals = septemberSubmittalRequests.length
    let octoberBookedOrders = Array.from(octoberBookOrder)
    let octoberBookedOrderTotals = octoberBookedOrders.length
    let octoberBudgetRequest = Array.from(octoberBudget)
    let octoberBudgetRequestTotals = octoberBudgetRequest.length
    let octoberChangeOrders = Array.from(octoberChangeOrder)
    let octoberChangeOrderTotals = octoberChangeOrders.length
    let octoberCsoRequests = Array.from(octoberCso)
    let octoberCsoTotals = octoberCsoRequests.length
    let octoberDrawingRequests = Array.from(octoberDrawing)
    let octoberDrawingTotals = octoberDrawingRequests.length
    let octoberElecRequests = Array.from(octoberElec)
    let octoberElecTotals = octoberElecRequests.length
    let octoberOtherRequests = Array.from(octoberOther)
    let octoberOtherTotals = octoberOtherRequests.length
    let octoberQuoteRequests = Array.from(octoberQuote)
    let octoberQuoteTotals = octoberQuoteRequests.length
    let octoberReleases = Array.from(octoberRelease)
    let octoberReleaseTotals = octoberReleases.length
    let octoberSpecRequests = Array.from(octoberSpec)
    let octoberSpecTotals = octoberSpecRequests.length
    let octoberSubmittalRequests = Array.from(octoberSubmittal)
    let octoberSubmittalTotals = octoberSubmittalRequests.length
    let novemberBookedOrders = Array.from(novemberBookOrder)
    let novemberBookedOrderTotals = novemberBookedOrders.length
    let novemberBudgetRequest = Array.from(novemberBudget)
    let novemberBudgetRequestTotals = novemberBudgetRequest.length
    let novemberChangeOrders = Array.from(novemberChangeOrder)
    let novemberChangeOrderTotals = novemberChangeOrders.length
    let novemberCsoRequests = Array.from(novemberCso)
    let novemberCsoTotals = novemberCsoRequests.length
    let novemberDrawingRequests = Array.from(novemberDrawing)
    let novemberDrawingTotals = novemberDrawingRequests.length
    let novemberElecRequests = Array.from(novemberElec)
    let novemberElecTotals = novemberElecRequests.length
    let novemberOtherRequests = Array.from(novemberOther)
    let novemberOtherTotals = novemberOtherRequests.length
    let novemberQuoteRequests = Array.from(novemberQuote)
    let novemberQuoteTotals = novemberQuoteRequests.length
    let novemberReleases = Array.from(novemberRelease)
    let novemberReleaseTotals = novemberReleases.length
    let novemberSpecRequests = Array.from(novemberSpec)
    let novemberSpecTotals = novemberSpecRequests.length
    let novemberSubmittalRequests = Array.from(novemberSubmittal)
    let novemberSubmittalTotals = novemberSubmittalRequests.length
    let decemberBookedOrders = Array.from(decemberBookOrder)
    let decemberBookedOrderTotals = decemberBookedOrders.length
    let decemberBudgetRequest = Array.from(decemberBudget)
    let decemberBudgetRequestTotals = decemberBudgetRequest.length
    let decemberChangeOrders = Array.from(decemberChangeOrder)
    let decemberChangeOrderTotals = decemberChangeOrders.length
    let decemberCsoRequests = Array.from(decemberCso)
    let decemberCsoTotals = decemberCsoRequests.length
    let decemberDrawingRequests = Array.from(decemberDrawing)
    let decemberDrawingTotals = decemberDrawingRequests.length
    let decemberElecRequests = Array.from(decemberElec)
    let decemberElecTotals = decemberElecRequests.length
    let decemberOtherRequests = Array.from(decemberOther)
    let decemberOtherTotals = decemberOtherRequests.length
    let decemberQuoteRequests = Array.from(decemberQuote)
    let decemberQuoteTotals = decemberQuoteRequests.length
    let decemberReleases = Array.from(decemberRelease)
    let decemberReleaseTotals = decemberReleases.length
    let decemberSpecRequests = Array.from(decemberSpec)
    let decemberSpecTotals = decemberSpecRequests.length
    let decemberSubmittalRequests = Array.from(decemberSubmittal)
    let decemberSubmittalTotals = decemberSubmittalRequests.length

    return (
        <div>
            <h2>YTD Activity</h2>
            <div className="inputDiv">
                <div className="sortForm">
                    <Form.Select className="tableSelect" required size="sm" onChange={(e) => setYear(e.target.value)}>
                        <option value="" hidden>Year</option>
                        {/* <option>All</option> */}
                        <option>2022</option>
                        <option>2021</option>
                        <option>2020</option>
                    </Form.Select>
                </div>
                <div className="sortForm" >
                    <Form.Select className="tableSelect" required size="sm" onChange={(e) => setEmployee(e.target.value)}>
                        <option value="" hidden>Employee</option>
                        {/* <option>All</option> */}
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
                        <option>Warren</option>
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
                </div>
                <div className="sortForm">
                    <Button className="selectButton" onClick={() => FindData(year, month, industry, request, employee)}>Find</Button>
                </div>
            </div>
            <Table responsive striped bordered hover size="sm" style={{ width: "95%", margin: "auto" }}>
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
                        <th>YTD</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Book Order</td>
                        <td>{januaryBookedOrderTotals}</td>
                        <td>{februaryBookedOrderTotals}</td>
                        <td>{marchBookedOrderTotals}</td>
                        <td>{aprilBookedOrderTotals}</td>
                        <td>{mayBookedOrderTotals}</td>
                        <td>{juneBookedOrderTotals}</td>
                        <td>{julyBookedOrderTotals}</td>
                        <td>{augustBookedOrderTotals}</td>
                        <td>{septemberBookedOrderTotals}</td>
                        <td>{octoberBookedOrderTotals}</td>
                        <td>{novemberBookedOrderTotals}</td>
                        <td>{decemberBookedOrderTotals}</td>
                        <td>{januaryBookedOrderTotals + februaryBookedOrderTotals + marchBookedOrderTotals + aprilBookedOrderTotals + mayBookedOrderTotals + juneBookedOrderTotals + julyBookedOrderTotals + augustBookedOrderTotals + septemberBookedOrderTotals + octoberBookedOrderTotals + novemberBookedOrderTotals + decemberBookedOrderTotals}</td>
                    </tr>
                    <tr>
                        <td>Budget $</td>
                        <td>{januaryBudgetRequestTotals}</td>
                        <td>{februaryBudgetRequestTotals}</td>
                        <td>{marchBudgetRequestTotals}</td>
                        <td>{aprilBudgetRequestTotals}</td>
                        <td>{mayBudgetRequestTotals}</td>
                        <td>{juneBudgetRequestTotals}</td>
                        <td>{julyBudgetRequestTotals}</td>
                        <td>{augustBudgetRequestTotals}</td>
                        <td>{septemberBudgetRequestTotals}</td>
                        <td>{octoberBudgetRequestTotals}</td>
                        <td>{novemberBudgetRequestTotals}</td>
                        <td>{decemberBudgetRequestTotals}</td>
                        <td>{januaryBudgetRequestTotals + februaryBudgetRequestTotals + marchBudgetRequestTotals + aprilBudgetRequestTotals + mayBudgetRequestTotals + juneBudgetRequestTotals + julyBudgetRequestTotals + augustBudgetRequestTotals + septemberBudgetRequestTotals + octoberBudgetRequestTotals + novemberBudgetRequestTotals + decemberBudgetRequestTotals}</td>
                    </tr>
                    <tr>
                        <td>Change Order</td>
                        <td>{januaryChangeOrderTotals}</td>
                        <td>{februaryChangeOrderTotals}</td>
                        <td>{marchChangeOrderTotals}</td>
                        <td>{aprilChangeOrderTotals}</td>
                        <td>{mayChangeOrderTotals}</td>
                        <td>{juneChangeOrderTotals}</td>
                        <td>{julyChangeOrderTotals}</td>
                        <td>{augustChangeOrderTotals}</td>
                        <td>{septemberChangeOrderTotals}</td>
                        <td>{octoberChangeOrderTotals}</td>
                        <td>{novemberChangeOrderTotals}</td>
                        <td>{decemberChangeOrderTotals}</td>
                        <td>{januaryChangeOrderTotals + februaryChangeOrderTotals + marchChangeOrderTotals + aprilChangeOrderTotals + mayChangeOrderTotals + juneChangeOrderTotals + julyChangeOrderTotals + augustChangeOrderTotals + septemberChangeOrderTotals + octoberChangeOrderTotals + novemberChangeOrderTotals + decemberChangeOrderTotals}</td>
                    </tr>
                    <tr>
                        <td>CSO Dwg</td>
                        <td>{januaryCsoTotals}</td>
                        <td>{februaryCsoTotals}</td>
                        <td>{marchCsoTotals}</td>
                        <td>{aprilCsoTotals}</td>
                        <td>{mayCsoTotals}</td>
                        <td>{juneCsoTotals}</td>
                        <td>{julyCsoTotals}</td>
                        <td>{augustCsoTotals}</td>
                        <td>{septemberCsoTotals}</td>
                        <td>{octoberCsoTotals}</td>
                        <td>{novemberCsoTotals}</td>
                        <td>{decemberCsoTotals}</td>
                        <td>{januaryCsoTotals + februaryCsoTotals + marchCsoTotals + aprilCsoTotals + mayCsoTotals + juneCsoTotals + julyCsoTotals + augustCsoTotals + septemberCsoTotals + octoberCsoTotals + novemberCsoTotals + decemberCsoTotals}</td>
                    </tr>
                    <tr>
                        <td>Drawing</td>
                        <td>{januaryDrawingTotals}</td>
                        <td>{februaryDrawingTotals}</td>
                        <td>{marchDrawingTotals}</td>
                        <td>{aprilDrawingTotals}</td>
                        <td>{mayDrawingTotals}</td>
                        <td>{juneDrawingTotals}</td>
                        <td>{julyDrawingTotals}</td>
                        <td>{augustDrawingTotals}</td>
                        <td>{septemberDrawingTotals}</td>
                        <td>{octoberDrawingTotals}</td>
                        <td>{novemberDrawingTotals}</td>
                        <td>{decemberDrawingTotals}</td>
                        <td>{januaryDrawingTotals + februaryDrawingTotals + marchDrawingTotals + aprilDrawingTotals + mayDrawingTotals + juneDrawingTotals + julyDrawingTotals + augustDrawingTotals + septemberDrawingTotals + octoberDrawingTotals + novemberDrawingTotals + decemberDrawingTotals}</td>
                    </tr>
                    <tr>
                        <td>Elec Doc's</td>
                        <td>{januaryElecTotals}</td>
                        <td>{februaryElecTotals}</td>
                        <td>{marchElecTotals}</td>
                        <td>{aprilElecTotals}</td>
                        <td>{mayElecTotals}</td>
                        <td>{juneElecTotals}</td>
                        <td>{julyElecTotals}</td>
                        <td>{augustElecTotals}</td>
                        <td>{septemberElecTotals}</td>
                        <td>{octoberElecTotals}</td>
                        <td>{novemberElecTotals}</td>
                        <td>{decemberElecTotals}</td>
                        <td>{januaryElecTotals + februaryElecTotals + marchElecTotals + aprilElecTotals + mayElecTotals + juneElecTotals + julyElecTotals + augustElecTotals + septemberElecTotals + octoberElecTotals + novemberElecTotals + decemberElecTotals}</td>
                    </tr>
                    <tr>
                        <td>Other</td>
                        <td>{januaryOtherTotals}</td>
                        <td>{februaryOtherTotals}</td>
                        <td>{marchOtherTotals}</td>
                        <td>{aprilOtherTotals}</td>
                        <td>{mayOtherTotals}</td>
                        <td>{juneOtherTotals}</td>
                        <td>{julyOtherTotals}</td>
                        <td>{augustOtherTotals}</td>
                        <td>{septemberOtherTotals}</td>
                        <td>{octoberOtherTotals}</td>
                        <td>{novemberOtherTotals}</td>
                        <td>{decemberOtherTotals}</td>
                        <td>{januaryOtherTotals + februaryOtherTotals + marchOtherTotals + aprilOtherTotals + mayOtherTotals + juneOtherTotals + julyOtherTotals + augustOtherTotals + septemberOtherTotals + octoberOtherTotals + novemberOtherTotals + decemberOtherTotals}</td>
                    </tr>
                    <tr>
                        <td>Quote</td>
                        <td>{januaryQuoteTotals}</td>
                        <td>{februaryQuoteTotals}</td>
                        <td>{marchQuoteTotals}</td>
                        <td>{aprilQuoteTotals}</td>
                        <td>{mayQuoteTotals}</td>
                        <td>{juneQuoteTotals}</td>
                        <td>{julyQuoteTotals}</td>
                        <td>{augustQuoteTotals}</td>
                        <td>{septemberQuoteTotals}</td>
                        <td>{octoberQuoteTotals}</td>
                        <td>{novemberQuoteTotals}</td>
                        <td>{decemberQuoteTotals}</td>
                        <td>{januaryQuoteTotals + februaryQuoteTotals + marchQuoteTotals + aprilQuoteTotals + mayQuoteTotals + juneQuoteTotals + julyQuoteTotals + augustQuoteTotals + septemberQuoteTotals + octoberQuoteTotals + novemberQuoteTotals + decemberQuoteTotals}</td>
                    </tr>
                    <tr>
                        <td>Release Mtg</td>
                        <td>{januaryReleaseTotals}</td>
                        <td>{februaryReleaseTotals}</td>
                        <td>{marchReleaseTotals}</td>
                        <td>{aprilReleaseTotals}</td>
                        <td>{mayReleaseTotals}</td>
                        <td>{juneReleaseTotals}</td>
                        <td>{julyReleaseTotals}</td>
                        <td>{augustReleaseTotals}</td>
                        <td>{septemberReleaseTotals}</td>
                        <td>{octoberReleaseTotals}</td>
                        <td>{novemberReleaseTotals}</td>
                        <td>{decemberReleaseTotals}</td>
                        <td>{januaryReleaseTotals + februaryReleaseTotals + marchReleaseTotals + aprilReleaseTotals + mayReleaseTotals + juneReleaseTotals + julyReleaseTotals + augustReleaseTotals + septemberReleaseTotals + octoberReleaseTotals + novemberReleaseTotals + decemberReleaseTotals}</td>
                    </tr>
                    <tr>
                        <td>Spec</td>
                        <td>{januarySpecTotals}</td>
                        <td>{februarySpecTotals}</td>
                        <td>{marchSpecTotals}</td>
                        <td>{aprilSpecTotals}</td>
                        <td>{maySpecTotals}</td>
                        <td>{juneSpecTotals}</td>
                        <td>{julySpecTotals}</td>
                        <td>{augustSpecTotals}</td>
                        <td>{septemberSpecTotals}</td>
                        <td>{octoberSpecTotals}</td>
                        <td>{novemberSpecTotals}</td>
                        <td>{decemberSpecTotals}</td>
                        <td>{januarySpecTotals + februarySpecTotals + marchSpecTotals + aprilSpecTotals + maySpecTotals + juneSpecTotals + julySpecTotals + augustSpecTotals + septemberSpecTotals + octoberSpecTotals + novemberSpecTotals + decemberSpecTotals}</td>
                    </tr>
                    <tr>
                        <td>Sub O/M</td>
                        <td>{januarySubmittalTotals}</td>
                        <td>{februarySubmittalTotals}</td>
                        <td>{marchSubmittalTotals}</td>
                        <td>{aprilSubmittalTotals}</td>
                        <td>{maySubmittalTotals}</td>
                        <td>{juneSubmittalTotals}</td>
                        <td>{julySubmittalTotals}</td>
                        <td>{augustSubmittalTotals}</td>
                        <td>{septemberSubmittalTotals}</td>
                        <td>{octoberSubmittalTotals}</td>
                        <td>{novemberSubmittalTotals}</td>
                        <td>{decemberSubmittalTotals}</td>
                        <td>{januarySubmittalTotals + februarySubmittalTotals + marchSubmittalTotals + aprilSubmittalTotals + maySubmittalTotals + juneSubmittalTotals + julySubmittalTotals + augustSubmittalTotals + septemberSubmittalTotals + octoberSubmittalTotals + novemberSubmittalTotals + decemberSubmittalTotals}</td>
                    </tr>
                </tbody>
            </Table>
        </div >
    )

}

export default DashboardTable