import Link from 'next/link'
import React from 'react'
import Button from './Button'

type FormProps={
    title:string,
    leading:string,
    link:string,
    btnText:string,
    allow?:boolean,
    allow1?:boolean,
    error?:string,
    successMessage?:string
}
const ReusableForm =async ({leading,link,title,btnText,allow,allow1,error,successMessage}:FormProps) => {
  
  return (
    <>
        <h2 className='text-[clamp(24px,4vw,42px)] text-[#607d8b] font-bold'>{title}</h2>
        {successMessage&&<p className='text-[clamp(12px,4vw,14px)] text-[#607d8b] font-bold text-left'>{successMessage}</p>}
        {error&&<p className='text-[clamp(12px,4vw,14px)] text-red-600 font-bold text-left'>{error}</p>}
        <div className='flex flex-col w-[85%] gap-y-6 mt-8'>
          <div className='border p-4 rounded-[5px] '>
          <input type='email' name='email' className='w-full dark:text-white text-[#3a3a3a] h-full outline-none' placeholder='email addresss *'  required/>
          </div>
          {allow1&&<div className='relative border flex items-center p-4 rounded-[5px] '>
          <input type='text' name='username'  className='w-full text-[#3a3a3a] h-full outline-none dark:text-white' placeholder='username *'  required/>
          </div>}
          <div className='relative border flex items-center p-4 rounded-[5px] '>
          <input type='password' name='password' className='w-full text-[#3a3a3a] h-full outline-none dark:text-white' placeholder='password *' required/>
          {/* <FontAwesomeIcon className='absolute right-3' color='#3a3a3a' width={20} height={20} icon={faEye}/> */}
          </div>
          {allow&&<Link href={`#`} className='text-[clamp(13px,4vw,15px)] font-normal text-[#78909c]'>Lost your password?</Link>}
          <Button btnText={btnText}/>
          <p>{leading} <Link className='text-[#607d8b] text-[clamp(13px,4vw,15px)] underline' href={`/${link}`}>{link}</Link></p>
        </div>
     </>
  )
}

export default ReusableForm