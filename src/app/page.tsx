'use client'
import React from 'react'
import { useUser } from '@clerk/nextjs'
import Link from 'next/link'
import { Button } from '@/components/ui/button'



const page = () => {

  // const { isLoaded, isSignedIn, user } = useUser()

  return (
    <main className='flex flex-col items-center justify-between p-24'>
    hiiiiiiiiiiii

    <Button>
      <Link href={'/sign-in'}>click here</Link>
    </Button>
    </main>
  )
}

export default page