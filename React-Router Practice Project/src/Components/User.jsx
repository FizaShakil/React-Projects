import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userId} = useParams();
  return (
    <div>
        <div className='w-full bg-slate-400 text-center text-3xl'>User Id : {userId}</div>
    </div>
  )
}

export default User