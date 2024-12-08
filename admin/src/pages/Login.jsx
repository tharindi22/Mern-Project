import React, { useContext, useState } from 'react'
import { AdminContext } from '../context/AdminContext'
import axios from 'axios'
import { toast } from 'react-toastify';

const Login = () => {
  const [state, setState] = useState('Admin')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const {setAToken,backendUrl} = useState(AdminContext)
  
  const onSubmitHandler = async (event) =>{
      event.preventDefault()

      
  }

  return (
    <form onSubmit={onSubmitHandler} className="min-h-[80vh] flex items-center">
      <div className="flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-[#5E5E5E] text-sm shadow-lg">
        <p className="text-2xl font-semibold m-auto">
          <span className="text-primary">{state}</span> Login
        </p>
        <div className="w-full">  
          <p>Email</p>
          <input onChange={(e)=>setEmail(e.target.value)} value={email}
            className="border border-[#DADADA] rounded w-full p-2 mt-1"
            type="email"
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="w-full">
          <p>Password</p>
          <input onChange={(e)=>setPassword(e.target.value)} value={password}
            className="border border-[#DADADA] rounded w-full p-2 mt-1"
            type="password"
            placeholder="Enter your password"
            required
          />
        </div>
        <button className="bg-primary text-white w-full py-2 rounded mt-2 text-base">
          Login
        </button>
        {state === 'Admin' ? (
          <p>
            Doctor Login?{' '}
            <span
              onClick={() => setState('Doctor')}
              className="text-primary cursor-pointer"
            >
              Click here
            </span>
          </p>
        ) : (
          <p>
            Admin Login?{' '}
            <span
              onClick={() => setState('Admin')}
              className="text-primary cursor-pointer"
            >
              Click here
            </span>
          </p>
        )}
      </div>
    </form>
  );
};

export default Login;
