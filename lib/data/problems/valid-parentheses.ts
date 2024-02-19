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
  { input: "()", output: true },
  { input: "()[]{}", output: true },
  { input: "{[]}", output: true },

  // Negative test cases
  { input: "(]", output: false },
  { input: "([)]", output: false },
  { input: "][[", output: false },
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
const pythonCode = `def solution(s: str) -> bool:
   
`;
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
      let value = user_output[i] === "True" ? true : false;
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

export const validParenthesis: Problem = {
  id: "valid-parentheses",
  title: "3. Valid Parentheses",
  problemStatement: `<p>Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.</p><p>An input string is valid if:</p><ul><li>Open brackets must be closed by the same type of brackets.</li><li>Open brackets must be closed in the correct order.</li><li>Every close bracket has a corresponding open bracket of the same type.</li></ul>`,
  examples: [
    {
      id: 1,
      inputText: 's = "()"',
      outputText: "true",
    },
    {
      id: 2,
      inputText: 's = "()[]{}"',
      outputText: "true",
    },
    {
      id: 3,
      inputText: 's = "(]"',
      outputText: "false",
    },
    {
      id: 4,
      inputText: 's = "([)]"',
      outputText: "false",
    },
    {
      id: 5,
      inputText: 's = "{[]}"',
      outputText: "true",
    },
  ],
  constraints: `<li>1 <= s.length <= 10^4</li><li>s consists of parentheses only '()[]{}'.</li>`,
  starterCode: starterCode,
  order: 20,
  testCases: testCases,
  handlerFunction: handlerFunction,
  codeTester: codeTester,
};
