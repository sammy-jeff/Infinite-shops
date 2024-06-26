'use client'

import { useCart } from "@/app_state/cart"
import CartModal from "./CartModal"
import { usePathname } from "next/navigation"
import {useEffect} from 'react'
const CartVisibility = ({children}:{children:React.ReactNode}) => {
    const cartVisibility = useCart((state:any)=>state.cartVisibility)
    const closeCart = useCart((state:any)=>state.closeCart)
    const pathname = usePathname()
    useEffect(()=>{
        closeCart()
    },[pathname])
    return (
        <>
            {children}
            {cartVisibility&&<CartModal/>}
        </>
    )
}

export default CartVisibility