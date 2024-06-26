
const AuthLoader = ({header}:{header:string})=>{
    return <>
    <h2 className='text-[clamp(24px,4vw,42px)] text-[#607d8b] font-bold'>{header}</h2>
      <div className='border p-4 rounded-[5px] h-5 w-full bg-gray-400 mt-4'/>
      <div className='relative border flex items-center p-4 rounded-[5px] h-5 w-full bg-gray-400 mt-6'/>
      <div className="mx-auto w-[80%] bg-gray-400 rounded-[5px] mt-6 h-5"/>
      <div className="mt-6 bg-gray-400 h-2 w-10"/>
    </>
}

export default AuthLoader