import  { createContext, useState } from 'react';

export const AdminContext = createContext()

const AdminContextProvider = ( props ) => {
  
  // with this command cant see the login page because  already login (after delete the atoken from the local storage after again we can see the login page)
  const [aToken, setAToken] = useState(localStorage.getItem('aToken')?localStorage.getItem('aToken'): '');

  const backendUrl = import.meta.env.VITE_BACKEND_URL
  
  const value = {
    aToken,setAToken,
    backendUrl,
  }

  return (
  <AdminContext.Provider value={value}>
    {props.children}
  </AdminContext.Provider>
  )
};

export default AdminContextProvider;
