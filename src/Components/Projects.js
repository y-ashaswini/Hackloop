import { Link } from 'react-router-dom';
import Navbar from "./Navbar";
// import ProjectsList from './ProjectsList';
import ProjectsData from './ProjectsData';
import triangle from "../Images/triangle.png";

export default function Projects() {
    return (
        <div>
            <Navbar/>
            <div className="font-extrabold font-archivo text-grayone flex text-[4rem] font-anton align-middle ml-[10vh]">
                    <span className="relative my-auto font-extrabold mr-[-1rem] -rotate-90 text-[1.2rem]">OUR</span>
                    <span className="relative my-auto tracking-tighter">PROJECTS</span>
            </div>
            
            <ProjectsData/>
       </div>
    )
}