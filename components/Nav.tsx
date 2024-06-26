'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Logo from '../assets/transparent-logo.png'
import Link from 'next/link'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBars, faCaretDown, faShoppingCart, faTimes} from '@fortawesome/free-solid-svg-icons'
import {  usePathname } from 'next/navigation'
import { useCart } from '@/app_state/cart'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'

const Nav = () => {
    const [menu,showMenu] = useState(false)
    const pathName = usePathname()
    const cart:[] = useCart((state:any)=>state?.cart)
    // const openCart = useCart((state:any)=>state.openCart)
    const [basketQuantity,setBasketQuantity] = useState(0)
    const [height,setHeight] = useState(typeof window==='undefined'?0:scrollY)
    const [logoutLoading,setLogoutLoading] = useState(false)
    const supabase = createClientComponentClient()
    const [session,setSession] = useState(null as any)
    useEffect(()=>{
      const checkSession =async () => {
        const {data} = await supabase.auth.getSession()
        setSession(data.session as any)
         return
      }
      checkSession()
    },[pathName])
    useEffect(()=>{
        showMenu(false)
    },[pathName])
    useEffect(()=>{
        window.addEventListener('scroll',()=>setHeight(scrollY))
        return ()=>window.removeEventListener('scroll',()=>setHeight(scrollY))
    },[])
    useEffect(()=>{
        const cartQuantity = cart?.reduce((val:any,acc:any)=>{
            return val + acc.quantity
        },0)
        setBasketQuantity(cartQuantity)
    },[cart])
    const logout = async ()=>{
        try {
            
            if(confirm('logout')){
                setLogoutLoading(true)
                await supabase.auth.signOut()
                setLogoutLoading(false)
                window.location.reload()
            }
            return
        } catch (error) {
            setLogoutLoading(false)
            console.log(error);
        }

    }
   
    
  return (
    <header className={`flex h-[80px] justify-center w-full pt-6 pb-4 transition-all duration-300 ease-in-out  ${height > 120 && 'fixed top-0 left-0 right-0  backdrop-blur-md bg-[rgba(255,255,255,0.7)] dark:bg-transparent z-[1000]'}`}>
        <div className='w-[93%] flex items-center h-full lg:w-[90%]'>
            <Link href={`/`} className='flex  align-middle flex-1 lg:flex-[0.07]'>
                <Image className='w-[60px] h-auto block object-contain ' src={Logo} alt='company_logo'/>
            </Link>
            <ul className={`h-[0px] overflow-hidden absolute left-0 right-0 top-[80px] z-10 ${menu&&`h-[190px] border dark:border-none overflow-y-auto dark:bg-slate-800 bg-[#f9f9f9]`} lg:flex-1 lg:relative lg:h-full lg:bg-inherit lg:flex lg:top-0 lg:justify-between lg:left-auto lg:right-auto`}>
                <div className='px-4 my-4 flex flex-col gap-y-4 lg:flex-row lg:gap-y-0 lg:items-center lg:gap-x-4'>
                    {/* <li className='link-styles border-none'><Link href={`#`}>All Products</Link></li> */}
                    <li className='link-styles'><Link href={`/all-products?sort=_createdAt desc`}>All Products</Link></li>
                    <li className='link-styles'><Link href={`/sofa?sort=_createdAt desc`}>Sofa</Link></li>
                    <li className='link-styles'><Link href={`/chairs?sort=_createdAt desc`}>Chairs</Link></li>
                    <li className='link-styles'><Link href={`/tables?sort=_createdAt desc`}>Tables</Link></li>
                </div>
            </ul>
            <div className='flex items-center gap-x-4 px-4'>
            <div className='link-styles'>
                        {session?<div className='relative group/items cursor-pointer'>
                            <div>
                                <p>
                                {session?.user?.user_metadata?.username}
                                <span><FontAwesomeIcon icon={faCaretDown} width={15}/></span>
                                </p>
                            </div>
                            <div className='absolute z-20 bg-white dark:bg-slate-500 flex flex-col items-center top-8 border dark:border-black shadow-md py-4 px-1 gap-y-3 opacity-0 group-hover/items:opacity-100'>
                                <button onClick={logout} className='border-b-1 cursor-pointer'>{logoutLoading ? 'Loading...' : 'Logout'}</button>
                                <Link href={`/transactions`}>Transactions</Link>
                            </div>
                            </div>:<Link href={`/sign-in`}>Account</Link>}
                    </div>
                {/* <span className='text-[#78909c] text-sm text font-bold'>{formatPrice(priceAccrued)}</span> */}
                <Link href={`/cart`} className={`relative ${pathName==='/cart'&&'pointer-events-none'}`}>
                    <FontAwesomeIcon icon={faShoppingCart} color='#78909c'/>
                    <span className='absolute bottom-[11.5px] bg-[#78909c] left-1/2 rounded-full px-[5px] py-[1px] text-[10px] shadow-lg font-bold'>{basketQuantity}</span>
                </Link>
            </div>
            <div onClick={()=>showMenu(prev=>!prev)} className='pl-4 lg:hidden'>
                <FontAwesomeIcon icon={menu?faTimes:faBars} color='#78909c'/>
            </div>
        </div>
    </header>
  )
}

export default Nav