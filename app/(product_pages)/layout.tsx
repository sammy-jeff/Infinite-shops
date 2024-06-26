
import FilterComponent from '@/components/FilterComponent'


import React, { ReactNode, Suspense } from 'react'

const ProductPagesLayout = ({children}:{children:ReactNode}) => {
  return (
    <div className='flex flex-col min-h-screen '>  
        <div className='flex-1 flex justify-center'>
            <div className='w-[90%]'>
                {children}
            </div>
        </div>
        
        <Suspense>
            <FilterComponent/>
        </Suspense>
    </div>
  )
}

export default ProductPagesLayout