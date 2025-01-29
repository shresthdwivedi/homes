'use client';

import useRegisterModal from "@/app/hooks/useRegisterModal";
import { useState } from "react";
import Modal from "./Modal";

const RegisterModal = () => {

    const registerModal = useRegisterModal();
    const [isLoading, setIsLoading] = useState(false);

    
    return (  
        <div>
            <Modal 
                isOpen={registerModal.isOpen}
            />
        </div>
    );
}
 
export default RegisterModal;