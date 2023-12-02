/* eslint-disable no-undef */
import { Outlet } from "react-router-dom";
import Nav from "./Components/Navbare/Nav";
import Footer from "./Components/Footer/Footer";

const Root = () => {
    return (
        <div>
            <Nav />
            <Outlet />


            <Footer />


        </div>
    );
};

export default Root;