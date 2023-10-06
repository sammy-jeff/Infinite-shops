import { cookies } from 'next/headers'
import ReusableForm from '@/components/ReusableForm'
import {  createServerActionClient,createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import {redirect} from 'next/navigation';
import { revalidatePath } from 'next/cache';

let errorMsg= '';
async function handleSignIn(formData:FormData){
  'use server'
  const supabase = createServerActionClient({ cookies })
    const {error} = await supabase.auth.signInWithPassword({
      email:formData.get('email') as string,
      password:formData.get('password') as string
    })
    if (error) {
      errorMsg=error.message
    }
    else{
      errorMsg=''
      // revalidatePath('/')
    }
    
}
const SignIn =async () => {
  const supabase = createServerComponentClient({cookies})
  const {data} = await supabase.auth.getSession()
  if (data.session) {
    redirect('/')
  }
  
  return (
    <main className='flex justify-center items-center min-h-[calc(100vh-80px)]'>
      <form action={handleSignIn} className='border w-[min(80%,500px)] flex flex-col items-center py-6 backdrop-blur-md shadow-md'>
        <ReusableForm leading='New to infinite-shops?'  link='sign-up' title='Login' btnText='Login' allow={true} error={errorMsg}/>
      </form>
    </main>
  )
}

export default SignIn