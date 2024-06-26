import Nav from '@/components/Nav'
import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import CartContext from '@/components/CartContext'
import Footer from '@/components/Footer'
import CartVisibility from '@/components/CartVisibility'
import ThemeToggle from '@/components/ThemeToggle'
import { ThemeProvider } from '@/components/ThemeProvider'
import { SpeedInsights } from "@vercel/speed-insights/next"
const poppins = Poppins({ subsets: ['latin'],weight:['100','200','300','400','500','600','700','800','900'] })

export const metadata: Metadata = {
  title: 'Infinite Shops',
  description: 'New Generation Furniture Shop',
}

export default function RootLayout({
  children,
  cartModal
}: {
  children: React.ReactNode,
  cartModal:React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.className} `}>
        <SpeedInsights/>
       <ThemeProvider attribute='class' disableTransitionOnChange>
        
          <CartContext>
          <div className='flex flex-col min-h-screen'>
            <Nav/>
            {children}
            {cartModal}
            <Footer/>
          </div>
          <ThemeToggle/>
          </CartContext>
        
       </ThemeProvider>
        </body>
    </html>
  )
}
