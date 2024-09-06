import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Logo from "@/assets/logo.svg";

type Props = {}

const Header = (props: Props) => {
  return (
    <div className="p-4 border-b-2  lg:absolute w-full h-[4.1rem] bg-white z-10">
      <div className="flex justify-between items-center">
        <Link href={"/"}>
          <Image src={Logo} alt="logo" />
        </Link>
        {/* <UserButton /> */}
      </div>
    </div>
  )
}

export default Header
