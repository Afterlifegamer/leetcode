import { AiFillLike, AiFillDislike } from "react-icons/ai";
import { BsCheck2Circle } from "react-icons/bs";
import { TiStarOutline } from "react-icons/ti";
import React from "react";
import { Problem } from "@/utils/type/problem";

type ProblemDescriptionProps = {
  problem: Problem;
};

const ProblemDescription: React.FC<ProblemDescriptionProps> = ({ problem }) => {
  return (
    <div className="bg-dark-layer-1">
      {/* TAB */}
      <div className="flex h-11 w-full items-center pt-2 bg-dark-layer-2 text-white overflow-x-hidden">
        <div
          className={
            "bg-dark-layer-1 rounded-t-[5px] px-5 py-[10px] text-xs cursor-pointer"
          }
        >
          Description
        </div>
      </div>

      <div className="flex px-0 py-4 h-[calc(100vh-94px)] overflow-y-auto">
        <div className="px-5">
          {/* Problem heading */}
          <div className="w-full">
            <div className="flex space-x-4">
              <div className="flex-1 mr-2 text-lg text-white font-medium">
                {problem.title}
              </div>
            </div>
            <div className="flex items-center mt-3">
              <div
                className={`text-olive bg-olive inline-block rounded-[21px] bg-opacity-[.15] px-2.5 py-1 text-xs font-medium capitalize `}
              >
                Easy
              </div>
              <div className="rounded p-[3px] ml-4 text-lg transition-colors duration-200 text-green-s text-dark-green-s">
                <BsCheck2Circle />
              </div>
              <div className="flex items-center cursor-pointer hover:bg-dark-fill-3 space-x-1 rounded p-[3px]  ml-4 text-lg transition-colors duration-200 text-dark-gray-6">
                <AiFillLike />
                <span className="text-xs">120</span>
              </div>
              <div className="flex items-center cursor-pointer hover:bg-dark-fill-3 space-x-1 rounded p-[3px]  ml-4 text-lg transition-colors duration-200 text-green-s text-dark-gray-6">
                <AiFillDislike />
                <span className="text-xs">2</span>
              </div>
              <div className="cursor-pointer hover:bg-dark-fill-3  rounded p-[3px]  ml-4 text-xl transition-colors duration-200 text-green-s text-dark-gray-6 ">
                <TiStarOutline />
              </div>
            </div>

            {/* Problem Statement(paragraphs) */}
            <div className="text-white text-sm">
              <div
                dangerouslySetInnerHTML={{ __html: problem.problemStatement }}
              />
            </div>

            {/* Examples */}
            <div className="mt-4">
              {problem.examples.map((example, index) => (
                <div key={example.id}>
                  <p className="font-medium text-white ">
                    Example {index + 1}:
                  </p>
                  {example.img && (
                    <img src={example.img} alt="no image" className="mt-3" />
                  )}
                  <div className="example-card">
                    <pre>
                      <strong className="text-white">Input: </strong>{" "}
                      {example.inputText} <br />
                      <strong>Output:</strong>
                      {example.outputText} <br />
                      {example.explanation && (
                        <>
                          <strong>Explanation:</strong>
                          {example.explanation}
                        </>
                      )}
                    </pre>
                  </div>
                </div>
              ))}
            </div>

            {/* Constraints */}
            <div className="my-5">
              <div className="text-white text-sm font-medium">Constraints:</div>
              <ul className="text-white ml-5 list-disc">
                <li className="mt-2">
                  <code>2 ≤ nums.length ≤ 10</code>
                </li>

                <li className="mt-2">
                  <code>-10 ≤ nums[i] ≤ 10</code>
                </li>
                <li className="mt-2">
                  <code>-10 ≤ target ≤ 10</code>
                </li>
                <li className="mt-2 text-sm">
                  <strong>Only one valid answer exists.</strong>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProblemDescription;
