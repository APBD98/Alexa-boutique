import Link from 'next/link'

type button ={
    href:string,
    styling:string,
    title:string
}
export default function Buttons(props:button) {
  return (
    <Link href={props.href}>
        <button className={`${props.styling} mt-10 text-lg p-2`}>{props.title}</button>
    </Link>
  )
}
