import { Link } from "react-router-dom";
import { CiReceipt, CiMicrophoneOn } from "react-icons/ci";
import { AiFillSnippets } from "react-icons/ai";



const InfoCard = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 justify-items-center lg:max-w-7xl  gap-5 lg:mx-auto">
            <div className="card card-compact w-96 bg-base-100 shadow-xl ">
                <figure><AiFillSnippets className="text-8xl	text-cyan-500" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Chceck Schedule</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore gravida.
                        Get Now</p>
                    <div className="card-actions justify-end">
                        <Link to='/Ticket'><button type="button" className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">See Now</button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl ">
                <figure><CiMicrophoneOn className="text-8xl	text-cyan-500" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Choice Speaker</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore gravida.
                        Get Now</p>
                    <div className="card-actions justify-end">
                        <Link to='/Speakers'><button type="button" className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">See Now</button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl ">
                <figure><CiReceipt className="text-8xl	text-cyan-500" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Booking Events</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore gravida.
                        Get Now</p>
                    <div className="card-actions justify-end">
                        <Link to="/Ticket"><button type="button" className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">See Now</button>
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default InfoCard;