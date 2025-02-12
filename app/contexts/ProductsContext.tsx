'use client';
import React, { createContext, useContext, useState, ReactNode } from 'react';  
import {axiosInstance} from "../network/api";

interface Product {  
    id: number;  
    title: string;  
    price: number;  
    description: string;  
    image: string;  
    category: string;  
  }  
  
  interface ProductsState {  
    products: Product[];  
    product: Product;
    initialProduct: Product;
    categories: string[];
    setProduct: (product: Product) => void;
    addProduct: (product: string) => void;  
    fetchProducts: () => Promise<void>; 
    fetchProduct: (productId: string) => Promise<void>; 
    fetchCategory: () => Promise<void>; 
  }  
const ProductsContext = createContext<ProductsState | undefined>(undefined);  

export const ProductsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {  
  const initialProduct: Product = {  
    id: 0,  
    title: '',  
    price: 0,  
    description: '',  
    image: '',  
    category: '',  
  };  

  const [products, setProducts] = useState<Product[]>([]);  
  const [product, setProduct] = useState<Product>(initialProduct); 
  const [categories, setCategories] = useState([]);   

  const fetchProducts = async () => {  
    try {  
      const response = await axiosInstance.get('/products');  
      setProducts(response.data);  
    } catch (error) {  
      console.error('Error fetching products:', error);  
    }  
  };  

  const fetchProduct = async (productId: string) => {  
    try {  
      const response = await axiosInstance.get(`/products/${productId}`);  
      setProduct(response.data);  
    } catch (error) {  
      console.error('Error fetching products:', error);  
    }  
  };  

  const fetchCategory = async () => {  
    try {  
      const response = await axiosInstance.get(`/products/categories`);  
      setCategories(response.data);  
    } catch (error) {  
      console.error('Error fetching products:', error);  
    }  
  };  

  const addProduct = async(product: string) => {  
    try {  
      const response = await axiosInstance.post(`/products`, product);  
    } catch (error) {  
      console.error('Error adding product:', error);  
    }  
  };  

  return (  
    <ProductsContext.Provider value={{initialProduct, products, product, categories, fetchCategory, setProduct, fetchProducts, fetchProduct, addProduct }}>  
      {children}  
    </ProductsContext.Provider>  
  );  
};  

export const useProductsContext = (): ProductsState => {  
  const context = useContext(ProductsContext);  
  if (!context) {  
    throw new Error('useProductsContext must be used within a ProductsProvider');  
  }  
  return context;  
};