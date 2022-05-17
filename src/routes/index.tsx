import { BrowserRouter, Route, Routes } from "react-router-dom"
import CEP from "../pages/CEP"
import Home from "../pages/Home"

const PrincipalRoutes = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cep" element={<CEP />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default PrincipalRoutes