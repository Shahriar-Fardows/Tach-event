/* eslint-disable no-undef */
import { Outlet } from "react-router-dom";
import Nav from "./Components/Navbare/Nav";
import Footer from "./Components/Footer/Footer";
import {Helmet} from "react-helmet";


const Root = () => {
    return (
        <div>
             <Helmet>
                <meta charSet="utf-8" />
                <title>Home</title>
                <link rel="shortcut icon" href="/src/assets/favicon.ico" type="image/x-icon" />
            </Helmet>
            <Nav />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Root;