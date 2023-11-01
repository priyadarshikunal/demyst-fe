import {ButtonLink, ButtonType} from '../blocks/buttonLink'
import Header from "../blocks/header";
import Main from "../blocks/main";

const Home = () => {
    return <>
        <Header/>
        <Main progress={25}>
            <h1>Get started with you business loan</h1>
            <ButtonLink to='/application' type={ButtonType.INFO} label="Start Application"/>
        </Main>
    </>;
};

export default Home;