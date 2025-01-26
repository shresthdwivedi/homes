'use client';

import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
    const router = useRouter();
    return ( 
        <Image 
            src="/logo.svg"
            alt="Logo"
            height="50"
            width="50"
            className="hidden md:block cursor-pointer"
        />
    );
}
 
export default Logo;