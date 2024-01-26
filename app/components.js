'use client'
import React from 'react'
import Link from 'next/link'
import * as myClasses from './myClasses';
import * as myFunctions from './myFunctions'
import Image from 'next/image';


//heder
export function Header() {

  return (
    //navbar

    <div>
      <div className='h-[76px] flex justify-between  '>
        <div className='mt-5 order-first'>
          <Link className=' font-bold text-[26px] pl-4 text-center' rel="" type="" href="/">ONE Accessory</Link>

        </div>
        {/* hamburger_menu */}
        <div onClick={myFunctions.hamburgerClick} className='order-last pr-4  pt-7'>
          <div id="hamburger" class="flex flex-col gap-2 ">
            <span id='s' class="block  place-self-end w-5 h-0.5 bg-gray-600"></span>
            <span id='s' class="block  w-8 h-0.5 bg-gray-600 transition duration-500  "></span>
            <span id='s' class="block w-5 h-0.5 bg-gray-600 duration-500"></span>
          </div>
        </div>

      </div>
      {/* menu */}
      <div id='menu' className=' hidden w-full  h-screen  absolute top-[76px]   backdrop-blur-md bg-white/30 ' >
        <div className='  grid justify-items-center  mt-10'>
          <Link className={myClasses.liClass} href="/">Shop</Link>
          <Link href="/" className={myClasses.liClass}>Products</Link>
          <Link href="/" className={myClasses.liClass}>About</Link>
          <Link href="/" className={myClasses.liClass}>Gallery</Link>
        </div>
      </div>

    </div>


  )
}

export function HomePage() {


  return (
    <div className='mt-8 mx-6'>
      <div >
        <Link className='text-sm' rel="" type="" href="/">Big 2.00” AmoLED Display | 100+ Sport Modes</Link>
      </div>
      <div className='mt-4'>
        <p className='font-light text-[42px] leading-[44px] whitespace-nowrap'>
          The Perfect <br></br>
          Moment Between <br></br>

          <span className='break-normal font-bold text-[42px] '>Past and Future</span>
        </p>
      </div>
      <div>
        <div className=' h-auto'>
          <Image
            src="/images/firstBanner.png"
            width={500}
            height={500}
            alt="Picture of the watch"
            className=''
          />
        </div>
        <div className='columns-2 gap-4 mt-4'>
          <div className=' h-auto'>
            <Image
              src="/images/secondBanner.png"
              width={500}
              height={500}
              alt="Picture of the watch"
              className=''
            />
          </div>
          <div className=' h-auto'>
            <Image
              src="/images/thirdBanner.png"
              width={500}
              height={500}
              alt="Picture of the watch"
              className=''
            />
          </div>
          <div className='  absolute left-8 flex row-span-4 gap-3'>
            <div class=" ring-2 ring-slate-600 ring-offset-2   rounded-full bg-slate-600 w-3 h-3 mt-7  "></div>
            <div class=" rounded-full bg-slate-300 w-3 h-3 mt-7  "></div>
            <div class=" rounded-full bg-slate-300 w-3 h-3 mt-7  "></div>
            <div class=" rounded-full bg-slate-300 w-3 h-3 mt-7  "></div>
          </div>



        </div>

      </div>


    </div>
  )

}