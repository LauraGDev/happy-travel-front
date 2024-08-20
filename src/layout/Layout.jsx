import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";



const Layout = () => {
    return (
        <>
            <Navbar />
            <main>
                <Outlet /> 

            </main>
            <Footer />

        </>
    )
}

export default Layout;