import {Button, ButtonLink, ButtonType} from '../blocks/buttonLink'
import Header from "../blocks/header";
import Main from "../blocks/main";
import {SERVICE_ENDPOINT} from "../../utils";
import {useNavigate} from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();
    const startApplication = ()=>{
        const endpoint = `${SERVICE_ENDPOINT}/init`;
        fetch(endpoint)
            .then(data=>data.json())
            .then(json=>{
                const applicationId = json.id;
                navigate(`/application/${applicationId}`);
            })
            .catch();
    };

    return <>
        <Header/>
        <Main progress={25}>
            <h1>Get started with you business loan</h1>
            <Button handler={startApplication} type={ButtonType.INFO} label="Start Application"/>
        </Main>
    </>;
};

export default Home;