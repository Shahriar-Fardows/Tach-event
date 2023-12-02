import { AiFillAudio,AiTwotoneApi  } from "react-icons/ai";
import { GiBlackHoleBolas } from "react-icons/gi";
import { TbUserBolt } from "react-icons/tb";

const Card = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className=" flex justify-center max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <AiFillAudio className="text-4xl	text-cyan-500" />
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Great Speakers</h5>

            </div>
            <div className=" flex justify-center max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <AiTwotoneApi  className="text-4xl	text-cyan-500" />
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Interactive Floor </h5>

            </div>
            <div className=" flex justify-center max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <GiBlackHoleBolas className="text-4xl	text-cyan-500" />
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Best Participant</h5>

            </div>
            <div className=" flex justify-center max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <TbUserBolt className="text-4xl	text-cyan-500" />
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">new people</h5>

            </div>


        </div>
    );
};

export default Card;