import { useContext } from "react"
import { Route, Routes } from "react-router-dom"
import { AppContext } from "./components/AppContext"
import { Conta } from "./pages/Conta"
import { ContaInfo } from "./pages/ContaInfo/index"
import { Home } from "./pages/Home"

export const MainRoutes = () => {
    const { isLoggedIn } = useContext(AppContext)

    return(
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/conta/:id' element={ isLoggedIn ? <Conta /> : <Home/> } />
            <Route path='/conta/:id/infoconta' element={ isLoggedIn ? <ContaInfo /> : <Home/> } />
        </Routes>
    )
}
