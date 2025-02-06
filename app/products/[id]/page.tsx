'use client'
import React, { useEffect } from 'react';
import navigation from 'next/navigation'
import { useProductsContext } from '../../contexts/ProductsContext';  

// interface ProductDetailsProps {
//   product: {
//     id: number;
//     name: string;
//     price: number;
//     description: string;
//     imageUrl: string;
//   };
// }

const ProductDetails: React.FC = () => {
const params =  navigation.useParams()
const { id } = params as { id: string };  
  // const id = params?.id;
   const {initialProduct, product, setProduct, fetchProduct } = useProductsContext(); 

   console.log('router', id , ' Object.values(product)',  Object.values(product))
    useEffect(() => {
      if(id){
        fetchProduct(id)
        
      }
      
    }, [id]) 
    useEffect(() => {
return() => {
  setProduct(initialProduct)
}
    }, [])
  return (
   Object.values(product)?.map(ele => ele)?.length && 
   <div className='flex'>

   <div className="max-w-sm rounded overflow-hidden shadow-lg p-6 bg-white">
      <img className="w-full" src={product.image} alt={'productImg'} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{product.title}</div>
        <p className="text-gray-700 text-base">{product.category}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          ${product.price}
        </span>
      </div>
    </div>
    <div className="max-w-sm rounded overflow-hidden shadow-lg p-6 bg-white">
    <div className="px-6 py-4 mx-8">
      <div className="font-bold text-xl mb-2">Product Description</div>
      <p className="text-gray-700 text-base">{product.description}</p>
    </div>
  </div>
   </div>
  );
};

export default ProductDetails;