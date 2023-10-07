import { ReactNode } from 'react'
import Navbar from '@/components/navbar/navbar'
import Footer from '@/components/footer/footer'
interface Layout{
    children:ReactNode,
  }
export default function Layout({ children }:Layout) {
    return (
      <div>
        <Navbar/>
        <main>{children}</main>
        <Footer/>
      </div>
      
    )
  }