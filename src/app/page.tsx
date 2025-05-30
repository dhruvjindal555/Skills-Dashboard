'use client'
import Navbar from "@/components/Navbar"
import QuestionAnalysis from "@/components/QuestionAnalysis"
import SyllabusWiseAnalysis from "@/components/syllabus/SyllabusWiseAnalysis";
import TestSummaryCard from "@/components/TestSummaryCard";
import { LiaChartBarSolid } from "react-icons/lia";
import { RiAwardFill } from "react-icons/ri";
import { IoDocumentOutline } from "react-icons/io5";
import UpdateScoresModal from "@/components/modal/UpdateScoreModal";
import { useState } from "react";
import { IconType } from "react-icons";


type NavItem = {
  id: string;
  label: string;
  icon: IconType;
};
const navItems: NavItem[] = [
  { id: "dashboard", label: "Dashboard", icon: LiaChartBarSolid },
  { id: "skill-test", label: "Skill Test", icon: RiAwardFill },
  { id: "internship", label: "Internship", icon: IoDocumentOutline },
];


export default function Home() {
  const [activeId] = useState<string>("skill-test");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [rank, setRank] = useState(1)
  const [percentile, setPercentile] = useState(30)
  const [score, setScore] = useState(10)


  return (
    <>
      <Navbar />
      <div className="w-full flex flex-col md:flex-row">
        <div className="flex flex-row md:flex-col justify-evenly md:justify-start space-y-2 pt-5 md:py-10 w-full md:h-screen md:w-1/6 font-semibold text-gray-700">
          {navItems.map((item) => {
            const isActive = item.id === activeId;
            const baseClasses =
              "flex items-center m-0 px-2 md:px-6 md:py-4 space-x-2 md:space-x-4 items-center cursor-pointer transition";
            const activeClasses = isActive
              ? "md:rounded-r-full rounded-full bg-gray-100 text-blue-600"
              : "hover:rounded-r-full hover:bg-gray-100 hover:text-blue-600";

            return (
              <div
                key={item.id}
                // onClick={() => setActiveId(item.id)}
                className={`${baseClasses} ${activeClasses}`}
              >
                <item.icon />
                <span>{item.label}</span>
              </div>
            );
          })}
        </div>
        <div className="border-l-1 px-4 sm:px-10 border-gray-200 justify-center items-center ">
          <div className="my-5">
            <span>Skill test</span>
          </div>
          <div className="flex space-x-8 flex-col sm:flex-row ">
            <TestSummaryCard
              rank={rank}
              score={score}
              percentile={percentile}
              onOpen={() => {
                document.body.style.position = 'fixed'
                setIsModalOpen(true)
              }
              } />
            <div className="justify-center space-y-4 items-center w-full ">
              <SyllabusWiseAnalysis />
              <QuestionAnalysis score={score} />
            </div>
          </div>
        </div>
      </div>
      <UpdateScoresModal
        rank={rank}
        score={score}
        percentile={percentile}
        setRank={setRank}
        setScore={setScore}
        setPercentile={setPercentile}
        isOpen={isModalOpen}
        onClose={() => {
          document.body.style.position = ''
          setIsModalOpen(false)
        }}
      />
    </>
  );
}
