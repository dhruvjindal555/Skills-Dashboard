import SyllabusItem from "./SyllabusItem";

interface TopicProgress {
  title: string;
  percentage: number;
  color: string;
}

const topics: TopicProgress[] = [
  { title: 'HTML Tools, Forms, History', percentage: 80, color: '#4285F4' }, 
  { title: 'Tags & References in HTML', percentage: 60, color: '#FB8C00' }, 
  { title: 'Tables & References in HTML', percentage: 24, color: '#E53935' }, 
  { title: 'Tables & CSS Basics', percentage: 96, color: '#43A047' },
];

const SyllabusWiseAnalysis = () => {
  return (
    <div className="p-6 rounded-lg border border-gray-200 bg-white w-full ">

      <h2 className="text-lg font-semibold text-gray-800 mb-6">Syllabus Wise Analysis</h2>

      <div className="space-y-6">
        {topics.map((topic, index) => (
          <SyllabusItem key={index} topic={topic} />
        ))}
      </div>

    </div>
  );
};

export default SyllabusWiseAnalysis;
