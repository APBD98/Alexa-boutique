"use client"

import { ChangeEvent, useState } from "react"
import { useRouter } from "next/navigation"
import { signIn, useSession } from "next-auth/react"
import toast, {Toaster} from "react-hot-toast"


export default function page() {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const router = useRouter()
  const { data:session} = useSession()

  const handleEmail = (e:ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }

  const handlePassword = (e:ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
  }

  const onSubmit = async () => {
    toast.loading('wait a minutes...', {duration:1500})
    const result = await signIn("credentials", {
      email:email,
      password:password,
      redirect:false,
      callbackUrl:"/"
    })

    if(result?.error !== null){
      toast.error('Login failed. Email or Password is not correct')
    }else{
      toast.success('Login success. you will be redirect...')
      router.push(result?.url as string)
    }
  }

  
  return (
    <div className="w-full h-screen flex flex-col items-center  justify-center">
      <p className="text-red-950">Welcome back, <br /> please login to your account</p>
      <div className="w-[300px] h-96 rounded-xl flex flex-col justify-start items-center gap-4 pt-10">
        <input type="text" name="email" id="email" placeholder="Your email" className="w-4/5  h-14 rounded-lg pl-3 border-2 border-red-900" onChange={handleEmail}/>
        <input type="password" name="password" id="password" placeholder="your password" className="w-4/5  h-14 rounded-lg pl-3 border-2 border-red-900" onChange={handlePassword}/>
        <button type="submit" className="w-40 h-14 bg-red-900 rounded-md text-white" onClick={onSubmit}>Login</button>
        <Toaster
        />
      </div>
    </div>
  )
}
