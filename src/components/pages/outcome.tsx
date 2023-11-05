import Header from "../blocks/header";
import Main from "../blocks/main";
import {useEffect, useState} from "react";
import {useParams} from 'react-router-dom';
import {SERVICE_ENDPOINT} from "../../utils";

interface IOutcome {
    requestedLoanAmount?:Number,
    approvedLoanAmount?:Number,
    preAssessment?: Number
}

const Outcome = ()=>{
    const [outcome, setOutcome] = useState<IOutcome>(null);
    const {applicationId} = useParams();

    useEffect(()=>{
        fetch(`${SERVICE_ENDPOINT}/outcome/${applicationId}`)
            .then(data=>data.json())
            .then(json=>setOutcome(json.outcome))
            .catch();
    }, []);

    return <>
        <Header/>
        <Main progress={100}>
            <h1>Business Loan Request Outcome</h1>
            {outcome &&
                <>
                    <h2>Requested Loan Amount: {outcome.requestedLoanAmount!}</h2>
                    <h2>Approved Loan Amount: {outcome.approvedLoanAmount!}</h2>
                    <p>Your approved amount reflects your business's performance during last twelve months.</p>
                    <p>Calculated at ${outcome.preAssessment}% of requested amount.</p>
                </>
            }
        </Main>
    </>
};

export default Outcome;