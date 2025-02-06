'use client';

import { useCallback } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

interface CounterProps {
  title: string,
  subtitle: string,
  value: number,
  onChange: (value: number) => void,
}

const Counter: React.FC<CounterProps> = ({
  title,
  subtitle,
  value,
  onChange,
}) => {

  const onAdd = useCallback(() => {
    onChange(value+1);
  }, [value, onChange])

  const onReduce = useCallback(() => {
    if(value === 1) {
      return;
    }
    onChange(value-1);
  }, [value, onChange])
  return (
    <div className="flex flex-row items-center justify-between">
      <div className="flex flex-col">
        <div className="font-medium">
          {title}
        </div>
        <div className="text-neutral-500">
          {subtitle}
        </div>
      </div>
      <div className="flex flex-row items-center gap-4">
        <div
          onClick={onReduce}
          className={`${(value === 1) && 'opacity-60 cursor-not-allowed' } flex w-10 h-10 rounded-full border-[1px] border-neutral-400 items-center justify-center text-neutral-600 cursor-pointer hover:opacity-60 transition`}
        >
          <AiOutlineMinus />
        </div>
        <div>
          {value}
        </div>
        <div
          onClick={onAdd}
          className="flex w-10 h-10 rounded-full border-[1px] border-neutral-400 items-center justify-center text-neutral-600 cursor-pointer hover:opacity-60 transition"
        >
          <AiOutlinePlus />
        </div>
      </div>
    </div>
  )
}

export default Counter