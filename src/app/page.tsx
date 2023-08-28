"use client"


import Image from "next/image"
import Link from "next/link"
import model1 from '@/assets/img/model2.jpg'
import { Lora } from "next/font/google"
import Images from '@/components/imageImporter/imageImporter'

const lora = Lora({
  subsets:['latin'],
  weight:['400','500','700']
})



export default function Home() {


  return (
    <div className={`w-full min-h-[1000px]`}>
      <div className="head w-full min-h-[500px] bg-red-950 pt-28 flex flex-col-reverse items-start p-5 gap-10 sm:items-center lg:flex-row lg:justify-evenly lg:p-0 lg:pt-36">
        <Image 
        src={model1}
        alt="model 1 image"
        width={400}
        height={400}/>
        <div className="mt-16 text-white sm:text-center lg:text-left lg:mt-0">
          <h1 className='text-2xl mb-2 sm:text-3xl lg:text-4xl'>Refresh your closet</h1>
          <p className="sm:text-xl">Shop the latest looks today</p>
          <Link href='/shop'>
            <button className="w-40 h-16 bg-white text-black mt-10">Shop now</button>
          </Link>
        </div>
      </div>

      <div className="w-full min-h-[500px] flex flex-col mt-10 p-5 gap-10 sm:items-center lg:flex-row lg:gap-0 lg:items-center lg:justify-evenly">
        <div className="text-center">
          <h1 className="text-lg font-semibold mb-2">Fall Collection '20</h1>
          <p className="text-sm">Discover the pre-fall collectiona arriving now</p>
          <Link href='/shop'>
            <button className="w-40 h-16 bg-black text-white mt-10">Shop now</button>
          </Link>
        </div>
        <Image 
          src={Images.model4} 
          alt="model 2 image"  
          height={400} 
          className="w-[400px] lg:w-[300px]"
        />
        <Image 
          src={Images.model2} 
          alt="model 3 image" 
          height={400} 
          className="w-[400px] lg:w-[300px]"
        />
        <Image
          src={Images.model5} 
          alt="model 4 image" 
          height={400} className="w-[400px] lg:w-[300px]"
          />
      </div>
    </div>
  )
}
