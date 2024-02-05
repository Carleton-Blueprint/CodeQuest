import { palindrome } from "./data/problems/is-palindrome";
import { twoSum } from "./data/problems/two-sum";

export interface StartCodeInterface { 
    [key: string]: string;
}

interface TestCaseInterface {
    input: {
        nums: any;
        target: any;
    };
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
    starterFunctionName: string;
    testCases: TestCaseInterface[];
}

interface ProblemInterface { 
    [key: string] : Problem;
}
export const problems: ProblemInterface = { 
    "two-sum": twoSum, 
    "is-palindrome": palindrome, 
}


export const problemList: string[] = ["two-sum", "is-palindrome"]