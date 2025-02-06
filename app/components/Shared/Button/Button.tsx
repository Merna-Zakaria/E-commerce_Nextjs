import React from 'react'

interface ButtonComponentProps {
  action: (event: React.MouseEvent<HTMLButtonElement>) => void; // Define the prop type for click event 
  text: string;
  color: string;
  wrapperStyle?: string;
}

const Button: React.FC<ButtonComponentProps> = ({ action, text, color, wrapperStyle }) => {
  return (
    <div className={`${wrapperStyle}`}>
      <button onClick={action} className={`px-3 py-2 rounded-lg ${color}`}>
        {text}
      </button>
    </div>
  )
}

export default Button
