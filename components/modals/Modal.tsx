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

  const handleClose = useCallback(() => {
    if(disabled){
      return;
    }
    onClose();
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
      <Dialog open={isOpen} onOpenChange={handleClose}>
          <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>{title}</DialogTitle>
                <DialogDescription>
                  {description}
                </DialogDescription>
              </DialogHeader>
              <hr />
              {body}
              <DialogFooter>
                {secondaryActionLabel && secondaryAction && (
                  <Button className="w-full" disabled={disabled} variant={"outline"} onClick={handleSecondaryAction}>{secondaryActionLabel}</Button>
                )}
                <Button className="w-full" disabled={disabled} onClick={handleSubmit}>{actionLabel}</Button>
              </DialogFooter>
              {footer}
          </DialogContent>
      </Dialog>
    </>
  )
}
 
export default Modal;