import React from 'react'
import { getJobs } from '../service/getAllJobs'
import Jobs from '../components/Jobs'
import FetchError from '../components/FetchError'

export default async function page() {
    
    let jobs = []
    try {
        jobs = await getJobs()
    } catch (error) {
        console.log(error)
    }

  return (
    <div className='mb-10'>
        <Jobs jobs={jobs} />
    </div>
  )
}
