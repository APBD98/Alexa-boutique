import Image from "next/image"
import Link from "next/link"
import { options } from "@/app/api/auth/[...nextauth]/options"
import { getServerSession } from 'next-auth/next'
export default async function Page({ params }: { params: { id: string } }) {
    const res = await fetch(`https://fakestoreapi.com/products/${params.id}`)
    const data = await res.json()
    const sessions = await getServerSession(options)
    console.log(sessions?.user)
    
    return (
    <div className="w-full min-h-[1000px] pt-[200px] mb-20 p-5 grid grid-cols-1 gap-y-20 sm:place-items-center sm:p-10 lg:pt-[210px] lg:grid-cols-2">
        {
            sessions? (
                <>
                    <Image src={data.image} alt={data.title + 'image preview'} width={400} height={400}/>
                    <div className="">
                        <h1 className="text-2xl font-semibold mb-4 lg:text-4xl">{data.title}</h1>
                        <p className="text-2xl font-semibold mb-4">${data.price}</p>
                        <div className="flex justify-evenly divide-x-4 text-3xl w-[100px] border-2 mb-5">
                            <button>-</button>
                            <p className="pl-2 pt-1 text-2xl">1</p>
                            <button className="pl-2">+</button>
                        </div>
                        <button className="w-28 h-16 bg-black text-white text-lg">Add to bag</button>
                        <p className="mt-10 lg:text-xl">{data.description}</p>
                    </div> 
                </>   
                
            ) :(
                <div className="lg:-mt-96 text-3xl">
                <h1>You must be log in</h1>
                <Link href={'/api/auth/signin'} className="underline">Sign in</Link>
                </div>
            )
        }
    </div>
    
)}