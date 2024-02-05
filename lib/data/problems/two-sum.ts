import { Problem, StartCodeInterface } from "@/lib";

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
const pythonCode = `

class TwoSum:
    @staticmethod
    def twoSum(nums, target):
       

#  DO NOT CHANGE THE MAIN METHOD
if __name__ == "__main__":
    result1 = TwoSum.twoSum([2, 7, 11, 15], 9)
    result2 = TwoSum.twoSum([3, 2, 4], 6)
    result3 = TwoSum.twoSum([3, 3], 6)
    result4 = TwoSum.twoSum([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 11)
    
    print(result1)
    print(result2)
    print(result3)
    print(result4)

`;


const starterCode :StartCodeInterface = {
    python: pythonCode, 
    java: javaCode
}

interface testCaseInterface {
  input: {
    nums: number[];
    target: number;
  };
  output: number[];
}
const testCases: testCaseInterface[] = [
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
  order: 1,
  starterFunctionName: "function twoSum(",
  testCases: testCases,
};
