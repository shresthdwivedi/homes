import React from 'react'
import { IconType } from 'react-icons/lib'

interface CategoryInputProps {
    label: string,
    selected?: boolean,
    icon: IconType,
    onClick: (value: string) => void,
}

const CategoryInput: React.FC<CategoryInputProps> = ({
    label,
    selected,
    icon: Icon,
    onClick,
}) => {
  return (
    <div
        onClick={() => onClick(label)}
        className={`${selected && 'border-neutral-800'} w-full rounded-xl border-2 p-4 flex flex-col gap-3 hover:border-neutral-800 transition cursor-pointer`}
    >
        <Icon size={30}/>
        <div className='font-semibold'>
            {label}
        </div>
    </div>
  )
}

export default CategoryInput