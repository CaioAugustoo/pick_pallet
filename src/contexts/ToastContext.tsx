import { useState, useEffect, createContext, ReactNode } from "react";

export type ToastProviderProps = {
  children: ReactNode;
};

export type ToastContextData = {
  toast: () => void;
  toasted: boolean;
};

export const ToastContext = createContext({} as ToastContextData);

export function ToastProvider({ children }: ToastProviderProps) {
  const [toasted, setToasted] = useState(false);

  const toast = () => setToasted(true);

  useEffect(() => {
    const handler = setTimeout(() => {
      setToasted(false);
    }, 1200);
    return () => clearTimeout(handler);
  }, [toasted]);

  return (
    <ToastContext.Provider value={{ toast, toasted }}>
      {children}
    </ToastContext.Provider>
  );
}
