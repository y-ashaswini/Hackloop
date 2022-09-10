import Navbar from "./Navbar";

export default function Projects2019() {

    const list_2019 = [
        {id: 1, name: "PROJECT NAME ONE", linkjump:"/Projects/Projects2019"},
        {id: 2, name: "PROJECT NAME TWO", linkjump:"@"},
        {id: 3, name: "PROJECT NAME THREE", linkjump:"@"},
        {id: 4, name: "PROJECT NAME FOUR", linkjump:"@"},
        {id: 5, name: "PROJECT NAME FIVE", linkjump:"@"}
    ]

    return (
        <div>
            <Navbar/>
            <div className="font-extrabold font-archivo text-grayone flex text-[4rem] font-anton align-middle ml-[10vh]">
                    <span className="relative font-extrabold mr-[-1rem] my-auto -rotate-90 text-[1.2rem]">OUR</span>
                    <span className="relative my-auto tracking-tighter">PROJECTS</span>
                    <span className="relative top-[4.5rem] tracking-tight font-black right-[2rem] text-[2rem]">2019</span>
            </div>

            
            
        </div>
    )
}