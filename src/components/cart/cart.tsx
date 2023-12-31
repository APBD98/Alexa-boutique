import {useSession} from 'next-auth/react'
import { useEffect, useState } from 'react'
import {AiOutlineClose, AiFillDelete} from 'react-icons/ai'
import  { FetchProduct } from './fetchProduct'
import Image from 'next/image'
import Link from 'next/link'
import  { useCartStore } from '@/config/store/store'


type Props = {
    styling:boolean,
    closeCart: () => void
}

type userCart = {
  id:number,
  userId:number,
  date:string,
  products:[]
}


interface CartItem {
  productId: number;
  quantity: number;
}

interface CartEntry {
  date: string;
  id: number;
  products: CartItem[];
}




function Cart(props:Props) {
  const {data: session} = useSession()
  const [loading, setLoading] = useState(true);
  const [totalPayment, setTotalPayment] = useState(0)
  const cartList:any = useCartStore((state:any) => state.cartList)
  const successLoad:any = useCartStore((state:any) => state.successLoad)
  const setCartList = useCartStore((state:any) => state.setCartList);
  const setSuccessLoad = useCartStore((state:any) => state.setSuccessLoad)

  async function fetchData() {
    try {
      // Replace this with your actual usercart endpoint
      const response = await fetch(`https://fakestoreapi.com/carts/user/${session?.user.id}`);
      const userCart: CartEntry[] = await response.json();
      const theSameProduct: Record<number, boolean> = {};
      const productDetails: CartItem[] = [];

      // Flatten the nested structure and fetch product details
      for (const cartItem of userCart) {
        for (const productItem of cartItem.products) {
          if (!theSameProduct[productItem.productId]) {
            theSameProduct[productItem.productId] = true
            const productData = await FetchProduct(productItem.productId);
            productDetails.push({
              ...productData,
              quantity: productItem.quantity,
            });
          }
        }
      }


      setCartList(productDetails);
      setLoading(false);
      setSuccessLoad(true)
    } catch (error) {
      // Handle errors
      console.error(error);
    }
  }


  const totalCount = () => {
    let sum = 0;
    if(cartList){
      cartList.forEach((item:any) => {
        let perItem = item.price * item.quantity
        sum+=perItem
      });
    }
    setTotalPayment(sum)

  }
  
  useEffect(() => {
    if(session){
      fetchData();
      totalCount()
    }
  }, [session, setCartList, cartList, totalPayment]);

  
  
  return (
    <div className={`w-full h-screen bg-white fixed top-0 right-0 pl-10 cursor-pointer lg:w-1/3 ${props.styling ? 'translate-x-0 transition ease-out duration-500' : 'translate-x-[1000px] transition-all duration-700'}`}>
      <div className='absolute text-xl top-5 right-5' onClick={props.closeCart}>
            <AiOutlineClose/>
      </div>
      {
        session? (
          <>
          <div className='mt-24'>
            <h1>Hei {session.user.name.firstname},</h1>
            <p>Ready to Checkout?</p>
          </div>
        <div className='mt-10 flex flex-col justify-start items-start gap-3 w-full h-1/2 overflow-y-scroll'>
          {
            loading? <p>wait a minutes...</p> : (
              cartList.map((item:any) => (
                <div className={`w-full h-28 flex gap-5`} key={item.id}>
                  <div>
                    <Image src={item.image} alt={item.title} width={40} height={40} />
                  </div>
                  <div>
                    <h1 className='truncate w-[300px] sm:w-full lg:w-[300px]'>{item.title}</h1>
                    <div className='flex justify-between items-center'>
                      <div>
                        <p>${item.price}</p>
                        <p className='text-sm'>quantity: {item.quantity}</p>
                      </div>
                      <div className='text-gray-600 pr-10'>
                        <AiFillDelete/>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )
          }
          
        </div>

        <div className='flex justify-evenly items-center w-full h-28 absolute bottom-0'>
          <div>
            <h1>Total Amount:</h1>
            <p>${totalPayment.toFixed(2)}</p>
          </div>
          <div className='w-28 h-11 bg-red-900 text-center pt-3 rounded-xl'>
            <button>Payment</button>
          </div>
        </div>
        
        </>
        ):
        ( 
        <div className='mt-24'>
          <h1>Not login</h1>
          <Link href={'/api/auth/signin'} className="underline">Sign in</Link>
        </div>
        )
      }
    </div>
  )
}

export default Cart