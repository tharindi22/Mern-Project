import React, { createContext, useState } from 'react';

export const DoctorContext = createContext();

const DoctorContextProvider = ({ children }) => {
  const [DoctorData, setDoctorData] = useState(null);

  const value = {
    DoctorData,
    setDoctorData,
  };

  return <DoctorContext.Provider value={value}>{children}</DoctorContext.Provider>;
};

export default DoctorContextProvider;