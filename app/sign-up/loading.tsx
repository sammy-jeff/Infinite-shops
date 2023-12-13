import AuthLoader from '@/components/AuthLoader'
import React from 'react'

const SignUpLoading = () => {
  return (
    <div className='border dark:border-black w-[min(80%,500px)] flex flex-col items-center py-6 backdrop-blur-md shadow-md animate-pulse my-auto mx-auto px-4'>
      <AuthLoader header='Signup'/>
    </div>
  )
}

export default SignUpLoading