import React from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData();
  return (
    <div>
      <div className='text-5xl text-center text-black bg-'>Followers: {data.followers}</div>
      <img src={data.avatar_url }alt="githubImage" width="300px" />
    </div>
  )
}
export default Github

export const githubInfo = async ()=> {
    const response = await fetch('https://api.github.com/users/FizaShakil')
    return response.json();
}