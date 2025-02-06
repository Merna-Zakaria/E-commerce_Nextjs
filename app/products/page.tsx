"use client";
import React, { useEffect } from 'react'
import Link from 'next/link'
import Image from "next/image";
import { useProductsContext } from '../contexts/ProductsContext';  
import ProductCard from '../components/ProductCard/ProductCard';
import HeroImg from "../assets/images/herobg.jpg";
import Pagination from "../components/Pagination/pagination";

const ProductsPage = () => {
  const { products, fetchProducts } = useProductsContext(); 
  useEffect(() => {
    fetchProducts()
  }, []) 
  console.log('product', products)
  return (
    <div>
       <Image
          src={HeroImg}
          alt="HeroImg"
        />
      <div>  
      <h1>Products filter</h1>  
  <div className='flex flex-wrap m-8 justify-center'>
        {products?.map((product) => (  
          <Link href={`/products/${product.id}`} key={product.id}>
            <ProductCard wrapperStyle={'w-full md:w-1/2 m-4'} title={product?.title} imageUrl={product?.image} category={product?.category} price={product?.price}/>
          </Link>
        ))}  
  </div>
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
      {/* <Link href='/products/create' className='block'>create user</Link> */}
    </div>
  )
}

export default ProductsPage;
