import { Problem, StartCodeInterface } from "@/lib";
import assert from "assert"
// interface startCodeInterface { 
//     [key: string]: string
// }


const javaCode = `
import java.util.Arrays;

public class TwoSum {
    public static int[] twoSum(int[] nums, int target) {
       // write your code here
    }

    // DO NOT CHANGE THE MAIN METHOD
    public static void main(String[] args) {
        int[] result1 = twoSum(new int[] {2, 7, 11, 15}, 9);
        int[] result2 = twoSum(new int[] {3, 2, 4}, 6);
        int[] result3 = twoSum(new int[] {3, 3}, 6);
        int[] result4 = twoSum(new int[] {1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1}, 11);
        
        System.out.println(Arrays.toString(result1));
        System.out.println(Arrays.toString(result2));
        System.out.println(Arrays.toString(result3));
        System.out.println(Arrays.toString(result4));
    }  
}

        `;



const testCases= [
  {
    input: {
      nums: [2, 7, 11, 15],
      target: 9,
    },
    output: [0, 1],
  },
  {
    input: {
      nums: [3, 2, 4],
      target: 6,
    },
    output: [1, 2],
  },
  {
    input: {
      nums: [3, 3],
      target: 6,
    },
    output: [0, 1],
  },
  {
    input: {
      nums: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      target: 11,
    },
    output: [],
  },
];

const handlerFunction = (fn: string) => {


 const remainingCode =
   testCases
     .map((testCase, index) => {
       return `result${index + 1} = solution([${testCase.input.nums}], ${testCase.input.target})`;
     })
     .join("\n") +
   "\n" +
   testCases
     .map((_, index) => {
       return `print(result${index + 1})`;
     })
     .join("\n");

  let newCode = `
${fn}
${remainingCode}
`;
  return newCode;
};
const pythonCode = `def solution(nums, target):`;
const starterCode: StartCodeInterface = {
  python: pythonCode,
  java: javaCode,
};

const codeTester = (output: string) => {
  let user_output = output.split("\n");
  let marks = [] 
  let user_answers = [] 
  try {
    for (let i = 0; i < testCases.length; i++) {
      let value = JSON.parse(user_output[i]);
      user_answers.push(value);
      assert.deepEqual(value, testCases[i].output);
      marks.push(true);
    }
  } catch (error: any) {
    console.error("Error from codeTester: ", error);
    // throw new Error(error);
    let final_result = { 
      message : error
    }
    return JSON.stringify(final_result)
  }
  

  let final_results = {
    marks: marks, 
    user_answers: user_answers, 
    message: ""
  }
  return JSON.stringify(final_results)
};

export const twoSum: Problem = {
  id: "two-sum",
  title: "1. Two Sum",
  problemStatement: `  <p>
              Given an array of integers nums and an integer target, return
              indices of the two numbers such that they add up to target.
              <br /> <br />
              You may assume that each input would have exactly one solution,
              and you may not use the same element twice.
              <br /> <br />
              You can return the answer in any order.
            </p>`,
  examples: [
    {
      id: 1,
      inputText: "nums = [2,7,11,15], target = 9",
      outputText: "[0,1]",
      explanation: "Because nums[0] + nums[1] == 9, we return [0, 1].",
    },
    {
      id: 2,
      inputText: "nums = [3,2,4], target = 6",
      outputText: "[1,2]",
      explanation: "Because nums[1] + nums[2] == 6, we return [1, 2].",
    },
    {
      id: 3,
      inputText: " nums = [3,3], target = 6",
      outputText: "[0,1]",
    },
  ],
  constraints: `<li class='mt-2'>
  <code>2 ≤ nums.length ≤ 10</code>
</li> <li class='mt-2'>
<code>-10 ≤ nums[i] ≤ 10</code>
</li> <li class='mt-2'>
<code>-10 ≤ target ≤ 10</code>
</li>
<li class='mt-2 text-sm'>
<strong>Only one valid answer exists.</strong>
</li>`,
  //   handlerFunction: handlerTwoSum,
  starterCode: starterCode,
  handlerFunction: handlerFunction,
  order: 1,
//  handler: fn, 
  testCases: testCases,
  codeTester: codeTester, 
};
