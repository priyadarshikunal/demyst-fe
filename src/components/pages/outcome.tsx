import Header from "../blocks/header";
import Main from "../blocks/main";
import {useEffect, useState} from "react";
import {useParams} from 'react-router-dom';
import {SERVICE_ENDPOINT} from "../../utils";

const Outcome = ()=>{
    const [outcome, setOutcome] = useState('');
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
            <h1>{outcome}</h1>
        </Main>
    </>
};

export default Outcome;