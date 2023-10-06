import Nav from '@/components/Nav'
import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import CartContext from '@/components/CartContext'
import Footer from '@/components/Footer'
import CartVisibility from '@/components/CartVisibility'
import {SkeletonTheme} from 'react-loading-skeleton'

const poppins = Poppins({ subsets: ['latin'],weight:['100','200','300','400','500','600','700','800','900'] })

export const metadata: Metadata = {
  title: 'Infinite Shops',
  description: 'New Generation Furniture Shop',
}
// disable logs to the console when application is running in production
if (process.env.NODE_ENV === 'production') {
  console.log = () => {}
  console.error = () => {}
  console.debug = () => {}
}
export default function RootLayout({
  children,
  modal
}: {
  children: React.ReactNode,
  modal:React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${poppins.className} `}>
       <SkeletonTheme baseColor="#202020" highlightColor="#444">
       <CartVisibility>
        <CartContext>
        <div className='flex flex-col min-h-screen'>
          <Nav/>
          {children}
          <Footer/>
        </div>
        {modal}
        </CartContext>
        </CartVisibility>
       </SkeletonTheme>
        </body>
    </html>
  )
}
