'use client'
import { useState, ChangeEvent, FormEvent, useEffect } from 'react';
import { redirect } from 'next/navigation';
import TextInput from '@/app/components/Shared/InputField/InputField';
import Dropdown from "@/app/components/Shared/Select/Select";
import ImageUpload from "@/app/components/Shared/ImageUpload/ImageUpload";
import Button from '@/app/components/Shared/Button/Button';
import { useProductsContext } from '@/app/contexts/ProductsContext';

interface FormData {
  title: string;
  price: number | string;
  description: string;
  category: string;
}

type ErrorObjectType = {
  [key: string]: string; // Error messages will be strings  
};

const CreatePage: React.FC = () => {
  const { categories, fetchCategory, addProduct } = useProductsContext();
  // State to hold input values  
  let initialValues = {
    title: '',
    price: '',
    description: '',
    category: '',
  }
  const [formData, setFormData] = useState<FormData>(initialValues);
  const [errorObj, setErrorObject] = useState<ErrorObjectType>({});
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);

  useEffect(() => {
    fetchCategory()
  }, [])
  const handleUpload = (file: File) => {
    setUploadedFile(file);
  };

  // Handle input changes  
  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    validateFields(name, value)
  };

  const handleEmpttyFields = () => {
    const newObj = Object.fromEntries(
      Object.keys(initialValues).map((key) => [key, 'This field is required'])
    );
    return setErrorObject({ ...newObj, ...errorObj });
  }

  const validateFields = (name?: string, value?: any) => {

    switch (name) {
      case 'title':
        setErrorObject({ ...errorObj, [name]: value?.length > 50 ? 'Char numbers must be equal or less than 50' : '' })
        break;
      case 'description':
        setErrorObject({ ...errorObj, [name]: value?.length > 100 ? 'Char numbers must be equal or less than 100' : '' })
        break;
      case 'price':
        setErrorObject({ ...errorObj, [name]: value <= 0 ? 'Char numbers must be greater than 0' : '' })
        break;
      default:
        if (name) {
          setErrorObject({ ...errorObj, [name]: !value ? 'This field is required' : '' })
        } else {
          handleEmpttyFields()
        }
    }


  }
  // Handle form submission  
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    validateFields()
    if (Object.values(errorObj)?.filter(ele => ele && ele)?.length == 0) {
      addProduct(JSON.stringify({ ...formData, imageUrl: uploadedFile }))
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl mb-4">Create New Product</h1>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-10/12">
        <div className="mb-4">
          <TextInput
            label='Product Title'
            name="title"
            placeholder="Title"
            value={formData.title}
            onChange={handleInputChange}
            errMsg={errorObj?.title}
          />
          <TextInput
            type='number'
            label='Product Price'
            name="price"
            placeholder="price"
            value={formData.price}
            onChange={handleInputChange}
            errMsg={errorObj?.price}
          />
        </div>
        <div className="mb-4">
          <TextInput
            label='Product Description'
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleInputChange}
            errMsg={errorObj?.description}
          />
        </div>
        <div className="mb-4">
          <Dropdown
            options={categories?.map(ele => ({ value: ele, label: ele }))}
            value={formData.category}
            onChange={handleInputChange}
            label={'Category'}
            name={'category'}
            errMsg={errorObj?.category}
          />
        </div>
        <ImageUpload onUpload={handleUpload} label='Product Image' />
        <div className='flex justify-end w-full my-8'>
          <Button
            type="button"
            wrapperStyle={'mx-5'} text='Back' action={() => redirect('/products')} color='secondary'
          />
          <Button
            type="submit" text='Submit' color='primary'
          />
        </div>
      </form>
    </div>
  );
};

export default CreatePage;
