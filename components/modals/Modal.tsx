'use client';

import { useCallback, useEffect, useState } from "react";
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

interface ModalProps {
  title?: string,
  description?: string,
  body?: React.ReactElement,
  footer?: React.ReactElement,
  actionLabel: string,
  disabled?: boolean,
  secondaryActionLabel?: string,
  secondaryAction?: () => void,
  isOpen?: boolean,
  onClose: () => void,
  onSubmit: () => void,
}

const Modal: React.FC<ModalProps> = ({
  title,
  description,
  body,
  footer,
  actionLabel,
  disabled,
  secondaryActionLabel,
  secondaryAction,
  isOpen,
  onClose,
  onSubmit,
}) => {

  const [showModal, setShowModal] = useState(isOpen);

  useEffect(() => {
    setShowModal(isOpen);
  }, [isOpen])

  const handleClose = useCallback(() => {
    if(disabled){
      return;
    }
    setShowModal(false);
    setTimeout(() => {
      onClose();
    }, 300)
  }, [disabled, onClose])

  const handleSubmit = useCallback(() => {
    if(disabled){
      return;
    }

    onSubmit();
  }, [disabled, onSubmit])

  const handleSecondaryAction = useCallback(() => {
    if(disabled || !secondaryAction) {
      return;
    }
    secondaryAction();
  }, [disabled, secondaryAction])

  if(!isOpen) {
    return null;
  }
  return (  
    <>
      <Dialog open={showModal} onOpenChange={handleClose}>
          <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>{title}</DialogTitle>
                <DialogDescription>
                  {description}
                </DialogDescription>
              </DialogHeader>
              {body}
              <DialogFooter>
                {secondaryActionLabel && secondaryAction && (
                  <Button disabled={disabled} onClick={handleSecondaryAction}>{secondaryActionLabel}</Button>
                )}
                <Button disabled={disabled} className="bg-[#FA6866]" onClick={handleSubmit}>{actionLabel}</Button>
              </DialogFooter>
          </DialogContent>
      </Dialog>
    </>
  )
}
 
export default Modal;