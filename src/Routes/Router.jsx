import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import Errors from "../Error/Errors";
import Home from "../Layout/Home/Home";
import Speakers from "../Layout/Pages/Speakers/Speakers";
import Ticket from "../Layout/Pages/Ticket/Ticket";
import About from "../Layout/Pages/About/About";
import Login from "../Layout/Pages/SignUp/Login";
import SignUp from "../Components/SingUp/SignUp";
import PrivetRouts from "./PrivetRouts";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root/>,
        errorElement: <Errors/>,
        children: [
            {
              path: "/",
              element: <Home/>,
            },
            {
              path: "/About",
              element: <PrivetRouts><About/></PrivetRouts>,
            },
            {
              path: "/Speakers",
              element: <PrivetRouts><Speakers/></PrivetRouts>,
            },
            {
              path: "/Ticket",
              element: <PrivetRouts><Ticket/></PrivetRouts>,
            },
            {
              path: "/Login",
              element: <Login/>,
            },
            {
              path: "/SignUp",
              element: <SignUp/>,
            },
           
          ],

    },
]);

export default router;