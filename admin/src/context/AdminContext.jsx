import React, { createContext, useState } from 'react';

export const AdminContext = createContext();

const AdminContextProvider = ({ children }) => {
  const [aToken, setAToken] = useState(null);

  const backendUrl = import.meta.env.VITE_BACKEND_URL
  
  const value = {
    aToken,setAToken,
    backendUrl,
  };

  return <AdminContext.Provider value={value}>{children}</AdminContext.Provider>;
};

export default AdminContextProvider;
