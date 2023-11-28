"use client"
import Button from "@/components/Button";
import Title from "@/components/Title";
import { useResult } from "../../context/resultContext";
import { FiCopy } from "react-icons/fi";


const Page = () => {
  const {result} = useResult()
  console.log(result);
  
  return (
    <div className="w-3/4 md:w-1/2 lg:w-1/3 m-auto pt-20 pb-10 text-gray-200 relative">
      <Title text="awesome!!" />
      <h2 className="text-lg">
        Copy AI crafted these captivating copies just for you! 
      </h2>

      <div className="flex text-fontWhite text-sm font-textFont justify-around">
        <div className="w-full h-40 bg-zinc-500 bg-opacity-30 rounded-lg relative overflow-auto">
          <p className="w-11/12 whitespace-pre-line break-words m-auto mt-2 mb-1">
            {result}
          </p>
          <div title="copy" className="absolute opacity-30 hover:opacity-100 top-1 right-1">
           <FiCopy/>
          </div>
        </div>
      </div>

      <div className="text-center align-baseline mt-2">
        <Button text="Download PDF" />
      </div>
    </div>
  );
};

export default Page;
