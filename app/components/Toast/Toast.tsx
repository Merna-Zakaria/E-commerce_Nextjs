// src/components/Toast.tsx  

import React from 'react';  

interface ToastProps {  
  message: string;  
  duration?: number; // Duration in milliseconds  
  onClose: () => void;  
}  

const Toast: React.FC<ToastProps> = ({ message, duration = 3000, onClose }) => {  
  React.useEffect(() => {  
    const timer = setTimeout(() => {  
      onClose();  
    }, duration);  

    return () => clearTimeout(timer);  
  }, [duration, onClose]);  

  return (  
    <div className="fixed bottom-5 right-5 p-4 bg-gray-800 text-white rounded shadow-lg transition-transform transform">  
      <p>{message}</p>  
      <button onClick={onClose} className="ml-4 text-gray-300 hover:text-white">X</button>  
    </div>  
  );  
};  

export default Toast;