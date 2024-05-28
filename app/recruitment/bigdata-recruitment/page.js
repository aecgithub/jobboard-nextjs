import React from 'react'

export const metadata = {
  title: "Big Data Staffing Solutions Worldwide | Big Data Jobs | Worldwide | Part/Full-time",
  description: "Top-tier Big Data Consultancy/staffing solutions, recruitment remote and across Europe, Africa, Asia and the USA. Hire staff or get hired, contractor/full-time. Big Data jobs offered.",
}

export default function page() {
  return (
    <div className='flex justify-center mb-10'>
      <div className='lg:w-4/5 w-full'>
        <div className='flex justify-center py-6 text-center'>
          <h1 className='text-3xl'>Big Data Recruitment</h1>
        </div>
        <div className='flex gap-5 py-5 flex-col lg:flex-row'>
          <div className='lg:w-1/2 w-full'>
            <p>BE Consultancy Group provides recruitment solutions for big data, data science, and analytics professionals for International institutions and organisations worldwide. Having made hundreds of successful placements for leading companies and institutions worldwide, we rely on a collaborative process that ensures that we deliver services that exceed expectations. Source top big data/analytics talent worldwide with varying levels of experience on permanent or contingent arrangements. Obtain world-class talent for challenging data science projects today!</p>
          </div>
          <div className='lg:w-1/2 w-full flex justify-center'>
            <img src='/images/recruitment/bigdata.jpg' className='rounded-lg'/>
          </div>
        </div>

      <div className='flex flex-col gap-4 py-5 border-t'>
          <h4 className='text-2xl '>Big Data Jobs at International Institutions</h4>
          <p>BE Consultancy Group is the go-to option for big data candidates for International Institutions and organisations worldwide. We handle screening, interviews and understand what your requirements are before placing you at a leading International Institution or organisation. We help candidates find the perfect balance between skills and cultural alignment to ensure that they do what they love. Explore our freelance, full-time, or contractor big data jobs from the best companies in the region.</p>
      </div>
      </div>

    </div>
  )
}
