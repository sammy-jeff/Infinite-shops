import { cookies } from 'next/headers'
import ReusableForm from '@/components/ReusableForm'
import { createServerActionClient } from '@supabase/auth-helpers-nextjs';
import { redirect } from 'next/navigation';
import { Metadata } from 'next';
export const dynamic = 'force-dynamic';
export const metadata: Metadata = {
  title: 'Sign up',
  description: 'User Sign up',
}
let errorMsg='';
let successMessage = ''
async function handleSignUp(formData:FormData){
  'use server'
  const supabase = createServerActionClient({ cookies })
    const {data,error} = await supabase.auth.signUp({
      email:formData.get('email') as string,
      password:formData.get('password') as string,
      options:{
        emailRedirectTo:`localhost:3000/sign-in`,
        data:{
          username:formData.get('username')
        } 
      }
    })
    // console.log(data);
    
    if (error) {
      errorMsg=error.message
    }
    else if (data.user?.identities?.length) {
      successMessage='We sent a verification link to your email!!'
      errorMsg=''
    }else{
      errorMsg='User already exists'
    }
   
   console.log(`Error:${errorMsg}`);
   console.log(`Success:${successMessage}`);
return
}
const SignUp =async () => {
  const supabase = createServerActionClient({ cookies })
  const {data} = await supabase.auth.getSession()
  if (data.session) {
    redirect('/')
  }
  // console.log(data);
  
  return (
    <main className='flex justify-center items-center min-h-[calc(100vh-80px)]'>
      <form action={handleSignUp} className='border dark:border-black w-[min(80%,500px)] flex flex-col items-center py-6 backdrop-blur-md shadow-md'>
        <ReusableForm title={`Signup`} btnText={'signup'} leading={`Already have an account?`} link={`sign-in`} allow1={true} successMessage={successMessage} error={errorMsg}/>
      </form>
    </main>
  )
}

export default SignUp