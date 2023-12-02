import { useEffect, useState } from "react";
import TicketData from "../../../Components/TIcket/TicketData";

const Ticket = () => {
    const [datas, setDatas] = useState([]);

    useEffect(() => {
        fetch('ticket.json')
            .then(res => res.json())
            .then(data => setDatas(data))
    }, [])

    return (
        <div className="grid grid-cols-1 lg:grid-cols-4 max-w-[100rem] gap-5 py-20 mx-auto">
            {
                datas.map(data => <TicketData key={data.id} data={data}   />)
            }
        </div>
    );
};

export default Ticket;