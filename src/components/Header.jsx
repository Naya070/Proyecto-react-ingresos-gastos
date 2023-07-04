import { AiFillSetting } from "react-icons/ai";
import { MdWorkHistory } from "react-icons/md";


export function Header() {
    return (
        <div className="flex flex-row justify-around bg-zinc-600 
            text-lg font-bold text-center w-full my-5 rounded-md">
            <div className="flex my-5 justify-between ">
                <div className="text-2xl"><MdWorkHistory/></div>
                History
            </div>
            <div className="text-lg font-bold text-normal my-5">
                Accounting Record App
            </div>
            <div className="my-5 text-2xl "><AiFillSetting/></div>
            
        </div>
    )
}