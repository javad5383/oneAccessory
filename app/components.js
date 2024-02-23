'use client'

import Link from 'next/link'
import * as myClasses from './myClasses';
import * as myFunctions from './myFunctions'
import Image from 'next/image';
import Script from 'next/script';
import { useRef, useEffect } from 'react';
import React from 'react';



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
      <div id='menu' className=' hidden w-full  h-screen  absolute z-30 top-[76px]   backdrop-blur-md bg-white/30 ' >
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

  myFunctions.AnimateCarousel();


  return (

    <div>
      <div className='mt-8 mx-6'>
        <div >
          <Link className='text-sm' rel="" type="" href="/">Big 2.00” AmoLED Display | 100+ Sport Modes</Link>
        </div>
        <div className='mt-4'>
          <p className='font-light  text-[42px] leading-[44px] whitespace-nowrap'>
            The Perfect <br></br>
            Moment Between <br></br>

            <span className='break-normal font-bold text-[42px] '>Past and Future</span>
          </p>
        </div>
        <div >
          {/* banner */}


          <div className=" relative overflow-x-scroll  h-[340px] w-{150%} slideShow">
            <div id='slider' className=' absolute w-[100%]  '>
              <Image
                src="/images/firstBanner.png"
                width={500}
                height={500}
                alt="Picture of the watch"
                className='h-full w-full'
              />
            </div>
            <div id='slider' className=' absolute w-[100%]   left-96 '>
              <Image
                src="/images/firstBanner.png"
                width={500}
                height={500}
                alt="Picture of the watch"
                className='h-full w-full'
              />
            </div>
            <div id='slider' className='absolute w-[100%]  left-[768px]   '>
              <Image
                src="/images/firstBanner.png"
                width={500}
                height={500}
                alt="Picture of the watch"
                className='h-full w-full'
              />
            </div>
          </div>


          <div className='inline-block  columns-2 gap-4 '>
            <div className=' h-auto'>
              <Image
                src="/images/secondBanner.png"
                width={500}
                height={500}
                alt="Picture of the watch2"
                className=''
              />
            </div>
            <div className=' h-auto'>
              <Image
                src="/images/secondBanner.png"
                width={500}
                height={500}
                alt="Picture of the watch3"
                className=''
              />
            </div>

          </div>
          {/* spans */}
          <div className='   flex place-items-start w-full row-grid-4 gap-3'>
            <div class=" ring-2 ring-slate-600 ring-offset-2   rounded-full bg-slate-600 w-3 h-3 mt-7  "></div>
            <div class=" rounded-full bg-slate-300 w-3 h-3 mt-7  "></div>
            <div class=" rounded-full bg-slate-300 w-3 h-3 mt-7  "></div>
            <div class=" rounded-full bg-slate-300 w-3 h-3 mt-7  "></div>
          </div>
        </div>
        {/* categories */}
        <div className='mt-20'>
          <p className=' text-3xl leading-[44px] whitespace-nowrap'> Shop
            <span className='break-normal font-bold text-3xl '>By Categories</span>
          </p>
        </div>
        <div className='row-auto flex gap-4 h-full w-full  mt-12'>
          <div className='h-full w-full '>
            <Image
              src="/images/category1.png"
              width={500}
              height={500}
              alt="Picture of the categories"
              className='h-auto w-full'
            />
            <p className='text-center pt-3 text-base'>
              True Wireless Earbuds
            </p>

            <Link className='text-sm pt-2 pl-12  text-center' rel="" type="" href="/">1.6K+ Items</Link>


          </div>
          <div>
            <Image
              src="/images/category2.png"
              width={500}
              height={500}
              alt="Picture of the categories"
              className='h-auto w-full'
            />
            <p className='text-center pt-3 text-base'>
              Smart Watch
            </p>

            <Link className='text-sm pt-2 pl-12  text-center' rel="" type="" href="/">1.6K+ Items</Link>

          </div>



        </div>

      </div>
      <div className='pt-20'>
        <p className=' font-thin text-3xl l text-center'> Best Seller
          <span className=' font-bold text-3xl '> Products</span>
        </p>
        <p className=' font-thin text-base pt-2 text-center'>Check our best seller products on Elma website right now</p>
      </div>
      {/* Cart */}
     <myFunctions.Cart imgSrc="/images/HeadPhone.png" price={"20"} offer={"18.9"}/>
     <myFunctions.Cart imgSrc="/images/watch.png"  price={"20"} offer={"18.9"} />
     <myFunctions.Cart imgSrc="/images/earBuds.png"  price={"20"} offer={"18.9"}  />
     <myFunctions.Cart imgSrc="/images/iphone.png"  price={"20"} offer={"18.9"}  />
     <myFunctions.Cart imgSrc="/images/appleWatch.png"  price={"20"} offer={"18.9"}  />
     <myFunctions.Cart imgSrc="/images/lapTop.png"  price={"20"} offer={"18.9"}  />
    
      
     
    </div>


  )



}