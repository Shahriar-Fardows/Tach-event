import { useEffect, useState } from "react";
import Speaker from "../../../Components/Speakers/Speaker";
import {Helmet} from "react-helmet";


const Speakers = () => {
    const [datas , setDatas] = useState([]);

    useEffect(() => {
        fetch('api.json')
            .then(res => res.json())
            .then(data => setDatas(data))
    }, [])

    return (
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-10 justify-items-center">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Speakers</title>
               
            </Helmet>
            {
                datas.map(data => <Speaker key={data.id} data={data}   />)
            }
        </div>
    );
};

export default Speakers;