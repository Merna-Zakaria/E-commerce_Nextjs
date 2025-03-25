import { ChangeEvent } from 'react';
import React from 'react';

interface Option {
  value: string; // The actual value of the option  
  label: string; // The display label for the option  
}

interface SelectProps {
  name: string;
  options: Option[]; // Array of options for the dropdown  
  value: string; // Currently selected value  
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;// Function to call when the selection changes  
  label?: string; // Optional label for accessibility 
  errMsg?: string;
}

const Select: React.FC<SelectProps> = ({ name, options, value, onChange, label, errMsg }) => {
  return (
    <div className="relative">
      {label && <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>}
      <select
        name={name}
        value={value}
        onChange={onChange}
        className={`w-full block border rounded-md px-4 py-2 focus:outline-none transition duration-150 ease-in-out resize-none focus:ring-1 ${errMsg ? ` border-red-300 focus:border-red-500  focus:ring-red-500` : ` border-gray-300 focus:border-blue-500  focus:ring-blue-500`}`}
      >
        <option value="" disabled>Select Category</option> {/* Placeholder option */}
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {errMsg && <label className="block text-sm font-medium text-red-700 mb-1">{errMsg}</label>}
    </div>
  );
};

export default Select;