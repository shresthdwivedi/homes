'use client';

import useLoginModal from "@/app/hooks/useLoginModal";
import { useCallback, useState } from "react";
import Modal from "./Modal";
import { FieldValues, useForm, SubmitHandler } from 'react-hook-form';
import FormInput from "../inputs/FormInput";
import { signIn } from "next-auth/react"
import { toast } from "sonner";
import { Button } from "../ui/button";
import { AiFillGithub } from "react-icons/ai";
import { useRouter } from "next/navigation";
import useRegisterModal from "@/app/hooks/useRegisterModal";

const LoginModal = () => {

    const router = useRouter();
    const loginModal = useLoginModal();
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
            email: '',
            password: '',
        }
    })

    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        setIsLoading(true);

        signIn('credentials', {
            ...data,
            redirect: false,
        })
        .then((callback) => {
            if(callback?.ok) {
                toast.success('Logged in successfully');
                router.refresh();
                loginModal.onClose();
            }
            else if(callback?.error) {
                toast.error(callback.error);
            }
        })
        .finally(() => {
            setIsLoading(false);
        })
    }

    const bodyContent = (
        <div className="flex flex-col gap-4">
            <FormInput id="email" label="Email" type="email" placeholder="johndoe@gmail.com" register={register} disabled={isLoading} errors={errors} required/>
            <FormInput id="password" label="Password" type="password" register={register} disabled={isLoading} errors={errors} required />
        </div>
    )

    const footerContent = (
        <div className="flex flex-col gap-4 mt-3">
            <hr />
            <Button
                type="submit"
                onClick={() => signIn('github')} 
                className="mt-3"
                variant={"outline"}
            >
                <AiFillGithub/> Continue with GitHub
            </Button>
            <div className="text-neutral-500 text-center mt-2 font-light">
                <div className="flex flex-row items-center justify-center">
                    <p>
                        Don't have an account?
                    </p>
                    <div 
                        onClick={() => {
                            loginModal.onClose();
                            registerModal.onOpen();
                        }}
                        className="ml-1 cursor-pointer hover:text-neutral-800 hover:underline">
                        Register
                    </div>
                </div>
            </div>
        </div>
    )

    return (  
        <div>
            <Modal 
                disabled={isLoading}
                isOpen={loginModal.isOpen}
                title="Sign In"
                description="Log in to your Account"
                actionLabel="Continue"
                onClose={loginModal.onClose}
                onSubmit={handleSubmit(onSubmit)}
                body={bodyContent}
                footer={footerContent}
            />
        </div>
    );
}
 
export default LoginModal;