import Marquee from "react-fast-marquee";

const Sponsor = () => {
    return (
        <div className="px-9 py-10 ">
            <div className="text-center">
                <h1 className="text-4xl md:text-6xl">Our Great Sponsor</h1><br />
                <p>Visit the event website, register, and follow provided instructions for <br /> access—join remotely or attend in person for an enriching experience.</p>
            </div><br /><br />
            <Marquee>
                <img className="w-[10rem] mr-7" src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt="" />
                <img className="w-[10rem] mr-7" src="https://1000logos.net/wp-content/uploads/2016/11/Facebook-Logo.png" alt="" />
                <img className="w-[10rem] mr-7" src="https://i.pinimg.com/564x/50/09/bf/5009bfe7a84ab286619f8ed78093575a.jpg" alt="" />
                <img className="w-[10rem] mr-7" src="https://i.pinimg.com/564x/ad/78/5a/ad785a9fb1587a496092b3d2f4e912b8.jpg" alt="" />
                <img className="w-[10rem] mr-7" src="https://i.pinimg.com/736x/87/60/49/8760495daee56b8d2aefebc7854007fb.jpg" alt="" />
                <img className="w-[5rem] mr-7" src="https://i.pinimg.com/564x/7f/55/9f/7f559f4efe9a22946226ab7d29b4306e.jpg" alt="" />
                <img className="w-[5rem] mr-7" src="https://i.pinimg.com/564x/c6/fd/83/c6fd83f6fb89d78a36b399d33c31beb2.jpg" alt="" />
                <img className="w-[3rem] mr-7" src="https://i.pinimg.com/564x/8f/f7/83/8ff78354692268f708a339f187bc90cc.jpg" alt="" />
                <img className="w-[3rem] mr-7" src="https://i.pinimg.com/564x/6c/3d/45/6c3d452ab5ed9c507a28c8268718fa36.jpg" alt="" />
                <img className="w-[3rem] mr-7" src="https://i.pinimg.com/736x/6d/54/95/6d54950f0a7fb5e9e463ffe05dc2d73d.jpg" alt="" />
                <img className="w-[5rem] mr-7" src="https://i.pinimg.com/564x/46/82/e5/4682e597526d2c993d537aeab6c3b0df.jpg" alt="" />
                <img className="w-[5rem] mr-7" src="https://i.pinimg.com/564x/fd/b5/4e/fdb54e3c509e8609252856da12d49a54.jpg" alt="" />
                <img className="w-[5rem] mr-7" src="https://i.pinimg.com/564x/05/0a/c9/050ac92cb432973286bbba0b3637f17c.jpg" alt="" />

            </Marquee>
        </div>
    );
};

export default Sponsor;