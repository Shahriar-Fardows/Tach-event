import { Link } from 'react-router-dom';
import img from '../../../assets/about_img.png'
import Card from './Card';
const AboutEvent = () => {
    return (
        <div className="bg-[#fafafa] ">
            <div className='grid grid-cols-1 lg:grid-cols-2 justify-items-center lg:max-w-7xl p-5 lg:py-[10rem] lg:mx-auto h-full  ' >
                <div className=' hidden  lg:flex lg:justify-evenly'>
                    <img className='w-[70%]' src={img} alt="hostpic" />
                </div>
                <div >
                    <h1 className=' text-4xl lg:text-6xl text-cyan-500'>About The Event</h1><br />
                    <p className='lg:text-lg '>The Tech Conference is a premier gathering of innovators, <br /> thought leaders, and industry experts converging to explore the latest <br /> advancements and trends in technology. </p><br />
                    <Card/><br />
                    <Link to='/About'><button type="button" className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Learn More....</button></Link>

                </div>

            </div>
        </div>
    );
};

export default AboutEvent;