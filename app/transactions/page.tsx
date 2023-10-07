import { cookies } from 'next/headers'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { PaymentType } from '@/types/PaymentType'
import { redirect } from 'next/navigation'
import { formatPrice } from '@/helper/priceFormatter'
import { formatDate } from '@/helper/dateFormatter'
export const dynamic = 'force-dynamic';
const Transactions =async () => {
    const supabase = createServerComponentClient({cookies})
    const {data,error} = await supabase.from('User_Transactions').select()
    const {data:{session}} = await supabase.auth.getSession()
    if (!session) {
        redirect('/sign-in')
    }
  return (
    <main className='flex min-h-[calc(100vh-80px)] justify-center py-10'>
  <div className='w-full md:w-[85%] h-full flex flex-col'>
    <h2 className='text-center text-[#3a3a3a] dark:text-[#607d8b] text-[clamp(20px,4vw,32px)] font-medium'>
      Transactions Record
    </h2>
    {data?.length ? (
      <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 mt-4'>
        {data.map((transaction: PaymentType) => (
          <div
            key={transaction.transaction_id}
            className='p-4 border border-gray-300 rounded-lg flex flex-col justify-center items-center'
          >
            <div className='font-medium text-center text-[clamp(14px,3vw,18px)]'>Transaction_id</div>
            <div className='text-center text-[clamp(12px,3vw,16px)]'>{transaction.transaction_id}</div>
            <div className='font-medium text-center text-[clamp(14px,3vw,18px)]'>Transaction_Ref</div>
            <div className='text-center text-[clamp(12px,3vw,16px)]'>{transaction.flw_ref}</div>
            <div className='font-medium text-center text-[clamp(14px,3vw,18px)]'>Amount</div>
            <div className='text-center text-[clamp(12px,3vw,16px)]'>{formatPrice(transaction.amount)}</div>
            <div className='font-medium text-center text-[clamp(14px,3vw,18px)]'>Date</div>
            <div className='text-center text-[clamp(12px,3vw,16px)]'>{formatDate(transaction.created_at)}</div>
          </div>
        ))}
      </div>
    ) : (
      <h3 className='my-9 mx-auto'>No transaction found</h3>
    )}
  </div>
</main>

  )
}

export default Transactions