import React from 'react'
import AddToCartBtn from '../AddToCartBtn/AddToCartBtn';
import Link from 'next/link';
import { Url } from 'node:url';
import { link } from 'node:fs';

interface CardProps {
  id: number;
  addToCartBtn?: boolean;
  wrapperStyle?: string;
  title: string;
  imageUrl: string;
  description?: string;
  category?: string;
  price?: number;
  buttonText?: string;
  wrapperLink?: string;
  onButtonClick?: () => void | undefined; // Function type for the button click event  
}

const ProductCard: React.FC<CardProps> = ({id, addToCartBtn, wrapperStyle, wrapperLink, title, imageUrl, description, price, category, buttonText, onButtonClick }) => {
  return (
   <div className={` max-w-sm rounded overflow-hidden shadow-lg p-2 bg-white ${wrapperStyle}`} key={id}>
      <Link href={wrapperLink|| ''}>
    <img className="h-40 m-auto" src={imageUrl} alt={'productImg'} />
    <div className="px-6 py-4">
      <div className="font-bold text-base mb-2">{title.substring(0, 30)}...</div>
      <p className="text-gray-700 text-base">{category}</p>
    </div>
    <div className="flex  justify-between align-bottom w-full mb-4">
    {addToCartBtn && <AddToCartBtn wrapperbtn={'mx-3'} />}
      <div className="inline-block bg-gray-200 rounded-full px-3 py-2 text-sm font-semibold text-gray-700 ml-4">
        ${price}
      </div>
    </div>
      </Link>
  </div>
  );
};

export default ProductCard;  
