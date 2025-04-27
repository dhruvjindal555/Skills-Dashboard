'use client';
import ComparisonGraph from "@/components/ComparisonGraph"
import Image from 'next/image';

interface TestSummaryProps {
  rank: number
  score: number
  percentile: number
  onOpen: () => void
}

const TestSummaryCard = ({ rank, score, percentile, onOpen }: TestSummaryProps) => {
  return ( 
    <div className="w-full max-w-2xl  bg-white space-y-4">

      <div className="p-3 flex border-gray-200 border-1 rounded-lg items-center justify-between">
        <div className="flex items-center gap-2">
          <Image
            src="/html5-logo.png" 
            alt="HTML Logo"
            width={50}
            height={50}
            className="object-contain"
          />
          <div>
            <h2 className="text-lg font-semibold text-gray-800">Hyper Text Markup Language</h2>
            <p className="text-sm text-gray-600">
              Questions: 08 | Duration: 15 mins | Submitted on 5 June 2021
            </p>
          </div>
        </div>

        <button
          onClick={onOpen}
          className="px-4 py-2 cursor-pointer bg-blue-900 text-white rounded-lg hover:bg-blue-800 transition">
          Update
        </button>
      </div>

      <div className='  border-gray-200 border-1 p-3 rounded-lg'>
        <h3 className="text-md font-semibold text-gray-700 mb-4">Quick Statistics</h3>
        <div className="flex items-center justify-around ">

    
          <div className="flex items-center space-x-2 px-3">
            <div className="w-14 h-14 flex items-center justify-center bg-yellow-100 rounded-full">
              🏆
            </div>
            <div className=''>
              <div className="text-lg  font-bold text-gray-800">{rank}</div>
              <div className="text-sm text-gray-500">YOUR RANK</div>
            </div>
          </div>

  
          <div className="flex items-center space-x-2 border-gray-200 border-l border-r px-3">
            <div className="w-10 h-10 flex items-center justify-center bg-blue-100 rounded-full">
              📝
            </div>
            <div>
              <div className="text-lg  font-bold text-gray-800">{percentile}%</div>
              <div className="text-sm text-gray-500">PERCENTILE</div>
            </div>
          </div>

   
          <div className="flex items-center space-x-2 px-3">
            <div className="w-10 h-10 flex items-center justify-center bg-green-100 rounded-full">
              ✅
            </div>
            <div>
              <div className="text-lg  font-bold text-gray-800">{score} / 15</div>
              <div className="text-sm text-gray-500">CORRECT ANSWERS</div>
            </div>
          </div>

        </div>
      </div>
      <ComparisonGraph percentile={percentile}/>
    </div>
  );
};

export default TestSummaryCard;
