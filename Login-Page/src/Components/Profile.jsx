import React, { useContext } from 'react'
import UserContext from '../Context/UserContext'

const Profile = () => {
    const {user} = useContext(UserContext);
    
    if (!user) {
        return <div className='text-center text-4xl mt-8 text-white'>Please Login here</div>
    }
    else{
        return <div className='text-center text-4xl mt-8 text-white'>
            Welcome to the dashboard {user.userName}!
               </div>
    }
}

export default Profile