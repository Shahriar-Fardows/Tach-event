import InfoCard from "./InfoCard";

const Joininfo = () => {
    return (
        <div className="px-9 py-32">
            <div className="text-center">
                <h1 className="text-4xl md:text-6xl">How To Join Events</h1><br />
                <p>Visit the event website, register, and follow provided instructions for <br /> access—join remotely or attend in person for an enriching experience.</p>
            </div><br /><br />
            <div>
                <InfoCard />
            </div>
        </div>
    );
};

export default Joininfo;