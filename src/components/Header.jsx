import { AiFillSetting } from "react-icons/ai";
import { MdWorkHistory } from "react-icons/md";


export function Header() {
    return (
        <div className="flex flex-row justify-around bg-zinc-600 
            text-2lg font-bold text-center w-full my-5 rounded-md">
            <div className="flex my-5 justify-between "><MdWorkHistory/>History</div>
            <div className=" bg-red-600 text-lg font-bold text-normal my-5">
                Expense Tracker
            </div>
            <div className="my-5"><AiFillSetting/></div>
            
        </div>
    )
}