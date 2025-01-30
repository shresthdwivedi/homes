'use client';

import React from "react";

interface MenuItemProps {
    label?: string,
    onClick: () => void,
}

const MenuItem: React.FC<MenuItemProps> = ({
    onClick,
    label,
}) => {
    return (  
        <div 
            onClick={onClick}
            className="rounded-xl px-4 py-3 hover:bg-neutral-100 transition font-semibold cursor-pointer">
            {label}
        </div>
    );
}
 
export default MenuItem;