import React from 'react'
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from '@/lib/utils';

const TestcaseDetails = ({ index, input, output, answer }: {index:number, input: any, output: any, answer: any}) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div
          className={cn(
              "w-full h-10 bg-gray-500/30 hover:bg-gray-700 flex items-center p-4 rounded-lg", answer !== null ? JSON.stringify(answer) === JSON.stringify(output) ? "bg-green-500/30" : "bg-red-500/30" :null 
          )}
        >
          <h2>
            <strong>Test {index + 1}</strong>
          </h2>
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-black text-white">
        <DialogHeader>
          <DialogTitle >
            Test case {index + 1}{" "}
          </DialogTitle>
          <DialogDescription className="">
            <div className=" w-full text-muted-foreground   rounded-lg p-5  flex flex-col gap-y-10 ">
              <div>
                <h3 className="text-gray-400"> Input </h3>

                <div className="bg-[#383434] px-5 py-2 w-full h-[60px] rounded-lg space-y-2 my-3">
                  <p className="text-xs">nums</p>
                  <p className="text-sm text-white">{JSON.stringify(input['nums'])}</p>
                </div>

                <div className="bg-[#383434] px-5 py-2 w-full h-[60px] rounded-lg space-y-2 mt-3">
                  <p className="text-xs">target</p>
                  <p className="text-sm text-white">{input["target"]}</p>
                </div>
              </div>
           
              <div>
                <h3 className="text-gray-400"> Expected output </h3>

                <div className="bg-[#383434] px-5 py-2 w-full h-[50px] rounded-lg  mt-3 flex items-center">
                  <p className="text-sm text-white"> {JSON.stringify(output)} </p>
                </div>
              </div>
           
              <div>
                <h3 className="text-gray-400"> Your output </h3>

                <div className="bg-[#383434] px-5 py-2 w-full h-[50px] rounded-lg  mt-3 flex items-center">
                                  <p className="text-sm text-white"> {JSON.stringify(answer)}</p>
                </div>
              </div>
            </div>
          </DialogDescription>
        </DialogHeader>
        {/* <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input id="name" value="Pedro Duarte" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Username
            </Label>
            <Input id="username" value="@peduarte" className="col-span-3" />
          </div>
        </div> */}
        {/* <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter> */}
      </DialogContent>
    </Dialog>
  );
}

export default TestcaseDetails