"use client"
import { Button } from '@/components/ui/button'
import { ArrowRightIcon } from '@radix-ui/react-icons'
import React from 'react'
import JobCard from './JobCard'
import { getJobs } from '../service/getAllJobs'

export default async function Hero() {
    const jobs = await getJobs()

  return (
    <div className='flex py-10 flex-col-reverse lg:flex-row gap-5'>
        <div className='lg:w-1/2 w-full flex flex-col justify-center items-center lg:items-start'>

            <div className='flex justify-center w-full '>
                <img src='/images/home/hero.png' className='w-full'/>
            </div>

            <p className='text-sm text-center lg:text-left py-4 lg:pr-10 pr-0'>Welcome to All European Careers, a European-based consultancy specializing in IT software consultancy, outsourcing and staffing services. We specialize in Java, Angular, Mobile, DevOps, and more.</p>
            <div className='flex gap-2 py-3 justify-center'>
                <Button className="gap-2 " asChild>
                  <a href='/jobs'>
                    Find your next job<ArrowRightIcon/>
                  </a>
                  </Button>
                <Button variant="outline" asChild>
                    <a href='/about'>
                      Learn more
                    </a>
                  </Button>
            </div>
        </div>
          <div className='lg:w-1/2 w-full flex flex-col gap-2'>
            { jobs?.slice(0,5).map((job)=>(
              <div key={job.id}>
                <JobCard title={job.Job_Opening_Name} type={job.Job_Type} remote={job.Remote_Job} country={job.Country} city={job.City} url={job.Url} id={job.id}/>
              </div>
            ))
            }
          </div>
    </div>
  )
}
