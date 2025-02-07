import { ChangeEvent } from 'react';  
import React from 'react';  

interface Option {  
  value: string; // The actual value of the option  
  label: string; // The display label for the option  
}  

interface DropdownProps {  
    name: string;
  options: Option[]; // Array of options for the dropdown  
  value: string; // Currently selected value  
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;// Function to call when the selection changes  
  label?: string; // Optional label for accessibility  
}  

const Dropdown: React.FC<DropdownProps> = ({ options, value, onChange, label }) => {  
  return (  
    <div className="relative">  
      {label && <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>}  
      <select  
        value={value}  
        // onChange={(e) => onChange(e.target.value)}  
        onChange={onChange}
        className="block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out"  
      >  
        <option value="" disabled>Select an option</option> {/* Placeholder option */}  
        {options.map((option) => (  
          <option key={option.value} value={option.value}>  
            {option.label}  
          </option>  
        ))}  
      </select>  
    </div>  
  );  
};  

export default Dropdown;