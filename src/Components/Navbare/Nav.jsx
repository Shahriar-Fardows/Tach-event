import { Link, NavLink } from "react-router-dom"
import './Nav.css'
import logo from '../../assets/Screenshot_2023-12-01_015410-removebg-preview.png'
import { useContext } from "react";
import { Context } from "../../Context/Contexts";

const Nav = () => {
    const { user , LogOut } = useContext(Context);

    // const SignOut = () =>{
    //     LogOut()

    // }


    const link = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/About'>About</NavLink></li>
        <li><NavLink to='/Speakers'>Speakers</NavLink></li>
        <li><NavLink to='/Ticket'>Ticket</NavLink></li>
    </>

    return (
        <div className="navbar bg-base-100 flex justify-between lg:justify-around">
            <div className="">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {link}
                    </ul>
                </div>

                <Link to='/' className="btn btn-ghost text-xl text-cyan-500"><img src={logo} className="h-8" alt="Tach-Nex-logo" />Tach-Nex</Link>
            </div>
            <div className=" hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {link}
                </ul>
            </div>
            <div>
                <div className="">
                    {
                        user ?
                        <Link onClick={()=> LogOut()} className=" p-2 "><button type="button" className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Sign Out</button> </Link>
                            :
                            <Link to='/Login' className=" p-2 "><button type="button" className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Sign up</button> </Link>
                    }
                </div>
            </div>
        </div>


    );
};

export default Nav;