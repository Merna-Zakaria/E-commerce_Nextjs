'use client'
import React, { useEffect } from 'react';
import navigation from 'next/navigation';
import { useProductsContext } from '../../contexts/ProductsContext'; 
import ProductCard from "../../components/ProductCard/ProductCard"; 
import Button from '@/app/components/Shared/Button/Button';

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
   <div className='grid grid-cols-3 gap-4'>
    <ProductCard
             id={product?.id}
             wrapperLink={``} 
             title={product?.title} 
             imageUrl={product?.image} 
             category={product?.category} 
             price={product?.price}
             />
    <div className="flex-col flex justify-between rounded overflow-hidden shadow-lg p-6 bg-white px-6 py-4 col-span-2">
    <div>
      <p className="font-bold text-xl mb-2">Product Description</p>
      <p className="text-gray-700 text-base">{product.description}</p>
    </div>
      <Button text='Back To List  >>>' action={() => navigation?.redirect('/products')} color='secondary' wrapperStyle='flex flex-row-reverse'/>
  </div>
   </div>
  );
};

export default ProductDetails;