'use client'
import React from 'react'
import Button from '../Shared/Button/Button'

interface AddToCartBtnProps {
  wrapperbtn?: string;
}

const AddToCartBtn: React.FC<AddToCartBtnProps> = ({wrapperbtn}) => {
  return (
    <div className={`${wrapperbtn}`}>
      <Button text='Add To Card' action={() => console.log('clicked')} color='primary'/>
    </div>
  )
}

export default AddToCartBtn
