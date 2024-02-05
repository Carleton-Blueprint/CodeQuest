import { LANGUAGE_VERSIONS } from "@/lib/data/constrants";
import axios from "axios";
import { NextResponse } from "next/server";

// type ResponseData = {
//   message: string;
// };

// export default function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<ResponseData>
// ) {
//    res.status(200).json({ message: "Hello from Next.js!" });
// }


export async function POST(request: Request) { 
  const data = await request.json();

  const baseURL = "https://emkc.org/api/v2/piston/execute"; 
  const lang = data["language"];
  const sourceCode = data["code"];
  const requestData = { 
    language: lang, 
    version: LANGUAGE_VERSIONS[lang],
    files: [ 
      { 
        content: sourceCode
      },
    ]
  }
   const response = await axios.post(baseURL, requestData )

  console.log(response.data)

  return NextResponse.json({ 
    data: response.data
  })
}