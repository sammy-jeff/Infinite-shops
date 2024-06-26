import React, { ReactNode } from 'react'

const ProductModal = ({children}:{children:ReactNode}) => {
  return (
    <div className='fixed py-[3rem] w-[100vw] top-0 bottom-0 left-0 right-0 bg-[rgba(0,0,0,0.6)] backdrop-blur-md z-[1000] flex justify-center items-center'>
        {children}
    </div>
  )
}

export default ProductModal