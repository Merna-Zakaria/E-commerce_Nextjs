'use client'
import { useState, ChangeEvent, FormEvent } from 'react';  
import TextInput from '../../components/Shared/InputField/InputField';
import Dropdown from "../../components/Shared/Dropdown/Dropdown";
import ImageUpload from "../../components/Shared/ImageUpload/ImageUpload";

interface FormData {  
  title: string;  
  description: string;  
  category: string;
}  

const CreatePage: React.FC = () => {  
  // State to hold input values  
  const [formData, setFormData] = useState<FormData>({  
    title: '',  
    description: '',  
    category: '',
  });  

  const [uploadedFile, setUploadedFile] = useState<File | null>(null);  

  const handleUpload = (file: File) => {  
    setUploadedFile(file);  
    console.log('Uploaded file:', file); // You can implement further logic here, e.g., uploading to a server  
  };  
  
  // Handle input changes  
  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {  
    const { name, value } = e.target;  
    setFormData({ ...formData, [name]: value });  
  };  

  // Handle form submission  
  const handleSubmit = (e: FormEvent) => {  
    e.preventDefault();  
    // Here you can handle the form submission, e.g., send the data to an API  
    console.log('Form submitted:', formData);  
    // Clear the form after submission (optional)  
    // setFormData({ title: '', description: '' });  
  };  

  return (  
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">  
      <h1 className="text-2xl mb-4">Create New Item</h1>  
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md">  
        <div className="mb-4">  
          <TextInput  
            name="title"  
            placeholder="Title"  
            value={formData.title}  
            onChange={handleInputChange}  
          />  
        </div>  
        <div className="mb-4">  
          <TextInput  
            name="description"  
            placeholder="Description"  
            value={formData.description}  
            onChange={handleInputChange}  
          />  
        </div> 
        <div className="mb-4">
          <Dropdown
          options={[]}
          value={formData.description}
          onChange={handleInputChange}
           label={'Category'}
           name={'category'}
          />
          </div> 
          <ImageUpload onUpload={handleUpload}/>
        <button  
          type="submit"  
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-150"  
        >  
          Submit  
        </button>  
      </form>  
    </div>  
  );  
};  

export default CreatePage;
