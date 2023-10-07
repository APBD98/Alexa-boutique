import Card from "@/components/card/card"


type data = {
    id:string,
    title:string,
    price:number,
    image:string
}

async function getData() {
    try {
        const res = await fetch('https://fakestoreapi.com/products')
        return res.json()
    } catch (error) {
        return <h1>Something wrong</h1>
    }
   
  }

export default async function page() {
    const datas = await getData()
  return (
    <div className='w-full min-h-[1000px] pt-[200px] mb-20 grid grid-cols-2 gap-y-5 justify-items-center lg:grid-cols-3'>
        {
            datas.map((data:data) => (
                <Card
                    key={data.id}
                    id={data.id}
                    src={data.image}
                    alt={data.title}
                    title={data.title}
                    price={data.price}
                />
            ))
        }
    </div>
  )
}
