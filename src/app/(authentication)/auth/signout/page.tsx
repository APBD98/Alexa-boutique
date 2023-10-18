"use client"
import Link from "next/link"
import { signOut } from "next-auth/react"

export default function page() {
  const handleSignOut = async () => {
    const result = await signOut({
      callbackUrl:'/', 
      redirect:true
    })
  }

  return (
    <div className='w-full h-screen flex flex-col items-center  justify-center'>
      <div className='w-[300px] h-[400px] bg-white rounded-xl flex flex-col justify-center items-center gap-14 sm:bg-transparent'>
        <h1 className='text-2xl text-red-900'>Do you want to Log out?</h1>
        <div className='w-full h-32 flex flex-row justify-center items-center gap-5'>
          <button className='w-20 h-14 bg-red-900 text-white' onClick={handleSignOut}>Yes</button>
          <button className='w-24 h-14 bg-red-900 text-white'>
            <Link href={'/'}>No, Back to Home Page</Link>
          </button>
        </div>
      </div>
    </div>
  )
}
