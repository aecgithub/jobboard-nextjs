import { LoaderCircleIcon, SplineIcon } from 'lucide-react'
import React from 'react'

export default function Loading() {
  return (
    <div>
      <div className='flex h-screen w-full justify-center items-center '>
        <div className='animate-spin'>
          <LoaderCircleIcon className='text-primary' width={40} height={40}/>
        </div>
      </div>
    </div>
  )
}
