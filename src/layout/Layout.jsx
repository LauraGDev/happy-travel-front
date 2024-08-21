import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";

const Layout = () => {
  return (
    <>
      <Header />
      <main className="font-jaldi">
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
