import React from 'react'
import { Input, UpdateScoresType } from '../../types/UpdateScoresModalTypes'
import { UseFormRegister, FieldErrors } from 'react-hook-form';

interface InputItemProps {
    inputFor : keyof UpdateScoresType
    normalLabel : string
    boldLabel : string
    register :UseFormRegister<Input> 
    errors : FieldErrors<Input>
}

const InputItem = ({ inputFor, normalLabel, boldLabel, register, errors }: InputItemProps) => {
    return (
        <div className='flex flex-col sm:flex-row justify-between'>
            <label className="flex items-center gap-2 text-gray-700 text-sm  mb-1">
                <span className="w-6 h-6 bg-blue-900 text-white flex items-center justify-center rounded-full text-xs">1</span>
                <p>{normalLabel}<span className="font-bold">{boldLabel}</span></p>
            </label>
            <div>
                <input
                    type="number"
                    onWheel={(e) =>  e.currentTarget.blur()}
                    {...register(inputFor)}
                    placeholder={String(inputFor).slice(0, 1).toUpperCase() + String(inputFor).slice(1,).toLowerCase()}
                    className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
                <p className='absolute text-red-500 text-xs'> {errors[inputFor]?.message as string}</p>
            </div>
        </div>
    )
}

export default InputItem