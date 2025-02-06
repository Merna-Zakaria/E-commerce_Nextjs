import React from 'react'

interface CardComponentProps {  
    AddToCartBtn: React.FC; // Define the prop type here  
}  

const Card: React.FC<CardComponentProps>= ({AddToCartBtn}) => {
  return (
    <div>
      Card
      <AddToCartBtn />
    </div>
  )
}

export default Card
