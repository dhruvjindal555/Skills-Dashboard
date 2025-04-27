'use client';
import Image from 'next/image';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, ReferenceLine, Label } from 'recharts';

const data = [
  { x: 0, y: 2 },
  { x: 10, y: 3 },
  { x: 20, y: 5 },
  { x: 30, y: 10 },
  { x: 40, y: 20 },
  { x: 50, y: 25 },
  { x: 60, y: 10 },
  { x: 70, y: 5 },
  { x: 80, y: 2 },
  { x: 90, y: 7 },
  { x: 100, y: 1 },
];

interface ComparisonGraphProps {
  percentile: number
}

const ComparisonGraph = ({ percentile }: ComparisonGraphProps) => {
  return (
    <div className=" p-6 rounded-lg border border-gray-200 bg-white w-full">

      <h2 className="text-lg font-semibold text-gray-800 ">Comparison Graph</h2>

      <div className="flex items-start text-gray-600 justify-between ">
        <p className='pt-3 w-11/12 mb-4'>
          <span className="font-bold text-gray-600">You scored {percentile}% percentile </span>
          <span>
            which is lower than the
            <br></br>
            average percentile 72% of all the engineers who took this assessment
          </span>
        </p>
        <div className='flex items-center justify-center h-fit p-2 rounded-full border-1 border-gray-200 bg-gray-100'>
          <Image
            src='/line-plot.png'
            alt='line-plot'
            width={15}
            height={15}
            className="object-contain " />
        </div>
      </div>

      <div className="w-full h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <XAxis
              dataKey="x" type="number" domain={[0, 100]} />
            <YAxis hide />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="y"
              name="No. of Students"
              stroke="#8884d8"
              strokeWidth={2}
              dot={{ r: 3 }}
            />
  
            <ReferenceLine x={percentile} stroke="#eeeee4" strokeWidth={2}>
              <Label
                value={`Your percentile - ${percentile}`}
                position="insideTop"
                offset={10}
                fill="gray"
                fontSize={15}
              />
            </ReferenceLine>
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ComparisonGraph;
