
import { useEffect, useState } from "react";
import Spdata from "./Spdata";
import { Link } from "react-router-dom";


const Speakers = () => {

    const [datas, setDatas] = useState([]);
    console.log(datas)

    useEffect(() => {
        fetch('api.json')
            .then(res => res.json())
            .then(data => setDatas(data))
    }, [])


    return (

        <div className="max-w-[100rem] mx-auto px-9 py-10 lg:py-32">
            <div className="text-center">
                <h1 className="text-4xl md:text-6xl">Event Speakers</h1><br />
                <p>Visit the event website, register, and follow provided instructions for <br /> access—join remotely or attend in person for an enriching experience.</p>
            </div><br /><br />

            <div className="grid grid-cols-1 gap-5 lg:grid-cols-4 justify-items-center lg:max-w-full   lg:mx-auto">
                {
                    datas.slice(0, 4).map(data => <Spdata key={data.id} data={data} />)
                }
            </div><br />
            <div className="flex justify-center">
               <Link to='/Speakers'> <button type="button" className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">See More....</button></Link>
            </div>

        </div>

    );
};

export default Speakers;