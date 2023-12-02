import AboutEvent from "../../Components/HomeAllPart/AboutEvent/AboutEvent";
import Speakers from "../../Components/HomeAllPart/EventSpeakars/Speakers";
import Joininfo from "../../Components/HomeAllPart/JoinInfo/Joininfo";
import Slider from "../../Components/HomeAllPart/Slider/Slider";
import Sponsor from "../../Components/HomeAllPart/Sponsor/Sponsor";
import Update from "../../Components/HomeAllPart/Update/Update";

const Home = () => {
    return (
        <div>
            <Slider/>
            <Joininfo/>
            <AboutEvent/>
            <Speakers/>
            <Update/>
            <Sponsor/>
            
        </div>
    );
};

export default Home;