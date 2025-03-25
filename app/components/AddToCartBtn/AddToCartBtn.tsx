'use client'
import React from 'react'
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
  const handleAddToCart = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation();
    addToCart({ id, title, img, price })
  }
  return (
    <div className={`${wrapperbtn}`}>
      <Button text='Add To Card' action={e => handleAddToCart(e)} color='primary' />
    </div>
  )
}

export default AddToCartBtn
