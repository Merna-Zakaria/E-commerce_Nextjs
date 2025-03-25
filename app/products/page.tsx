"use client";
import React, { useEffect } from 'react'
import Link from 'next/link';
import Image from "next/image";
import { redirect } from 'next/navigation';
import { useProductsContext } from '../contexts/ProductsContext';
import ProductCard from '../components/ProductCard/ProductCard';
import HeroImg from "../assets/images/herobg.jpg";
import Pagination from "../components/Pagination/pagination";
import Button from "../components/Shared/Button/Button";

const ProductsPage = () => {
  const { products, fetchProducts } = useProductsContext();
  useEffect(() => {
    fetchProducts()
  }, [])
  return (
    <div className='relative'>
      <div className='relative'>
        <div className='absolute w-100 font-black text-center inset-0 bg-black bg-opacity-50 flex items-center justify-center'>
          <div>
            <p className='text-lg md:text-9xl pb-4'>MZ</p>
            <p className='text-base md:text-5xl p-4'>The Best Choose To Shopping</p>
          </div>
        </div>
        <Image
          src={HeroImg}
          alt="HeroImg"
        />
      </div>
        <div className='m-8 justify-center'>
        <Button wrapperStyle={'w-full flex justify-end'} text='Create Product' action={() => redirect('/products/create')} color='secondary'/>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
          {products?.map((product, i) => (
            <ProductCard
            key={i}
              index={i}
              id={product.id}
              wrapperStyle='w-full'
              wrapperLink={`/products/${product.id}`}
              title={product?.title}
              imageUrl={product?.image}
              category={product?.category}
              price={product?.price}
              addToCartBtn
              trimTitle
            />
          ))}
        </div>
        </div>
      {/* <Pagination
        currentPage={1}
        totalPages={2}
      /> */}
    </div>
  )
}

export default ProductsPage;
