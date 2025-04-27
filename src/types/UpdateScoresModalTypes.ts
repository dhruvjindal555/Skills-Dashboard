import { Dispatch, SetStateAction } from "react";
import { z } from "zod";


export interface UpdateScoresModalProps {
    rank: number
    score: number
    percentile: number
    isOpen: boolean;
    onClose: () => void;
    setRank: Dispatch<SetStateAction<number>>;
    setScore: Dispatch<SetStateAction<number>>;
    setPercentile: Dispatch<SetStateAction<number>>;
}
    
export const UpdateScoresSchema = z.object({
    rank: z.string().nonempty('Required')
        .pipe(z.coerce.number().
            min(1, 'Must be greater than 1')),

    percentile: z.string().nonempty('Required')
        .pipe(z.coerce.number().
            min(1, 'Required between 1-100')
            .max(100, 'Required between 1-100')),

    score: z.string().nonempty('Required').
        pipe(z.coerce.number().
            min(1, 'Required between 1-15')
            .max(15, 'Required between 1-15'))
});


export  type UpdateScoresType = z.infer<typeof UpdateScoresSchema>;
export  type Input = z.input<typeof UpdateScoresSchema>;
export  type Output = z.output<typeof UpdateScoresSchema>;