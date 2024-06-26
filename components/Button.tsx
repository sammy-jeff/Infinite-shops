'use client'

import { useFormStatus } from "react-dom";


type BtnProps = {
    btnText:string;
}
const Button = ({btnText}:BtnProps) => {
    const {pending} =useFormStatus()
  return (
    <button type='submit' className='p-4 border-[#607d8b] border-[2px] text-[#607d8b]'>{pending?'please wait':btnText}</button>
  )
}

export default Button