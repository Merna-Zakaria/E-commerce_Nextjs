'use client'
import { useState, ChangeEvent, FormEvent, useEffect } from 'react';
import { redirect } from 'next/navigation';
import TextInput from '../../components/Shared/InputField/InputField';
import Dropdown from "../../components/Shared/Dropdown/Dropdown";
import ImageUpload from "../../components/Shared/ImageUpload/ImageUpload";
import Button from '@/app/components/Shared/Button/Button';
import { useProductsContext } from '@/app/contexts/ProductsContext';

interface FormData {
  title: string;
  price: number | string;
  description: string;
  category: string;
}

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
  const [errorObj, setErrorObject] = useState<FormData>(formData);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [isValid, setIsvalid] = useState(true);

  useEffect(() => {
    fetchCategory()
  }, [])
  const handleUpload = (file: File) => {
    setUploadedFile(file);
    console.log('Uploaded file:', file); // You can implement further logic here, e.g., uploading to a server  
  };

  // Handle input changes  
  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    validateFields(name, value)
  };

  const validateFields = (name: string, value: any) => {
    console.log('name',name, 'value', value)
    switch (name) {
      case 'title':
        setIsvalid(value?.length > 50 ? false : true)
        setErrorObject({ ...errorObj, [name]: value?.length > 50 ? 'Char numbers must be equal or less than 50' : ''})
      case 'description':
        setIsvalid(value?.length > 100 ? false : true)
        setErrorObject({ ...errorObj, [name]: value?.length > 100 ? 'Char numbers must be equal or less than 100' : ''})
      case 'price':
        setIsvalid(value && value <= 0 ? false : true)
        setErrorObject({ ...errorObj, [name]: value && value <= 0 ? 'Char numbers must be greater than 0' : '' })
      default:
        setIsvalid(!value ? false : true)
        setErrorObject({ ...errorObj, [name]: !value ? 'This field is required' : '' }) 
    }


  }
  // Handle form submission  
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Here you can handle the form submission, e.g., send the data to an API  
    console.log('Object.values(errorObj)?.map(ele=> ele && ele)', Object.values(errorObj)?.filter(ele => ele && ele))
    if (isValid && Object.values(errorObj)?.filter(ele => ele && ele)?.length == 0) {
      addProduct(JSON.stringify({ ...formData, imageUrl: uploadedFile }))
    }
    console.log('Form submitted:', formData);
    // Clear the form after submission (optional)  
    // setFormData({ title: '', description: '' });  
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
          />
        </div>
        <div className="mb-4">
          <Dropdown
            options={categories?.map(ele => ({ value: ele, label: ele }))}
            value={formData.category}
            onChange={handleInputChange}
            label={'Category'}
            name={'category'}
          />
        </div>
        <ImageUpload onUpload={handleUpload} label='Product Image' />
        <div className='flex justify-end w-full my-8'>
          <Button
            type="button"
            wrapperStyle={'mx-5'} text='Back' action={() => redirect('/products')} color='secondary'
          />
          <Button
            type="submit"
            wrapperStyle={''} text='Submit' action={() => console.log('submit')} color='primary'
          />
        </div>
      </form>
    </div>
  );
};

export default CreatePage;
