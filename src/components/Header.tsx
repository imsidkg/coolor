import { UserButton } from '@clerk/nextjs'
import React from 'react'

type Props = {}

const Header = (props: Props) => {
  return (
    <div>
        <UserButton/>
    </div>
  )
}

export default Header
