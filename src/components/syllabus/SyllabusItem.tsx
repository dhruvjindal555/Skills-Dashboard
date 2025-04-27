import React from 'react'

interface SyllabusItemProps {
    topic: {
        title: string
        percentage: number
        color: string
    }
}

const SyllabusItem = ({  topic }: SyllabusItemProps) => {
    return (
        <div >
            <div className="flex justify-between items-center mb-2">
                <span className="text-gray-700">{topic.title}</span>
                <span
                    className="font-semibold"
                    style={{ color: topic.color }}
                >
                    {topic.percentage}%
                </span>
            </div>

    
            <div className="w-full h-2 bg-gray-100 rounded-full">
                <div
                    className="h-full rounded-full"
                    style={{
                        width: `${topic.percentage}%`,
                        backgroundColor: topic.color,
                        transition: 'width 0.5s ease-in-out',
                    }}
                />
            </div>
        </div>
    )
}

export default SyllabusItem