'use client'
import React from 'react'
import Cart from '../Cart/Cart';
import Button from '../Shared/Button/Button';

const AppHeader = () => {
  const handleLogin = () => {
    console.log('clicked login')
  }
  return (
    <header className='flex justify-between py-6 px-8 bg-gray-900'>   
      <div className='font-bold text-xl colorWhite'>
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
