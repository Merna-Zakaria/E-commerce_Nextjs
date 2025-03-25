import React from 'react'
import AddToCartBtn from '../AddToCartBtn/AddToCartBtn';
import Link from 'next/link';
import navigation from 'next/navigation';
import { Url } from 'node:url';
import { link } from 'node:fs';

interface CardProps {
  id: number;
  addToCartBtn?: boolean;
  trimTitle?: boolean;
  wrapperStyle?: string;
  title: string;
  imageUrl: string;
  description?: string;
  category?: string;
  price: number;
  buttonText?: string;
  wrapperLink?: string;
  onButtonClick?: () => void | undefined;
  index: number;
}

const ProductCard: React.FC<CardProps> = ({ id, addToCartBtn, trimTitle, wrapperStyle, wrapperLink, title, imageUrl, index, description, price, category, buttonText, onButtonClick }) => {
    const handleRedirect = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      wrapperLink && navigation?.redirect(wrapperLink)
    }

  return (
    <div className={` max-w-sm rounded overflow-hidden shadow-lg p-2 bg-white ${wrapperStyle}`} key={index} onClick={(e) => handleRedirect(e)}>
        <img className="h-40 m-auto" src={imageUrl} alt={'productImg'} />
        <div className="px-6 py-4">
          <div className="font-bold text-base mb-2">{trimTitle ? `${title.substring(0, 23)}...` : title}</div>
          <p className="text-gray-700 text-base">{category}</p>
        </div>
        <div className="flex  justify-between align-bottom w-full mb-4">
          {addToCartBtn && <AddToCartBtn wrapperbtn={'mx-3'} title={title} price={price} img={imageUrl} id={id}/>}
          <div className="inline-block bg-gray-200 rounded-full px-3 py-2 text-sm font-semibold text-gray-700 ml-4">
            ${price}
          </div>
        </div>
    </div>
  );
};

export default ProductCard;  
