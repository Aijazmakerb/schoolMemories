import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Intro = () => {

    const [isHidden, setIsHidden] = useState(false);

    const hideModal = () => {{
        setIsHidden(true);
    }}

    return (
        <div className="w-full h-full fixed inset-0 z-[1000] bg-black text-white" style={{display : isHidden ? 'none' : 'block'}}>
            <div className="absolute w-[90%] max-w-[1080px] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex flex-col justify-between gap-[40px]">
                <div className="text-8xl font-semibold uppercase sm:text-6xl">Welcome to our memories!</div>
                <div className="text-5xl font-normal text-right leading-[120%] sm:text-2xl">
                    <span>I'm Joshua, an Interaction Designer who is enthusiastic about creating engaging and delightful digital experiences.</span>
                </div>
                <button onClick={hideModal} className="w-[320px] h-[64px] text-xl tracking-wider bg-[#542BEC] font-semibold px-4 py-4 uppercase rounded-[99px] sm:w-full hover:bg-white hover:text-black">
                    <span>Explore memories </span> 
                    <FontAwesomeIcon className="font-black" icon={faArrowRight}/>
                </button>
            </div>
        </div>
    )
}

export default Intro;