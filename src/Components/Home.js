import Navbar from "./Navbar";
import waves from "../Images/waves.png";
import triangle from "../Images/triangle.png";

export default function Home() {
    return (
        <div className=" text-grayone">
            <Navbar/>
            <div class="font-anton text-[11rem] leading-none ml-[10vh] my-[3rem]">HACKLOOP<br/>SHOWCASE</div>

            <div class="flex absolute right-[40vh] text-[4rem] font-anton align-middle">
                <span class="relative my-auto -rotate-90 text-[2rem] tracking-wider">OUR</span>
                <span class="relative my-auto">PROJECTS</span>
                <a class="relative my-auto ml-[1rem] hover:scale-[1.2] hover:ml-[1rem]" href="./projects.html">
                    <img src={triangle} alt="Triangle" class="max-h-[3rem]"/>
                </a>
            </div>

    
            <img src={waves} alt="Waves" class="absolute top-0 wave-animation h-[150vh] right-[3rem]"/>
    
        </div>
    )
}