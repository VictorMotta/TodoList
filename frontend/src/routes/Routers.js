import { BrowserRouter, Routes, Route } from "react-router-dom";
import Todolist from "../pages/Todolist/Todolist";

const Routers = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Todolist/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default Routers;