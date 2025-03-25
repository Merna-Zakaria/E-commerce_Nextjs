'use client'
import React, { useEffect, useRef } from 'react';  
import { gsap } from 'gsap';  
import Cart from '../Cart/Cart';
import Button from '../Shared/Button/Button';

const AppHeader = () => {
  const logoRef = useRef<HTMLDivElement | null>(null);  

  useEffect(() => {  
    if (logoRef.current) {  
      // Create a continuous animation  
      const tl = gsap.timeline({ repeat: -1, yoyo: true }); // -1 means infinite repeats  

      tl.to(logoRef.current, {  
        scale: 1.1,  
        duration: 0.8,  
        ease: 'power1.inOut',  
      })  
      .to(logoRef.current, {  
        scale: 1,  
        duration: 0.8,  
        ease: 'power1.inOut'  
      });  
    }  
  }, []);  

  const handleLogin = () => {
    console.log('clicked login')
  }
  return (
    <header className='flex justify-between py-6 px-8 bg-gray-900'>   
      <div className='font-bold text-xl colorWhite'  ref={logoRef}>
        MZ
      </div>
      <div className='flex ' >
        <Button text='login' action={handleLogin} color='primary' wrapperStyle={'mx-3'}/>
        <Cart/>
      </div>
    </header>
  )
}

export default AppHeader
