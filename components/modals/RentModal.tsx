'use client'

import React, { useMemo, useState } from 'react'
import Modal from './Modal'
import useRentModal from '@/app/hooks/useRentModals';
import { categories } from '../navbar/Categories';
import CategoryInput from '../inputs/CategoryInput';
import { FieldValues, useForm } from 'react-hook-form';
import CountrySelect from '../inputs/CountrySelect';
import Map from '../Map';

enum STEPS {
    CATEGORY = 0,
    LOCATION = 1,
    INFO = 2,
    IMAGES = 3,
    DESCRIPTION = 4,
    PRICE = 5,
}

const RentModal = () => {

    const [step, setStep] = useState(STEPS.CATEGORY);

    const rentModal = useRentModal();

    const { 
        register, 
        handleSubmit, 
        watch, 
        setValue, 
        formState: { 
            errors, 
        }, 
        reset 
    } = useForm<FieldValues>({
        defaultValues: {
            category: '',
            location: null,
            guestCount: 1,
            roomCount: 1,
            bathroomCount: 1,
            imageSrc: '',
            price: 1,
            title: '',
            description: '',             
        }
    });

    
    const category = watch('category');
    const location = watch('location');

    const setCustomValue = (id: string, value: any) => {
        setValue(id, value, {
            shouldValidate: true,
            shouldTouch: true,
            shouldDirty: true,
        })
    }
    
    const onBack = () => {
        setStep((value) => value-1)
    }

    const onNext = () => {
        setStep((value) => value+1)
    }

    const actionLabel = useMemo(() => {
        if(step === STEPS.PRICE) {
            return 'Create';
        }

        return 'Next';
    }, [step]);

    const secondaryActionLabel = useMemo(() => {
        if(step === STEPS.CATEGORY) {
            return undefined;
        }

        return 'Back';
    }, [step])

    let bodyContent = (
        <div className='flex flex-col gap-6'>
            <div className='text-neutral-400'>
                <div className='text-black font-semibold text-xl mb-2'>
                    Which of these best describes your place? 
                </div>
                Pick a category
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 overflow-y-auto gap-3 max-h-[50vh]'>
                {categories.map((item) => (
                    <div 
                        className='flex flex-row gap-2 items-center justify-start'
                        key={item.label}
                        >
                        <CategoryInput 
                            onClick={(category) => {
                                setCustomValue('category', category)
                            }}
                            label={item.label}
                            selected={category === item.label}
                            icon={item.icon}
                        />
                    </div>
                ))}
            </div>
        </div>
    )

    if (step === STEPS.LOCATION) {
        bodyContent = (
            <div className='flex flex-col gap-6'>
                <div className='text-neutral-400'>
                    <div className='text-black font-semibold text-xl mb-2'>
                        Where is your place located?
                    </div>
                     Help guests find you!
                </div>
                <CountrySelect 
                    value={location}
                    onChange={(value) => setCustomValue('location', value)}
                />
                <Map center={location} />
            </div>
        )
    }

    if (step === STEPS.INFO) {
        bodyContent = (
            <div>

            </div>
        )
    }

    return (
        <Modal 
            title='Rent your place'
            actionLabel={actionLabel}
            isOpen={rentModal.isOpen}
            onClose={rentModal.onClose}
            onSubmit={step === STEPS.PRICE ? rentModal.onClose : onNext}
            secondaryActionLabel={secondaryActionLabel}
            secondaryAction={step === STEPS.CATEGORY ? undefined : onBack}
            body={bodyContent}
        />
    )
}

export default RentModal