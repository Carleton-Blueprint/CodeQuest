import { palindrome } from "./data/problems/is-palindrome";
import { twoSum } from "./data/problems/two-sum";
import { validParenthesis } from "./data/problems/valid-parentheses";
export interface StartCodeInterface { 
    [key: string]: string;
}

interface TestCaseInterface {
    input:any
    output: any;
}

interface ExampleInterface {
    id: number;
    inputText: string;
    outputText: string;
    explanation?: string;
}

export interface Problem {
    id: string;
    title: string;
    problemStatement: string;
    examples: ExampleInterface[];
    constraints: string;
    starterCode: StartCodeInterface;
    order: number;
    handlerFunction: any,
    codeTester: any, 
    testCases: TestCaseInterface[];
}

interface ProblemInterface { 
    [key: string] : Problem;
}
export const problems: ProblemInterface = { 
    "two-sum": twoSum, 
    "is-palindrome": palindrome, 
    "valid-parenthesis": validParenthesis
}


export const problemList: string[] = ["two-sum", "is-palindrome", "valid-parenthesis"]