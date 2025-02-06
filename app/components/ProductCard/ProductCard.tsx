import React from 'react'
import AddToCartBtn from '../AddToCartBtn/AddToCartBtn';

interface CardProps {
  wrapperStyle?: string;
  title: string;
  imageUrl: string;
  description?: string;
  category?: string;
  price?: number;
  buttonText?: string;
  onButtonClick?: () => void | undefined; // Function type for the button click event  
}

const ProductCard: React.FC<CardProps> = ({ wrapperStyle, title, imageUrl, description, price, category, buttonText, onButtonClick }) => {
  return (
    <div className={`relative rounded-lg overflow-hidden shadow-lg bg-white ${wrapperStyle}`}>
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <div className='flex justify-between'>
          <h2 className="text-l font-semibold mb-2">{title}</h2>
          <p className="text-l font-semibold mb-2">{price}</p>
        </div>
        {category && <p className="text-gray-700 mb-4">{category}</p>}
        {description && <p className="text-gray-700 mb-4">{description}</p>}
        {/* <button
          onClick={onButtonClick}
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
        >
          {buttonText}
        </button> */}
          <AddToCartBtn wrapperbtn={'cardBtn'} />
      </div>
    </div>
  );
};

export default ProductCard;  
