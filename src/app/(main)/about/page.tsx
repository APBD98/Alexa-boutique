import Image from "next/image"
import Images from "@/utils/imageImporter/imageImporter"

export default function page() {
  return (
    <div className='w-full min-h-[1000px] pt-[200px] mb-20'>
      <div className="w-full min-h-[500px] flex flex-col items-center sm:pl-10 sm:pr-10">
        <h1 className="text-3xl mb-10 text-center font-semibold">We Believe In Everyone Having a Say</h1>
        <Image
          src={Images.model8}
          alt="modle preview"
          width={800}
          height={400}
        />
        <article className="text-center indent-5 p-4 sm:p-10 sm:indent-8 lg:w-1/2 lg:indent-0">
          <p>We make clothes designed to highlight your lifestyle. We work with some of the most exciting up-and-coming designers to create looks that are as fresh as they are exciting. Our individual pieces can find a comfortable home in any wardrobe, while also going together to make killer looks.</p>
          
        </article>
      </div>

      <div className="w-full min-h-[200px] grid grid-cols-1 place-items-center gap-4 text-center p-5 lg:grid-cols-3">
        <article className="sm:w-3/5 lg:w-full">
          <h4 className="uppercase font-semibold mb-2">sustainability</h4>
          <p>All our materials and production processes are designed to have minimal impact on the planet.</p>
        </article>
        <article className="sm:w-3/5 lg:w-full">
          <h4 className="uppercase font-semibold mb-2">Transparency</h4>
          <p>We strive to be open and honest about how we make our clothes and conduct business.</p>
        </article>
        <article className="sm:w-3/5 lg:w-full">
          <h4 className="uppercase font-semibold mb-2">Fairness</h4>
          <p>We ensure that every party in our supply chain is paid a fair income for their work.</p>
        </article>
      </div>
    </div>
  )
}
