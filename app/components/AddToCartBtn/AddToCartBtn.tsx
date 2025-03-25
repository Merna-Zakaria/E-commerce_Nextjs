'use client'
import React, { useEffect, useRef } from 'react';  
import { gsap } from 'gsap';  
import Button from '@/app/components/Shared/Button/Button';
import { useGlobalContext } from '@/app/contexts/GlobalContext';

interface AddToCartBtnProps {
  wrapperbtn?: string;
  title: string;
  img: string;
  price: number;
  id: number;
}

const AddToCartBtn: React.FC<AddToCartBtnProps> = ({ wrapperbtn, id, title, img, price }) => {
  const { addToCart } = useGlobalContext();
  const buttonRef = useRef<HTMLDivElement | null>(null);  

  useEffect(() => {  
    if (buttonRef.current) {  
      // Create a continuous animation  
      const tl = gsap.timeline({ repeat: -1, yoyo: true });  

      tl.to(buttonRef.current, {  
        scale: 1.05,  
        duration: 0.5,  
        ease: 'power1.inOut',  
      }).to(buttonRef.current, {  
        scale: 1,  
        duration: 0.5,  
        ease: 'power1.inOut',  
      });  
    }  
  }, []);  

  const handleAddToCart = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation();
    addToCart({ id, title, img, price })
  }
  return (
    <div className={`${wrapperbtn}`} ref={buttonRef}>
      <Button text='Add To Card' action={e => handleAddToCart(e)} color='primary' />
    </div>
  )
}

export default AddToCartBtn
