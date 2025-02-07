import { ChangeEvent } from 'react';  
interface TextInputProps {  
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    value?: string;
    type?: string;
    name: string;
}  

const TextInput: React.FC<TextInputProps> = ({ placeholder, value, onChange, type = "text" }) => {  
    return (  
      <input  
        type={type}  
        placeholder={placeholder}  
        value={value}  
        onChange={onChange}  
        // className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition duration-150 ease-in-out"
        className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition duration-150 ease-in-out resize-none" // Added resize-none for better control  
  
      />  
    );  
  };  
  
  export default TextInput;  