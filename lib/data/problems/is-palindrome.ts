import { Problem, StartCodeInterface } from "@/lib";

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

const pythonCode = `
class Palindrome:
    @staticmethod
    def isPalindrome(s: str) -> bool:
       pass

#  DO NOT CHANGE THE MAIN METHOD
if __name__ == "__main__":
    s1 = "A man, a plan, a canal: Panama"
    s2 = "race a car"
    
    print(Palindrome.isPalindrome(s1))
    print(Palindrome.isPalindrome(s2))
`;

const starterCode: StartCodeInterface = {
  python: pythonCode,
  java: javaCode,
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
  starterFunctionName: "function isPalindrome(",
  testCases: [
    {
      input: "A man, a plan, a canal: Panama" as any,
      output: true,
    },
    {
      input: "race a car",
      output: false,
    },
  ],
};

