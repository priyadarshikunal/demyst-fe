import Main from "../blocks/main";
import Header from "../blocks/header";
import {ButtonLink, ButtonType} from "../blocks/buttonLink";

const Review = ()=>{
    return <>
        <Header/>
        <Main progress={75}>
            <h1>Review Balance Sheet</h1>
            <ButtonLink to={'/outcome'} type={ButtonType.INFO} label={'Submit Application'}/>
        </Main>
    </>
};

export default Review;