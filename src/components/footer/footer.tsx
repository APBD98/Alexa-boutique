
import Link from "next/link"
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa"

export default function Footer() {
  return (
    <div className="w-full min-h-[500px]">
        <div className="bg-red-950 w-full h-[400px] bg-no-repeat bg-cover bg-top bg-blend-screen mb-[50px] sm:h-[500px] lg:bg-center" style={{backgroundImage:`url(/model3.jpg)`}}>
            <div className="w-full h-[400px] text-gray-900 flex flex-col justify-center p-5 sm:w-11/12 sm:h-[500px] lg:w-3/4">
                <p className="text-2xl font-semibold sm:text-3xl">Never miss a drop</p>
                <h1 className="text-3xl font-bold sm:text-4xl">Subscribe to get special offers, free giveaways, and once in a lifetime</h1>
            </div>
        </div>

        <div className="w-full h-[400px] grid grid-cols-1 p-5 sm:grid-cols-2 sm:pl-10">
            <div className="w-full text-lg underline flex flex-col justify-start gap-2 lg:justify-evenly lg:gap-0 lg:pl-10">
                <Link href='/'>
                    <h1>Home</h1>
                </Link>
                <Link href='/'>
                    <h1>Contact us</h1>
                </Link>
                <Link href='/'>
                    <h1>About us</h1>
                </Link>
                <Link href='/'>
                    <h1>Payment & delivery</h1>
                </Link>
            </div>

            <div className="flex flex-col gap-4 lg:justify-evenly lg:pl-10">
                <h1 className="text-3xl">Need help?</h1>
                <p className="underline">help@alexa-b.com</p>
                <div className="flex flex-row gap-4 text-xl lg:text-3xl">
                    <FaTwitter/>
                    <FaFacebook/>
                    <FaInstagram/>
                </div>
            </div>
        </div>
    </div>
  )
}
