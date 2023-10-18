"use client"

import Image, { StaticImageData } from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { useSession } from "next-auth/react"
import { useCartStore } from "@/config/store/store"
import axios from "axios"
import toast, {Toaster} from "react-hot-toast"


type Data = {
  id:number,
  image: string | StaticImageData,
  title:string,
  price:number,
  description:string

}

export default function page({params}: { params: { id: number } }) {
    const {data : sessions} = useSession()
    const [data, setData] = useState<Data>()
    const [loading, setLoading] = useState(false)
    const cart = useCartStore((state:any) => state.cartList)
    const successLoad = useCartStore((state:any) => state.successLoad)

    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${params.id}`)
        .then((res) => setData(res.data))
        
    },[])
    const cartCheck = cart.some((item:any) => item.id == params.id);
    const addItemCart = () => {
        
        if(successLoad === true && cartCheck !== true){
            axios.post('https://fakestoreapi.com/carts',{
                userId:sessions?.user.id,
                date: new Date(),
                products:[{productId:params.id, quantity:1}]
            }).then((res) => console.log(res.data))
            .catch((err) => console.log(err))
            toast.success('success added')
        }else{
            toast.error('you have the items in your bag')
        }

        
    }
    
    

  return (
    <div className="w-full min-h-[1000px] pt-[200px] mb-20 p-5 grid grid-cols-1 gap-y-20 sm:place-items-center sm:p-10 lg:pt-[210px] lg:grid-cols-2">
        {
            sessions? (
                <>
                {
                  data?.image && <Image src={data?.image as string} alt="product image" width={400} height={400}/>
                }
                    
                    <div className="">
                        <h1 className="text-2xl font-semibold mb-4 lg:text-4xl">{data?.title}</h1>
                        <p className="text-2xl font-semibold mb-4">${data?.price}</p>
                        <div className="flex justify-evenly divide-x-4 text-3xl w-[100px] border-2 mb-5">
                            <button>-</button>
                            <p className="pl-2 pt-1 text-2xl">1</p>
                            <button className="pl-2">+</button>
                        </div>
                        <button className="w-28 h-16 bg-black text-white text-lg" onClick={addItemCart}>Add to bag</button>
                        <Toaster/>
                        <p className="mt-10 lg:text-xl">{data?.description}</p>
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
  )
}
