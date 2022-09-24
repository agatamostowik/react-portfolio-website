import { Sidebar } from "../Sidebar";
import { Navbar } from "../Navbar";
import { Home } from "../../pages/Home";
import { Outlet } from "react-router-dom";
import "./styles.scss";

export const Layout = () => {
  return (
    <div className="layout">
      <Navbar />
      <div className="content">
        <Outlet />
      </div>

      <Sidebar />
    </div>
  );
};
