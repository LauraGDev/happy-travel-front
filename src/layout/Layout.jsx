import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";

const Layout = () => {
  return (
    <div className="m-2">
      <Header />
      <main className="font-jaldi mb-16">
        
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
