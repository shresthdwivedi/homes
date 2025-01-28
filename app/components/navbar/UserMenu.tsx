'use client';

import { AiOutlineMenu } from "react-icons/ai";
import Avatar from "../Avatar";
import { useCallback, useState } from "react";
import MenuItem from "./MenuItem";

const UserMenu = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = useCallback(() => {
        setIsOpen((value) => !value);
    }, [])
    return (  
        <div className="relative">
            <div className="flex flex-row items-center gap-3">
                <div 
                    onClick={()=>{}}
                    className="cursor-pointer hidden md:block text-sm font-semibold hover:bg-neutral-100 rounded-full py-3 px-4 transition"
                >
                    Rent your place
                </div>
                <div 
                    onClick={toggleOpen}
                    className="cursor-pointer rounded-full p-4 md:px-2 md:py-2 border-neutral-200 border-[1px] hover:shadow-md transition flex flex-row items-center gap-3 ">
                    <AiOutlineMenu size ={18} />
                    <div className="hidden md:block">
                        <Avatar />
                    </div>
                </div>
            </div>
            {isOpen && (
                <div className="absolute p-4 text-sm right-0 top-14 rounded-xl shadow-md w-[40vw] overflow-hidden md:w-3/4 bg-white">
                    <div className="flex flex-col cursor-pointer">
                        <MenuItem 
                            onClick={()=>{}}
                            label="Register"
                        />
                        <MenuItem 
                            onClick={()=>{}}
                            label="Sign In"
                        />
                    </div>
                </div>
            )}
        </div>
    );
}
 
export default UserMenu;