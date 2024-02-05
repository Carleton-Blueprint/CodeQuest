import Header from '@/components/shared/Header'
import UserProfile from '@/components/shared/UserProfile'
import QuestionList from '@/components/shared/questionList'
import React from 'react'

const Questions = () => {
  return (
    <div className="h-[100vh] w-[100vw] flex flex-col  text-white overflow-y-auto">
      <Header />
      <UserProfile />
      <div className="grid grid-cols-2 p-10 gap-10 ">
        <div className="bg-gray-800/20 p-5  h-[300px]">
          
            {" "}
          <span className="text-xl font-semibold">Leaderboards </span>
          <div className='flex items-center justify-center h-full w-full'> 

            <p className='no-wrap text-muted-foreground'> No Leaderboards ATM </p>
          </div>
        </div>
        <QuestionList />
      </div>
    </div>
  );
}

export default Questions