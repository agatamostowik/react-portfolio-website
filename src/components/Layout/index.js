import { Sidebar } from "../Sidebar";
import { Navbar } from "../Navbar";
import {Home} from '../../pages/Home'
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <div className="layout">
      <Navbar />
      <Outlet/>
      <Sidebar />
    </div>
  );
};
