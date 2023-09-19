import Image, { StaticImageData } from "next/image"
import Link from "next/link"

type card = {
    id:string,
    src:string | StaticImageData,
    alt:string,
    title:string,
    price:number
}

export default function Card(props:card) {
  return (
    <Link href={`/shop/${props.id}`}>
      <div className="w-[170px] h-[350px] p-2 flex flex-col justify-between">
          <Image
          src={props.src} 
          alt={props.alt}
          width={150}
          height={150}/>
          <div className="flex flex-col justify-end gap-1">
              <h1 className="text-sm truncate">{props.title}</h1>
              <p>$ {props.price}</p>
          </div>
      </div> 
    </Link>
  )
}
