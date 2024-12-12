import  { createContext, useState } from 'react';
import axios from 'axios'
import {toast} from 'react-toastify'


export const AdminContext = createContext()

const AdminContextProvider = ( props ) => {
  
  // with this command cant see the login page because  already login (after delete the atoken from the local storage after again we can see the login page)
  const [aToken, setAToken] = useState(localStorage.getItem('aToken')?localStorage.getItem('aToken'): '');
  const [doctors,setDoctors] = useState([])

  const backendUrl = import.meta.env.VITE_BACKEND_URL

  const getAllDoctors = async () => {

    try {
      const {data} = await axios.post(backendUrl + '/api/admin/all-doctors',{},{headers:{aToken}})

      if (data.sucess) {
        setDoctors(data.doctors)
        console.log(data.doctors)
      } else {
        toast.error(data.message)
      }

    } catch (error) {
      toast.error(error.message)
    }

  }

  const changeAvailibility = async (docId) => {
    try {
      const {data} = await axios.post(backendUrl + '/api/admin/change-availability',{docId},{headers:{aToken}})

      if (data.sucess) {
        toast.success(data.message)
        getAllDoctors()
      } else {
        toast.error(data.message)
      }

    } catch (error) {
      toast.error(error.message)
    }
  }
  
  const value = {
    aToken,setAToken,
    backendUrl,doctors,
    getAllDoctors,changeAvailibility,
  }

  return (
  <AdminContext.Provider value={value}>
    {props.children}
  </AdminContext.Provider>
  )
};

export default AdminContextProvider;
