import React from 'react'
import { useUser } from '@clerk/clerk-react'
import FinancialRecordForm from './financial-record-form'
import FinancialRecordList from './Financial-record-list'
function Dashboard() {
  const {user} = useUser()
  return (
    <div className='dashboard-container'>
        <h1>Welcome {user?.firstName} ! Here are your Financies: </h1>
        <FinancialRecordForm/>
        <FinancialRecordList />
    </div>
  )
}

export default Dashboard