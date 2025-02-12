import { ChangeEvent } from 'react';
interface TextInputProps {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  value?: string | number;
  type?: 'text' | 'number';
  name: string;
  label: string;
  errMsg?: string | number;
}

const TextInput: React.FC<TextInputProps> = ({ name, label, placeholder, errMsg, value, onChange, type = "text" }) => {
  return (
    <div className='mb-3'>
      {label && <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>}
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`w-full block border  rounded-md px-4 py-2 focus:outline-none transition duration-150 ease-in-out resize-none focus:ring-1 ${errMsg ? ` border-red-300 focus:border-red-500  focus:ring-red-500` : ` border-gray-300 focus:border-blue-500  focus:ring-blue-500`}`} // Added resize-none for better control  
      />
      {errMsg && <label className="block text-sm font-medium text-red-700 mb-1">{errMsg}</label>}
    </div>
  );
};

export default TextInput;  