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
        <div className='flex flex-wrap m-8 justify-center'>
        <h1 className='w-1/2'>Products filter</h1>
        <Button wrapperStyle={'w-1/4 flex justify-end'} text='Create Product' action={() => redirect('/products/create')} color='secondary'/>
          {products?.map((product) => (
            <ProductCard
              id={product?.id}
              wrapperStyle='w-full md:w-1/4 m-4'
              wrapperLink={`/products/${product.id}`}
              title={product?.title}
              imageUrl={product?.image}
              category={product?.category}
              price={product?.price}
              addToCartBtn
            />
          ))}
        </div>
      {/* Pagination Component */}
      <Pagination
        // currentPage={currentPage}
        // totalPages={totalPages}
        // pathname={router.pathname}
        currentPage={1}
        totalPages={2}
        pathname={''}
      />
    </div>
  )
}

export default ProductsPage;
