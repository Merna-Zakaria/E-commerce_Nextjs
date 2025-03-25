import React from 'react'

interface ButtonComponentProps {
  action?: (event: React.MouseEvent<HTMLButtonElement>) => void; // Define the prop type for click event 
  text: string;
  color: string;
  wrapperStyle?: string;
  type?: "button" | "submit" | "reset";
}

const Button: React.FC<ButtonComponentProps> = ({ action, text, color, wrapperStyle, type='button' }) => {
  return (
    <div className={`${wrapperStyle}`}>
      <button type={type} onClick={action} className={`px-3 py-2 rounded-lg ${color}`}>
        {text}
      </button>
    </div>
  )
}

export default Button
