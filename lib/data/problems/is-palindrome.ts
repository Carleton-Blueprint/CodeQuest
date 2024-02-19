import { Problem, StartCodeInterface } from "@/lib";
import assert from "assert";

const javaCode = `
public class Palindrome {
    public static boolean isPalindrome(String s) {
       // write your code here
    }

    // DO NOT CHANGE THE MAIN METHOD
    public static void main(String[] args) {
        String s1 = "A man, a plan, a canal: Panama";
        String s2 = "race a car";
        
        System.out.println(isPalindrome(s1));
        System.out.println(isPalindrome(s2));
    }  
}

`;

const testCases = [

  // Positive cases
  { input: "Adam", output: false }, 
  { input: "A1B2BA1", output: false }, // Numbers
  { input: "aba", output: true }, 
  { input: "hello", output: false },
  { input: "ab$cd", output: false }, 

];

const handlerFunction = (fn: string) => {

   const remainingCode =
     testCases
       .map((testCase, index) => {
         return `result${index + 1} = solution("${testCase.input}")`;
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
const pythonCode = `def solution(s: str):`;
const starterCode: StartCodeInterface = {
  python: pythonCode,
  java: javaCode,
};

const codeTester = (output: string) => {
  let user_output = output.split("\n");
  let marks = [];
  let user_answers = [];
  try {
    for (let i = 0; i < testCases.length; i++) {
      let value =user_output[i] === "True" ? true : false;
      user_answers.push(value);
      assert.deepEqual(value, testCases[i].output);
      marks.push(true);
    }
  } catch (error: any) {
    console.error("Error from codeTester: ", error);
    // throw new Error(error);
    let final_result = {
      message: error,
    };
    return JSON.stringify(final_result);
  }

  let final_results = {
    marks: marks,
    user_answers: user_answers,
    message: "",
  };
  return JSON.stringify(final_results);
};

export const palindrome: Problem = {
  id: "palindrome",
  title: "2. Valid Palindrome",
  problemStatement: `<p>
        Given a string <code>s</code>, determine if it is a palindrome,
        considering only alphanumeric characters and ignoring cases.
    </p>`,
  examples: [
    {
      id: 1,
      inputText: 's = "A man, a plan, a canal: Panama"',
      outputText: "true",
    },
    {
      id: 2,
      inputText: 's = "race a car"',
      outputText: "false",
    },
  ],
  constraints: `<li class='mt-2'>
        The string may consist of <strong>alphanumeric characters only</strong>.
    </li>
    <li class='mt-2'>
        For the purpose of this problem, we define <strong>empty string as valid palindrome</strong>.
    </li>`,
  starterCode: starterCode,
  order: 2,
  testCases: testCases,
  handlerFunction: handlerFunction, 
  codeTester: codeTester,
};

