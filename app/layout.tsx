import Nav from '@/components/Nav'
import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import CartContext from '@/components/CartContext'
import Footer from '@/components/Footer'
import CartVisibility from '@/components/CartVisibility'
import ThemeToggle from '@/components/ThemeToggle'
import { ThemeProvider } from '@/components/ThemeProvider'

const poppins = Poppins({ subsets: ['latin'],weight:['100','200','300','400','500','600','700','800','900'] })

export const metadata: Metadata = {
  title: 'Infinite Shops',
  description: 'New Generation Furniture Shop',
}

export default function RootLayout({
  children,

}: {
  children: React.ReactNode,

}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.className} `}>
       <ThemeProvider defaultTheme='system' enableSystem attribute='class' disableTransitionOnChange>
        <CartVisibility>
          <CartContext>
          <div className='flex flex-col min-h-screen'>
            <Nav/>
            {children}
            <Footer/>
          </div>
          <ThemeToggle/>
          </CartContext>
          </CartVisibility>
       </ThemeProvider>
        </body>
    </html>
  )
}
