import logo from '../Images/logo.png';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <div className="font-anton justify-between flex py-[2rem] pl-[10vh] pr-[30vh] m-0 p-0 text-grayone overflow-hidden">
            <Link to="/"><img src={logo} alt="Logo-IEEE" class="max-w-[25vh]"/></Link>
            <div className="flex justify-around w-[50%]">
                <Link className="my-auto underline-animation active:bg-grayone active:text-offwhite active:py-1 active:px-2" to="./Projects">
                    PROJECTS
                </Link>
                <Link className="my-auto underline-animation" to="./About">
                    ABOUT
                </Link>
            </div>
        </div>
    )
}