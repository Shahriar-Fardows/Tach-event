/* eslint-disable react/prop-types */
import { useContext } from "react";
import { Context } from "../Context/Contexts";
import { Navigate, useLocation } from "react-router-dom";

const PrivetRouts = ({ children }) => {
    const { user } = useContext(Context);
    const ip = useLocation();
    console.log(ip)
    if (user) {
       return children;
    }
    return <Navigate state={ip.pathname} to='/SignUp'></Navigate>
};

export default PrivetRouts;