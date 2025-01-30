'use client';

import useRegisterModal from "@/app/hooks/useRegisterModal";
import { useState } from "react";
import Modal from "./Modal";
import { FieldValues, useForm, SubmitHandler } from 'react-hook-form';
import axios from 'axios';
import FormInput from "../inputs/FormInput";
import { toast } from "sonner";
import { Button } from "../ui/button";
import { AiFillGithub } from "react-icons/ai";

const RegisterModal = () => {

    const registerModal = useRegisterModal();
    const [isLoading, setIsLoading] = useState(false);

    const { 
        register, 
        handleSubmit,
        formState: {
            errors,
        } 
    } = useForm<FieldValues>({
        defaultValues: {
            name: '',
            email: '',
            password: '',
        }
    })

    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        try {
            setIsLoading(true);
            await axios.post('/api/register', data)
            registerModal.onClose();
        } catch(error) {
            console.error(error);
            toast.error('Something went wrong');
        } finally {
            setIsLoading(false);
        }
        
    }

    const bodyContent = (
        <div className="flex flex-col gap-4">
            <FormInput id="email" label="Email" type="email" placeholder="johndoe@gmail.com" register={register} disabled={isLoading} errors={errors} required/>
            <FormInput id="name" label="Name" type="text" placeholder="John Doe" register={register} disabled={isLoading} errors={errors} required />
            <FormInput id="password" label="Password" type="password" register={register} disabled={isLoading} errors={errors} required />
        </div>
    )

    const footerContent = (
        <div className="flex flex-col gap-4 mt-3">
            <hr />
            <Button className="mt-3"
                variant={"outline"}
            >
                <AiFillGithub/> Continue with GitHub
            </Button>

        </div>
    )

    return (  
        <div>
            <Modal 
                disabled={isLoading}
                isOpen={registerModal.isOpen}
                title="Register"
                description="Create an Account"
                actionLabel="Continue"
                onClose={registerModal.onClose}
                onSubmit={handleSubmit(onSubmit)}
                body={bodyContent}
                footer={footerContent}
            />
        </div>
    );
}
 
export default RegisterModal;