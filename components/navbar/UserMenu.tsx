'use client';

import { AiOutlineMenu } from "react-icons/ai";
import Avatar from "../Avatar";
import { useCallback, useState } from "react";
import MenuItem from "./MenuItem";
import useRegisterModal from "@/app/hooks/useRegisterModal";
import useLoginModal from "@/app/hooks/useLoginModal";
import { User } from "@prisma/client";
import { signOut } from "next-auth/react";

interface UserMenuProps {
    currentUser?: User | null,
}

const UserMenu: React.FC<UserMenuProps> = ({
    currentUser,
}) => {

    const registerModal = useRegisterModal();
    const loginModal = useLoginModal();

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
                        <Avatar src={currentUser?.image}/>
                    </div>
                </div>
            </div>
            {isOpen && (
                <div className="absolute p-4 text-sm right-0 top-14 rounded-xl shadow-md w-[40vw] overflow-hidden md:w-3/4 bg-white">
                    <div className="flex flex-col cursor-pointer">
                        {currentUser ? (
                            <>
                                <MenuItem 
                                    onClick={() => {}} 
                                    label="My trips"
                                />
                                <MenuItem 
                                    onClick={() => {}}
                                    label="My favorites"
                                />
                                <MenuItem 
                                    onClick={() => {}}
                                    label="My reservations"
                                />
                                <MenuItem 
                                    onClick={() => {}}
                                    label="My properties"
                                />
                                <MenuItem 
                                    onClick={() => {}}
                                    label="Rent my Place"
                                />
                                <hr />
                                <MenuItem 
                                    onClick={() => signOut()}
                                    label="Logout"
                                />
                            </>                   
                        ) : (
                            <>
                                <MenuItem 
                                    onClick={registerModal.onOpen}
                                    label="Register"
                                />
                                <MenuItem 
                                    onClick={loginModal.onOpen}
                                    label="Sign In"
                                />
                            </>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}
 
export default UserMenu;