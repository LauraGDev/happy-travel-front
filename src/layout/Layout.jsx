import { Outlet } from "react-router-dom";
/* import Navbar from "../components/navbar/Navbar"; */
import Detail from "../pages/Detail";



const Layout = () => {
    return (
        <>
            <Detail />
            <main className="font-jaldi">
                <Outlet /> 
            
            </main>


        </>
    )
}

export default Layout;