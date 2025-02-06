
import { useRouter } from "next/router";  
import { FC, useEffect } from "react";  
import { useProductsContext } from '../contexts/ProductsContext';  

interface Product {  
  id: number;  
  name: string;  
  description: string;  
  price: number;  
  imageUrl: string;  
}  

// Mock product data - in a real app, this would come from an API  
// const products: Product[] = [  
//   {  
//     id: 1,  
//     name: "Sample Product 1",  
//     description: "This is the first sample product.",  
//     price: 29.99,  
//     imageUrl: "/sample-product-1.jpg",  
//   },  
//   {  
//     id: 2,  
//     name: "Sample Product 2",  
//     description: "This is the second sample product.",  
//     price: 49.99,  
//     imageUrl: "/sample-product-2.jpg",  
//   },  
// ];  

const ProductDetail: FC = () => {  
  const router = useRouter();  
  const { id } = router.query; // Get the product id from the URL  
console.log('id', id)
  // Find the product based on the id from the URL  
  // const product = products.find((prod) => prod.id.toString() === id);  

  // if (!product) {  
  //   return <div>Product not found!</div>;  
  // }  
 const { product, fetchProduct } = useProductsContext(); 
  useEffect(() => {
    if(id){
      // fetchProduct(id)
    }
  }, [id]) 
  return (  
    <div className="max-w-4xl mx-auto p-6">  
      <div className="flex flex-col md:flex-row">  
        <img  
          // src={product.imageUrl}  
          // alt={product.name}  
          className="w-full md:w-1/2 h-auto object-cover rounded-lg"  
        />  
        <div className="md:ml-6 flex flex-col justify-between">  
          <div>  
            {/* <h1 className="text-3xl font-bold mt-4">{product.name}</h1>   */}
            <p className="text-xl font-semibold text-gray-800 mt-2">  
              ${product.price.toFixed(2)}  
            </p>  
            <p className="mt-4 text-gray-600">{product.description}</p>  
          </div>  
          <button className="mt-6 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">  
            Add to Cart  
          </button>  
        </div>  
      </div>  
    </div>  
  );  
};  

export default ProductDetail;