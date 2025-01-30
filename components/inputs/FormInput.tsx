'use client';

import React from "react";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import { MdCurrencyRupee } from "react-icons/md";
import { Input } from "@/components/ui/input"
import { Label } from "../ui/label";

interface InputProps {
    id: string,
    label: string,
    placeholder?: string,
    type?: string,
    disabled?: boolean,
    formatPrice?: boolean,
    required?: boolean,
    register: UseFormRegister<FieldValues>,
    errors: FieldErrors,
}

const FormInput: React.FC<InputProps> = ({
    id,
    label,
    placeholder,
    type,
    disabled,
    formatPrice,
    required,
    register,
    errors,
}) => {
    return (  
        <div className="w-full relative items-center justify-center">
            {formatPrice && (
                <MdCurrencyRupee size={20} className="absolute text-neutral-500 top-8 left-2"/>
            )}
            <Label htmlFor={id} className="ml-1 font-semibold">{label}</Label>
            <Input
                className={`${formatPrice ? "pl-9" : "pl-4 "} ${errors[id] && "border-rose-500 border-2"} ${errors[id] && 'focus:border-rose-500'}`} 
                id={id} type={type} disabled={disabled} placeholder={placeholder} {...register(id, { required })}/>
        </div>
    );
}
 
export default FormInput;