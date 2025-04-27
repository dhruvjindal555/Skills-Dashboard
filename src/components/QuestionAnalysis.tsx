'use client';
import Image from 'next/image';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

const COLORS = ['#4285F4', '#E0E0E0']; 

interface QuestionAnalysisProps {
  score: number
}

const QuestionAnalysis = ({ score }: QuestionAnalysisProps) => {
  const correct = score;
  const total = 15;
  const wrong = total - correct;

  const data = [
    { name: 'Correct', value: correct },
    { name: 'Wrong', value: wrong },
  ];


  return (
    <div className="p-6 rounded-lg border border-gray-200 bg-white w-full max-w-sm">

      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-800">Question Analysis</h2>
        <span className="text-blue-600 font-semibold">{correct}/{total}</span>
      </div>

      <p className="text-sm text-gray-600 mb-6">
        <span className="font-bold text-gray-800">You scored {correct} question correct out of {total}. </span>
        However it still needs some improvements
      </p>

      <div className="relative w-48 h-48 mx-auto">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Tooltip
              formatter={(value, name) => [`${value}`, name]}
              wrapperStyle={{ zIndex: 20 }}  
            />
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              innerRadius="70%"
              outerRadius="100%"
              startAngle={90}
              endAngle={-270}
            >
              {data.map((entry, i) => (
                <Cell key={i} fill={COLORS[i]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>  
        
        <div className="w-fit h-fit  top-17 left-18 absolute flex items-center justify-center ">
          <Image src="/target.png" alt="target" width={50} height={50} />
        </div>
      </div>

    </div>
  );
};

export default QuestionAnalysis;
