import { problems } from '@/lib';
import { twoSum } from '@/lib/data/problems/two-sum';
import React from 'react'

const ProblemDescription = ({ problemId }: { problemId: string }) => {
  const problemInfo = problems[problemId]
  return (
    <section className=" h-full flex-grow rounded-lg  p-10 text-white flex flex-col gap-y-10 overflow-y-auto">
      <h1>{problemInfo.title}</h1>
      <hr />
      <div dangerouslySetInnerHTML={{ __html: problemInfo.problemStatement }} />

      <ul className="space-y-10 w-full ">
        {problemInfo.examples.map((example) => {
          return (
            <li className=" h-[100px] w-full" key={example.id}>
              <p> Example 1:</p>
              <div className="flex  items-center gap-x-2 h-full px-5">
                <div className="h-full w-1 bg-gray-300 " />

                <p>
                  <strong> Input: </strong>
                  {example.inputText}
                  <br /> <strong> Output: </strong> {example.outputText}
                  <br />
                  <strong> Explaination: </strong> {example.explanation}
                </p>
              </div>
            </li>
          );
        })}
      </ul>
      <div dangerouslySetInnerHTML={{ __html: problemInfo.constraints }} />
    </section>
  );
}

export default ProblemDescription