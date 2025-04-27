'use client';
import Image from 'next/image';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import InputItem from './InputItem'
import { UpdateScoresModalProps, UpdateScoresSchema, Input, Output } from '../../types/UpdateScoresModalTypes';


const inputItems: {
    inputFor: keyof Input;
    normalLabel: string;
    boldLabel: string;
}[] = [
        {
            inputFor: 'rank',
            normalLabel: "Update your ",
            boldLabel: "Rank"
        },
        {
            inputFor: 'percentile',
            normalLabel: "Update your ",
            boldLabel: "Percentile"
        },
        {
            inputFor: 'score',
            normalLabel: "Update your ",
            boldLabel: "Current Score (out of 15)"
        }
    ]

const UpdateScoresModal = ({ rank, percentile, score, setRank, setScore, setPercentile, isOpen, onClose }: UpdateScoresModalProps) => {
    const { register,
        handleSubmit,
        formState: { errors },
    } = useForm<Input, any, Output>({
        resolver: zodResolver(UpdateScoresSchema),
        mode: 'onChange',
        defaultValues: {
            rank: String(rank),
            percentile: String(percentile),
            score: String(score),
        },
    });


    const onSubmit: SubmitHandler<Output> = (data) => {
        setRank(data.rank)
        setScore(data.score)
        setPercentile(data.percentile)
        onClose()
    }


    if (!isOpen) return null;
    return (
        <div className="fixed inset-0 bg-gray-300/80 flex justify-center items-center z-50">
            <div className="bg-white w-full max-w-xl rounded-lg p-8 relative space-y-8">


                <div className="absolute top-4 right-4">
                    <Image
                        src="/html5-logo.png"
                        alt="HTML Logo"
                        width={40}
                        height={40}
                        className="object-contain"
                    />
                </div>


                <h2 className="text-2xl font-bold text-gray-800">Update scores</h2>


                <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                    {inputItems.map((item, index) => {
                        return (<InputItem
                            key={index}
                            inputFor={item.inputFor}
                            normalLabel={item.normalLabel}
                            boldLabel={item.boldLabel}
                            register={register}
                            errors={errors}
                        />)
                    })}

                    <div className="flex justify-end gap-4 pt-6">
                        <button
                            onClick={onClose}
                            className="px-4 cursor-pointer py-2 border border-blue-900 text-blue-900 rounded-lg hover:bg-blue-50 transition"
                        >
                            cancel
                        </button>
                        <button
                            type='submit'
                            className="px-6 cursor-pointer py-2 bg-blue-900 text-white rounded-lg hover:bg-blue-800 transition flex items-center gap-2"
                        >
                            save
                            <span>➔</span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateScoresModal;
