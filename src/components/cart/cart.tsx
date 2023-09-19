import {useSession} from 'next-auth/react'
import {AiOutlineClose} from 'react-icons/ai'

type Props = {
    styling:boolean,
    closeCart: () => void
}
function Cart(props:Props) {
  const {data: session} = useSession()
  return (
    <div className={`w-full h-screen bg-yellow-700 fixed top-0 right-0 flex justify-center cursor-pointer lg:w-1/3 ${props.styling ? 'translate-x-0 transition ease-out duration-500' : 'translate-x-[1000px] transition-all duration-700'}`}>
      {
        session? (
          <>
        <h1 className="mt-24">Ready to Checkout?</h1>
        <div className='absolute text-xl top-5 right-5' onClick={props.closeCart}>
            <AiOutlineClose/>
        </div>
        </>
        ):
        ( <>
          <h1>Not login</h1>
          <div className='absolute text-xl top-5 right-5' onClick={props.closeCart}>
            <AiOutlineClose/>
          </div>
        </>
        )
      }
    </div>
  )
}

export default Cart