import { SignUp } from '@clerk/nextjs'
import React from 'react'

type Props = {}

const page = (props: Props) => {
  return (
    <div className="flex h-screen  justify-center">
    <div className="mt-20">

    <SignUp />

    </div>
  </div>
  )
}

export default page