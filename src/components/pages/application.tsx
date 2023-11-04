import Header from "../blocks/header";
import Main from "../blocks/main";
import {Button, ButtonType} from "../blocks/buttonLink";
import styles from './application.module.css';
import {ChangeEvent, MouseEvent, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";

const Application = () => {
    const [loading, setLoading] = useState(false);
    const [businessId, setBusinessId] = useState("");
    const [loanAmount, setLoanAmount] = useState<number>(0);
    const [accountingProvider, setAccountingProvider] = useState("0");
    const navigate = useNavigate();
    const {applicationId} = useParams();

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const name = e.target.name;
        const value = e.target.value;
        switch (name) {
            case 'businessId':
                setBusinessId(value);
                return;
            case 'loanAmount':
                setLoanAmount(parseInt(value));
                return;
            case 'accountingProvider':
                setAccountingProvider(value);
                return;
            default:
                console.error(`Invalid event target: ${name}`);
        }
    }

    const getLabel = (): string => {
        return loading ? 'Loading...' : 'Request Balance Sheet';
    }

    const isButtonDisabled = (): boolean => {
        return loading || (!businessId) || (!loanAmount) || (!accountingProvider);
    }

    const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
        navigate(`/review/${applicationId}?businessId=${businessId}&loanAmount=${loanAmount}&accountingProvider=${accountingProvider}`);
    }

    return <>
        <Header/>
        <Main progress={50}>
            <h1>Enter your details</h1>
            <section className={styles.formContainer}>
                <p><input name="businessId"
                          id="businessId"
                          value={businessId}
                          onChange={handleChange}
                          placeholder="Enter business id"/></p>
                <p><input name="loanAmount"
                          id="loanAmount"
                          type="number"
                          value={loanAmount}
                          onChange={handleChange}
                          placeholder="Enter loan amount" min={0}/></p>
                <p>
                    <select name="accountingProvider"
                            id="accountingProvider"
                            value={accountingProvider}
                            onChange={handleChange}
                    >
                        <option disabled hidden value="0">Select Accounting Provider</option>
                        <option value="xero">Xero</option>
                        <option value="myob">MYOB</option>
                    </select>
                </p>
            </section>
            <Button handler={handleClick} type={ButtonType.INFO} label={getLabel()} disabled={isButtonDisabled()}/>
        </Main>
    </>;
}

export default Application;