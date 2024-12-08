import React, { createContext, useState } from 'react';

export const AdminContext = createContext();

const AppContextProvider = ({ children }) => {
  const [appData, setAppData] = useState(null);

  const value = {
    appData,
    setAppData,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppContextProvider;