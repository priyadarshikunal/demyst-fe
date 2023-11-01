import Header from "../blocks/header";
import Main from "../blocks/main";

const Outcome = ()=>{
    return <>
        <Header/>
        <Main progress={100}>
            <h1>Success</h1>
        </Main>
    </>
};

export default Outcome;