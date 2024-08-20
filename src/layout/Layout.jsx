import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";



const Layout = () => {
    return (
        <>
            {/* <Navbar /> */}
      
            <main className="font-jaldi">

      
                <Outlet /> 
            </main>

        </>
    )
}

export default Layout;