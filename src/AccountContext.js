// AcountContext.js
import React, { createContext, useState, useEffect } from 'react';

// Crear el contexto
export const AccountContext = createContext();

// Proveedor del contexto
export const AccountProvider = ({ children }) => {
  const [account, setAccount] = useState(() => {
    const savedAccount = localStorage.getItem('AccountProvider');
    return savedAccount ? JSON.parse(savedAccount) : null;
  });

  useEffect(() => {
    localStorage.setItem('AccountProvider', JSON.stringify(account));
  }, [account]);

  return (
    <AccountContext.Provider value={{ account, setAccount }}>
      {children}
    </AccountContext.Provider>
  );
};
