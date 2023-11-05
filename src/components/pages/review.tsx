import Main from "../blocks/main";
import Header from "../blocks/header";
import {Button, ButtonLink, ButtonType} from "../blocks/buttonLink";
import {useQuery} from "../../hooks/useQuery";
import {useEffect, useState} from "react";
import {SERVICE_ENDPOINT} from "../../utils";
import {useNavigate, useParams} from "react-router-dom";

const Review = () => {
    const query = useQuery();
    const [balanceSheet, setBalanceSheet] = useState({});
    const navigate = useNavigate();
    const {applicationId} = useParams();

    useEffect(() => {
        const businessId = query.get('businessId');
        const loanAmount = query.get('loanAmount');
        const accountingProvider = query.get('accountingProvider');
        const endpoint = `${SERVICE_ENDPOINT}/balancesheet/${applicationId}?loanAmount=${loanAmount}&businessId=${businessId}&accountingProvider=${accountingProvider}`;
        fetch(endpoint)
            .then(data => data.json())
            .then(json => setBalanceSheet(json))
            .catch();
    },[])

    function submitApplication() {
        const businessId = query.get('businessId');
        navigate(`/outcome/${applicationId}`)
    }

    return <>
        <Header/>
        <Main progress={75}>
            <h1>Review Balance Sheet</h1>
            <pre>
                {JSON.stringify(balanceSheet, null, 2)}
            </pre>
            <Button handler={submitApplication}  type={ButtonType.INFO} label={'Submit Application'}/>
        </Main>
    </>
};

export default Review;