import { Link } from 'react-router-dom';
import Navbar from "./Navbar";
import waves from "../Images/waves.png";
import triangle from "../Images/triangle.png";

export default function Home() {
    return (
        <div className=" text-grayone">
            <Navbar/>
            <div className="font-anton text-[11rem] leading-none ml-[10vh] my-[3rem]">HACKLOOP<br/>SHOWCASE</div>

            <div className="absolute left-[40%] font-extrabold font-archivo text-grayone flex text-[4rem] font-anton align-middle ml-[10vh]">
                <span className="relative my-auto -rotate-90 text-[1.2rem]">OUR</span>
                <span className="relative my-auto tracking-tighter">PROJECTS</span>
                <a className="relative my-auto ml-[1rem] hover:scale-[1.2] hover:ml-[1rem]" href="./projects.html">
                    <Link to="/Projects"><img src={triangle} alt="Triangle" className="max-h-[3rem]"/></Link>
                </a>
            </div>

            <div className="grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
                // Put each into this
            </div>

    
            <img src={waves} alt="Waves" className="absolute top-0 wave-animation h-[150vh] right-[3rem]"/>
    
        </div>
    )
}