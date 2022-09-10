import { Link } from "react-router-dom";
import triangle from "../Images/triangle.png";

export default function ProjectsList(props) {
    // props.projects.map(animal => console.log(animal.name));
    // console.log(props.projects);
    return (
        <div className="flex flex-col text-grayone font-archivo">
            <div className="text-[4rem] relative left-[-10vh]">{props.year}</div>
            {props.projects.map(each_proj=>(
                <Link key={each_proj.id} to={each_proj.linkjump}>
                    <div className="flex my-1">
                        <img src={triangle} className="w-[15px] h-[15px] my-auto mr-[10px] tracking-wide "/>
                        <div className="underline-animation text-[1rem] cursor-pointer">{each_proj.name}</div>
                    </div>
                </Link>
            ))}
        </div>
    )
}