import { ReactNode, useState } from 'react';

interface option { img?: string, title: string, price?: number, path?: string }
interface DropdownProps {
    head: ReactNode;
    options: option[];
}

const Dropdown: React.FC<DropdownProps> = ({ head, options }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [selectedOption, setSelectedOption] = useState<string>('Select an Option');

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionClick = (option: string) => {
        setSelectedOption(option);
        setIsOpen(false); // Close dropdown after selecting  
    };

    return (
        <div className="relative inline-block text-left">
            <div>
                <button
                    onClick={toggleDropdown}
                    className="inline-flex justify-between w-full px-4 py-2 text-sm font-medium"
                >
                    {head}
                </button>
            </div>

            {isOpen && options?.length && (
                <div className="absolute right-0 z-10 w-56 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                        {options.map((option, i) => (
                            <a
                                key={`${option.title}-${i}`}
                                href="#"
                                onClick={(e) => {
                                    e.preventDefault(); // Prevent the default anchor behavior  
                                    option.path && handleOptionClick(option.path);
                                }}
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            >
                              <>
                              <div className='flex'>
                                    {option?.img &&
                                        <img
                                            src={option.img}
                                            alt="cart"
                                            width={25}
                                            height={25}
                                        />}
                                    {option.price && <span className='p-3'>{option.price}$</span>}
                                </div>
                                {option.title}
                                <hr/>
                              </>
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Dropdown;  