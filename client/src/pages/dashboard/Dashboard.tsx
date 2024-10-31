import React from 'react'
import { useUser } from '@clerk/clerk-react'
function Dashboard() {
  const {user} = useUser()
  return (
    <div className='dashboard-container'>
        <h1>Welcome {user?.firstName} ! Here are your Financies: </h1>
    </div>
  )
}

export default Dashboard