import Home from "./components/pages/home";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Application from "./components/pages/application";
import Review from "./components/pages/review";
import Outcome from "./components/pages/outcome";

const App = () => <>
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/application/:applicationId" element={<Application/>}/>
            <Route path="/review/:applicationId" element={<Review/>}/>
            <Route path="/outcome/:applicationId" element={<Outcome/>}/>
        </Routes>
    </BrowserRouter>
</>;

export {App};

