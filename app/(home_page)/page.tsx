import Image from 'next/image'
import Link from 'next/link'
import React, { Suspense } from 'react'
import chair from '../../public/img_optimized.webp'
import gaming_chair from '../../public/gaming_chair.webp'
import certificate from '../../assets/certificate-icon.webp'
import truck from '../../assets/truck.webp'
import setup from '../../assets/setup.webp'
import warranty from '../../assets/warranty.webp'
import pic1 from '../../assets/pic20-free-img.png'
import pic2 from '../../assets/clients01-free-img.png'
import pic3 from '../../assets/pic19-free-img.png'
import HomePLatestProducts from '@/components/HomePLatestProducts'
import SkeletonUI from '@/components/SkeletonUI'
import { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Home',
  description:'Explore our Shop'
}
const Home =async () => {
  return (
    <main className='flex flex-1 justify-center'>
      <div className='w-[93%]'>
      <section className='flex justify-center min-h-[70vh] relative mt-6 before:absolute  before:bg-[#fafafa] dark:before:bg-slate-900 before:block before:w-full before:h-full' >
        <div className='w-[85%] h-full flex items-center absolute bg-[url(/bg-image-section-removebg-preview.png)] bg-no-repeat bg-cover lg:bg-left-top'>
        <div className='relative flex flex-col gap-y-3'>
          <h2 className='text-[#607d8b] text-[clamp(32px,4vw,60px)] font-bold uppercase'>Style<br/>Comfort &<br/>Affordable</h2>
          <Link href={`/all-products`} className='border-[2px] border-[#607d8b] px-6 py-2 mt-3 w-[50%] flex justify-center items-center hover:bg-[#607d8b] hover:text-white'>Explore store</Link>
        </div>
        </div>
        </section>
        <section className='mt-8 w-full min-h-[60vh] lg:grid lg:grid-rows-2 lg:gap-y-3'>
          <div className='flex flex-col items-center justify-center lg:flex-row lg:gap-x-2'>
            <Image src={chair} alt='chair' className='object-cover w-[373.33px] h-[321.19px] block' loading='lazy' placeholder='blur'/>
            <div className='py-8 text-center text-[#607d8b] relative bg-[url(/bricks.jpg)] bg-cover bg-no-repeat mt-3 lg:flex-1 h-[345px] lg:h-full w-full flex flex-col justify-center before:block before:absolute before:bg-[rgba(250,250,250,0.8)] dark:before:bg-[rgba(15,23,42,0.8)] before:w-full before:h-full'>
                <div className='absolute h-full w-full flex flex-col justify-center lg:items-start md:items-start lg:px-14'>
                    <h2 className='text-[clamp(28px,4vw,36px)] font-bold'>Chair Collection</h2>
                  <p className='font-semibold'>Launch Offer 15% Off!</p>
                  <Link href={`/chairs`} className='font-semibold mt-7 border-[2px] border-[#607d8b] flex items-center justify-center px-3 py-2 w-50 mx-auto lg:mx-0'>View Collection -{'>'}</Link>
                </div>
            
              </div>
          </div>
          <div className='flex flex-col-reverse items-center justify-center lg:flex-row lg:gap-x-2'>
            <div className='py-8 text-center text-[#607d8b] relative bg-[url(/bricks.jpg)] bg-cover bg-no-repeat mt-3 lg:flex-1 h-[345px] lg:h-full w-full flex flex-col justify-center before:block before:absolute before:bg-[rgba(250,250,250,0.8)] dark:before:bg-[rgba(15,23,42,0.8)] before:w-full before:h-full'>
                <div className='absolute h-full w-full flex flex-col justify-center lg:items-start md:items-start lg:px-14'>
                    <h2 className='text-[clamp(28px,4vw,36px)] font-bold'>Modern Collection</h2>
                  <p className='font-semibold'>New Season Stock</p>
                  <Link href={`/tables`} className='font-semibold mt-7 border-[2px] border-[#607d8b] flex items-center justify-center px-3 py-2 w-50 mx-auto lg:mx-0'>View Collection -{'>'}</Link>
                </div>
            
              </div>
              <Image src={gaming_chair} alt='chair' className='object-cover place-items-end mt-2 w-[373.33px] h-[321.19px] block'  loading='lazy' placeholder='blur'/>
          </div>
          <div className='flex flex-col justify-center items-center lg:flex-row lg:justify-evenly mt-6 text-[#607d8b] text-[clamp(13px,4vw,16px)]'>
            <div className='flex flex-col items-center'>
              <Image src={certificate} alt='certificate'  loading='lazy' placeholder='blur'/>
              <p>10 Years Experience</p>
            </div>
            <div className='flex flex-col items-center'>
              <Image src={truck} alt='truck'  loading='lazy' placeholder='blur'/>
              <p>Flexible Delivery</p>
            </div>
            <div className='flex flex-col items-center'>
              <Image src={setup} alt='hammer'  loading='lazy' placeholder='blur'/>
              <p>Free Installation</p>
            </div>
            <div className='flex flex-col items-center'>
              <Image src={warranty} alt='shield'  loading='lazy' placeholder='blur'/>
              <p>5 Years Warranty</p>
            </div>
          </div>
        </section>
        <section className='mt-10 min-h-[40vh] bg-[#fafafa] dark:bg-slate-900 relative before:block before:w-full before:h-full before:absolute before:bg-[url(/cactus-plant-removebg-preview.png)] before:inset-0 before:bg-no-repeat before:bg-left-top before:bg-cover lg:before:bg-contain lg:before:bg-right py-4 px-11 overflow-hidden'>
          <div className='w-full h-full flex flex-col absolute justify-center'>
              <h2 className='text-[#A71052] text-[clamp(28px,4vw,42px)] font-semibold'>Sale!</h2>
              <p className='text-[clamp(22px,4vw,30px)] text-[#607d8b] font-semibold'>10% Off On All Products</p>
              <Link className='font-semibold mt-7 border-[2px] border-[#607d8b] flex items-center justify-center px-3 py-2 w-40 text-[#607d8b]' href={`/all-products`}>Shop Now</Link>
          </div>
        </section>
        <section className='mt-20 min-h-[70vh]'>
          <h2 className='text-center relative text-[#607d8b] text-[clamp(22px,4vw,30px)] flex flex-col items-center gap-y-4 '>Our Latest Products <span className='w-[60px] h-[3px] bg-[#607d8b]'></span></h2>
          <div>
          <Suspense fallback={<SkeletonUI num={4}/>}>
                <HomePLatestProducts/>
            </Suspense>
          </div>
        </section>
        <section className='mt-10 min-h-[60vh] bg-[#fafafa] dark:bg-slate-900 relative py-8 mb-8'>
          <h2 className='text-center relative text-[#607d8b] text-[clamp(22px,4vw,30px)] flex flex-col items-center gap-y-2 '>Testmonials<span className='w-[60px] h-[3px] bg-[#607d8b]'></span></h2>
          <div className='mt-8 flex flex-col gap-y-8 px-3 lg:flex-row text-[#3a3a3a] dark:text-slate-200 lg:gap-x-4 '>
            <div className='flex flex-col items-center justify-center gap-y-4 text-center'>
              <p>&quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo&quot;</p>
              <div className='flex items-center'>
                <Image src={pic1} alt='pic1' className='relative w-[60px] h-[60px] object-contain rounded-full'  loading='lazy' placeholder='blur' />
                <p>Paul Smitten</p>
              </div>
            </div>
            <div className='flex flex-col items-center justify-center gap-y-4 text-center'>
            <p>&quot;Convallis lacinia optio! Hac morbi laboris deleniti, hymenaeos, nihil, magnis corrupti nisl dis dolores aptent eveniet nostrud eu&quot;</p>
              <div className='flex items-center'>
                <Image src={pic2} alt='pic1' className='relative w-[60px] h-[60px] object-contain rounded-full'  loading='lazy' placeholder='blur' />
                <p>Lauren Lane</p>
              </div>
            </div>
            <div className='flex flex-col items-center justify-center gap-y-4 text-center'>
            <p>&quot;Semper laboris possimus, molestiae, anim ornare? Molestie! Dictumst scelerisque error, autem leo. Autem integer diamlorem&quot;</p>
              <div className='flex items-center'>
                <Image src={pic3} alt='pic1' className='relative w-[60px] h-[60px] object-contain rounded-full'  loading='lazy' placeholder='blur' />
                <p>Patricia Warren</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}

export default Home