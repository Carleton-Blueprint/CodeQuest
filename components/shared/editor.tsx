import { Editor } from "@monaco-editor/react";
import React, { useEffect, useRef, useState } from "react";
import { Button } from "../ui/button";
import { Copy, ExternalLinkIcon } from "lucide-react";
import { SelectLanguage } from "./selectLanguage";
import { toast } from "../ui/use-toast";
import { problems } from "@/lib";

const CodeEditor = ({ language, setLanguage, code, setCode, problemId }: { language: string; setLanguage: any; code: string; setCode: any; problemId: string }) => {
  const problemInfo = problems[problemId];
  function handleEditorChange(value: any, event: any) {
    setCode(value);
  }
  const editorRef = useRef();
  const onMount = (editor: any) => {
    editorRef.current = editor;
    editor.focus();
  };

  useEffect(() => {
    setCode(problemInfo.starterCode[language]);
  }, [language, setCode]);

  return (
    <div className="flex flex-col gap-y-5 h-full w-full">
      <div className="w-full  px-5 py-1 flex gap-x-5 bg-transparent border-b  items-center">
        {/* <Button size={"icon"} variant={"outline"} className='text-black'> <Code2Icon/> </Button> */}
        {/* <SelectLanguage language={language} setLanguage={setLanguage} /> */}
        <Button
          onClick={() => {
            navigator.clipboard.writeText(code);
            toast({
              title: "System",
              description: "Code copied",
              duration: 1000,
            });
          }}
          size={"icon"}
          className="h-[25px] w-[25px] text-xs "
          variant={"secondary"}
        >
          {" "}
          <Copy size={20} />
        </Button>
        <Button size={"icon"} className="h-[25px] w-[25px] text-xs " variant={"secondary"}>
          {" "}
          <ExternalLinkIcon size={20} />
        </Button>
      </div>
      <Editor
        height="100%"
        width="100%"
        defaultLanguage={language}
        defaultValue={problemInfo.starterCode[language]}
        theme="hc-black"
        onChange={handleEditorChange}
        onMount={onMount}
        value={code}
        options={{
          autoIndent: "advanced",
          contextmenu: true,
          fontFamily: "Fira Code",
          fontSize: 15,
          lineHeight: 20,

          minimap: { enabled: false },
          automaticLayout: true,
          cursorStyle: "block",
          // Add any other options you need
        }}
        // onMount={handleEditorMount}
      />
    </div>
  );
};

export default CodeEditor;
