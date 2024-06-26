'use client'

import React, { ReactNode} from 'react'
import CartHeader from './CartHeader'
import CartItems from './CartItems'
import CartActions from './CartActions'

const CartModal = () => {
  // const router = useRouter()
  // const modalRef = useRef()
  // const handleClickOutside = (e:Event)=>{
  //   const modal = modalRef.current as any
  //   if (modal&&!modal.contains(e.target)){
  //     router.back()
  //   }
  //   return
  // }
  // useEffect(()=>{
  //   document.addEventListener('click',handleClickOutside)
  //   return ()=> {
  //     document.removeEventListener('click',handleClickOutside)
  //   }
  // },[])
  return (
    <div className='fixed h-screen w-[100vw]top-0 bottom-0 left-0 right-0 bg-[rgba(0,0,0,0.6)] z-[1000] lg:flex lg:justify-end dark:border-[slate-400]'>
        <div className='relative z-index-[10000] flex flex-col h-full bg-[#fff] dark:bg-slate-900 lg:w-[35%]'>
          <CartHeader/>
          <CartItems/>
          <CartActions/>
        </div>
    </div>
  )
}

export default CartModal