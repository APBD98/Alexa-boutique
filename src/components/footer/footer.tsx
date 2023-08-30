
import Link from "next/link"

export default function Footer() {
  return (
    <div className="w-full min-h-[500px]">
        <div className="bg-red-950 w-full h-[400px] bg-no-repeat bg-cover bg-top bg-blend-screen mb-[100px] sm:h-[500px] lg:bg-center" style={{backgroundImage:`url(model3.jpg)`}}>
            <div className="w-full h-[400px] text-gray-900 flex flex-col justify-center p-5 sm:w-11/12 sm:h-[500px] lg:w-3/4">
                <p className="text-2xl font-semibold sm:text-3xl">Never miss a drop</p>
                <h1 className="text-3xl font-bold sm:text-4xl">Subscribe to get special offers, free giveaways, and once in a lifetime</h1>
            </div>
        </div>

        <div>
            <div>
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
                    <h1>Payment & Delivery</h1>
                </Link>
            </div>

            <div>
                <h1>Need help?</h1>
                <p>help@alexa-b.com</p>
            </div>
        </div>
    </div>
  )
}
