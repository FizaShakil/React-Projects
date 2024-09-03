import React, { useContext, useState } from 'react'
import UserContext from '../Context/UserContext';

const Login = () => {
    const [userName,setUserName] = useState("");
    const [password,setPassword] = useState("");
    const {setUser} = useContext(UserContext);

    const handleSubmit = (e)=>{
          e.preventDefault()
          setUser({userName,password});
    }

  return (
    <>
     <h2 className='text-center text-6xl font-bold mt-6 text-white'>Login Page</h2>
      <div className='flex flex-col mt-20 w-[30%] ml-[35%] text-xl'>
        <input type="text"
        className='border-2 text-center mb-10 py-1 rounded-lg bg-slate-100'
        value={userName}
        onChange={(e)=>setUserName(e.target.value)}
        placeholder='Type your name here'
        />
        <input type="password"
        value={password}
        className='border-2 text-center mb-10 py-1 rounded-lg bg-slate-100'
        onChange={(e)=>setPassword(e.target.value)} 
        placeholder='Type your Password'
        />
        <button onClick={handleSubmit}
                className='border-black border-2 w-[40%] ml-[30%] rounded-lg mt-7 py-1 font-bold bg-yellow-100'>
          Login
        </button>
      </div>
    </>
  )
}

export default Login