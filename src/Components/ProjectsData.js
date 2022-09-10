import ProjectsList from "./ProjectsList";

export default function ProjectsData() {
    const list_2019 = [
        {id: 1, name: "PROJECT NAME ONE", linkjump:"/Projects/Projects2019"},
        {id: 2, name: "PROJECT NAME TWO", linkjump:"@"},
        {id: 3, name: "PROJECT NAME THREE", linkjump:"@"},
        {id: 4, name: "PROJECT NAME FOUR", linkjump:"@"},
        {id: 5, name: "PROJECT NAME FIVE", linkjump:"@"}
    ]
    const list_2020 = [
        {id: 1, name: "PROJECT NAME ONE", linkjump:"@"},
        {id: 2, name: "PROJECT NAME TWO", linkjump:"@"},
        {id: 3, name: "PROJECT NAME THREE", linkjump:"@"},
    ]
    const list_2021 = [
        {id: 1, name: "PROJECT NAME ONE", linkjump:"@"},
        {id: 2, name: "PROJECT NAME TWO", linkjump:"@"},
        {id: 3, name: "PROJECT NAME THREE", linkjump:"@"},
        {id: 4, name: "PROJECT NAME FOUR", linkjump:"@"},
        {id: 5, name: "PROJECT NAME FIVE", linkjump:"@"},
        {id: 6, name: "PROJECT NAME SIX", linkjump:"@"}
    ]
    return (
        <div className="flex flex-row justify-around w-[80%] mx-auto">
            <ProjectsList
                year = "2019"
                projects = {list_2019}
            />
            <ProjectsList
                year = "2020"
                projects = {list_2020}
            />
            <ProjectsList
                year = "2021"
                projects = {list_2021}
            />
        </div>
    )
}