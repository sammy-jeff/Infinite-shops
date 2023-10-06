import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-[#3a3a3a] text-white h-[100px] flex justify-center items-center pb-3'>
        <div className='w-[93%] flex flex-col justify-center items-center gap-y-3 lg:flex-row lg:justify-between'>
            <p className='text-[clamp(11.85px,4vw,13px)]'>Copyright © 2023 Infinite-Shops</p>
            <p className='text-[clamp(13px,4vw,15px)] font-semibold'>Powered by Infinite-Shops</p>
        </div>
    </footer>
  )
}

export default Footer