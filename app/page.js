'use client'

import Script from 'next/script'
import * as components from './components'
import * as myFunctions from './myFunctions'
import React, { lazy } from 'react'
import { useRef, useEffect } from 'react';

export default function Home() {

 
  return (
    <>
 
      <components.Header />
      <components.HomePage />
    
    

    </>



  )
}
