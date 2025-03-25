'use client'
import React from 'react'
import Image from "next/image";
import Cart from '@/app/assets/images/cart.svg';
import Dropdown from '@/app/components/Shared/Dropdown/Dropdown';
import { useGlobalContext } from '@/app/contexts/GlobalContext';

const CartComponent = () => {
  const { cartList } = useGlobalContext();
  return (
    <div className="">
      <Dropdown
        head={
          <div className='relative'>
            <span className='absolute text-white bottom'>{cartList.length}</span>
            <Image
              src={Cart}
              alt="cart"
              width={25}
            />

          </div>
        }
        options={cartList} />
    </div>
  )
}

export default CartComponent;
