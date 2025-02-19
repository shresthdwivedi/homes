'use client';

import { BiSearch } from "react-icons/bi";

const Search = () => {
    return ( 
        <div className="w-full md:w-auto border-[1px] py-2 rounded-full shadow-sm hover:shadow-md transition cursor-pointer">
            <div className="flex flex-row items-center justify-between">
                <div className="text-sm px-6 font-semibold hover:text-neutral-700 transition">
                    Anywhere
                </div>
                <div className="hidden sm:block text-sm font-semibold px-6 border-x-[1px] text-center flex-1 hover:text-neutral-700 transition">
                    Any Week
                </div>
                <div className="text-sm text-gray-600 pl-6 pr-2 flex flex-row items-center gap-3">
                    <div className="hidden sm:block hover:text-neutral-800 transition">
                        Add Guests
                    </div>
                    <div className="bg-[#FA6866] rounded-full p-2 text-white">
                        <BiSearch size={18}/>
                    </div>

                </div>
            </div>
        </div>
    );
}
 
export default Search;