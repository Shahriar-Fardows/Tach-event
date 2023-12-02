/* eslint-disable react/prop-types */


const Spdata = ({ data }) => {

    const { image, name, title } = data;

    return (
        <div className=" w-[22rem] bg-white  rounded-lg shadow dark:bg-gray-800 ">
            <div className="card w-full bg-base-100 shadow-xl">
                <figure><img className="w-[50vh]" src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-cyan-300">{name}</h2>
                    <p>{title}</p>
                </div>
            </div>
        </div>
    );
};

export default Spdata;