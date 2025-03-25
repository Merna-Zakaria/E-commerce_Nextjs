'use client';
import React, { createContext, useContext, useState, ReactNode } from 'react';
import ToastComponent from '../components/Toast/Toast';

interface Toast { id: number; message: string; duration?: number }

interface CartItem { id: number; title: string; img: string, price: number }

interface GlobalState {
  user: string | null;
  setUser: (user: string | null) => void;
  toasts: Toast[] | null;
  setToasts: (toast: Toast[]) => void;
  showToast: (message: string, duration?: number) => void;
  addToCart: (cart: CartItem) => void;
  cartList: CartItem[];
}

const GlobalContext = createContext<GlobalState | undefined>(undefined);

export const GlobalProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<string | null>(null);
  const [toasts, setToasts] = useState<{ id: number; message: string; duration?: number }[]>([]);
  const [nextId, setNextId] = useState(1);
  const [cartList, setCartList] = useState<CartItem[]>([]);

  const addToCart = (cart: CartItem) => {
    if (cartList?.length == 0) {
      setCartList([cart])
    } else if (cartList?.length && !cartList?.find(ele => ele.id == cart?.id))
      setCartList([...cartList, cart])
  }

  const showToast = (message: string, duration?: number) => {
    setToasts((prev) => [...prev, { id: nextId, message, duration }]);
    setNextId((prev) => prev + 1);
  };

  const handleClose = (id: number) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  };

  return (
    <GlobalContext.Provider value={{ user, setUser, toasts, setToasts, showToast, cartList, addToCart }}>
      {children}
      <div className="fixed bottom-5 right-5 space-y-2">
        {toasts.map(({ id, message, duration }) => (
          <ToastComponent key={id} message={message} duration={duration} onClose={() => handleClose(id)} />
        ))}
      </div>
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = (): GlobalState => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error('useGlobalContext must be used within a GlobalProvider');
  }
  return context;
};