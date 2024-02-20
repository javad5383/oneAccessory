'use client'
import { useEffect , useRef } from "react";
import $ from 'jquery';
import Link from "next/link";
import Image from "next/image";

//open menu in mobile size
export function hamburgerClick() {
   
    var spanBurger = document.querySelectorAll('#s');
    var HBurgerDiv = document.querySelector('#hamburger');
    var menu = document.querySelector('#menu');
    //if display-none
    if (HBurgerDiv.classList.contains('gap-2')) {
        menu.classList.remove('hidden');
        HBurgerDiv.classList.replace('gap-2', 'poppedUp');
        spanBurger[0].classList.replace('block', 'hidden');
        spanBurger[1].classList.add('rotate-45' ,'w-9');
        spanBurger[2].classList.replace('w-5', 'w-9');
        spanBurger[2].classList.add('-rotate-45');
        //if display
    } else {
        menu.classList.add('hidden');
        HBurgerDiv.classList.replace('poppedUp', 'gap-2');
        spanBurger[0].classList.replace('hidden', 'block');
        spanBurger[1].classList.remove('rotate-45');
        spanBurger[2].classList.replace('w-9', 'w-5');
        spanBurger[2].classList.remove('-rotate-45');
    }
}

export function AnimateCarousel() {
    useEffect(() => {
      //  setInterval(sliding,250);
      var count = 0;
      function sliding() {
        if (count > 0) {
          $('.slideShow').children()[0].style.left="24rem";
          $('.slideShow').append($('.slideShow').children()[0]);
          count=0
        }
       
        
        
        $('.slideShow').children().animate({ left: '-=24rem' }, 2000);
        count++;
      }
      
      var interval1= setInterval(sliding, 5000);

     

    
    })
  
  }
  export function Cart({imgSrc , price , offer}) {
     return(
      <div>
      <div className='pt-14 h-full w-full'>
        <Image
          src={imgSrc}
          width={500}
          height={500}
          alt="Picture of the categories"
          className='h-full w-full'
        />

      </div>
      <div className='pl-8 w-full flex row-auto'>
        <svg class="w-4 h-4 text-gray-700  " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
        </svg>
        <p className='text-base pl-2 text-center leading-4 pt-[2px]'>5.0</p>
      </div>
      <div>
        <p className='pl-8 font-bold  text-3xl pt-4'>
          Beats by Dre C 3450
        </p>
        <div className='w-full flex row-auto pt-8'>
          <p className='pl-8 font-bold w-2/3 text-3xl '>
            ${price} <span className='text-xl text-gray-400 line-through decoration-4'>  ${offer}</span><span className='text-xl text-purple-500'>   30% off </span>

          </p>
          <div className='w-1/3 flex row-auto justify-end pr-5 gap-2 items-end pb-1'>
            <div class=" rounded-full bg-gray-800 w-3 h-3  "></div>
            <div class=" rounded-full bg-gray-800 w-3 h-3  "></div>
            <div class=" rounded-full bg-purple-500 w-3 h-3  "></div>
          </div>
        </div>
        <div className='justify-items-center justify-center w-96 m-3'>
        <hr className='w-full border-t-1 justify-center border-gray-300  '></hr>

        </div>
        <div className='flex ml-6 mr-6 row-auto mt-5 gap-2'>
          <p className='w-1/3 text-base justify-center text-center text-gray-500 bg-[#FAFAFA] rounded-full'>50mm Drivers</p>
          <p className='w-1/3 text-base text-center text-gray-500 bg-[#FAFAFA] rounded-full'>50mm Drivers</p>
          <p className='w-1/3 text-base text-center text-gray-500 bg-[#FAFAFA] rounded-full'>50mm Drivers</p>

        </div>
        <div className='flex  justify-self-center rounded-full h-16 w-[350px]  bg-black m-8 '>
        <Link className=' h-full w-full p-4 text-xl text-center  text-white ' rel="" type="" href="/">Add To Cart</Link>
        </div>
       

      </div>
      </div>
     )
  }