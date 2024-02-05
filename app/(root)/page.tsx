import Header from '@/components/shared/Header'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const Home = () => {
  return (
    <div className='h-screen w-screen' >

      <Header />
      
      <div className='h-full w-full flex justify-center items-center'> 
        <Link href={"/questions"}>
        
          <Button variant={"secondary"}> Go to Questions </Button>
        </Link>
      </div>


    </div>
  )
}

export default Home