import React from 'react'

const ProductPageLoading = () => {
  return (
    <div className='grid grid-cols-1 h-[70vh] lg:grid-cols-2 lg:w-[80%] animate-pulse mx-auto mt-4 mb-4'>
        <div className='w-full overflow-hidden bg-gray-200 h-full'>
        </div>
        <div className='p-4 relative flex flex-col'>
          <div className='flex-1'>
          <span className='text-[#78909c] font-semibold text-[12px] bg-gray-200 h-3 w-2'/>
          <h2 className='text-[#607d8b] mt-2 font-bold text-[clamp(16px,4vw,24px)] bg-gray-200 h-3 w-[80%]'/>
          <h3 className='mt-2 text-[#3a3a3a] dark:text-slate-200 font-semibold bg-gray-200 h-3 w-4'/>
          <p className='text-[#3a3a3a] dark:text-slate-200 mt-2 text-[clamp(13.6px,4vw,16px)] bg-gray-200 h-3 w-full'/>
          </div>
          <div className='mt-3 lg:mb-4 flex'>
              <div className='w-[50px] h-[30px bg-gray-200]'/>
              <div className='w-[50px] h-[30px] ml-3 bg-gray-200'/>
            </div>
          <div className='mt-2 lg:mt-0 flex items-center gap-4'>
          <div className='grid grid-cols-3 w-[121.45px] h-[38px]  bg-gray-200'/>
                
              
              <button className='flex items-center py-1 px-2 w-[121.45px] h-[38px]  bg-gray-200'/>
          </div>
        </div>
    </div>
  )
}

export default ProductPageLoading