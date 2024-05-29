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
          <h1 className='text-3xl'>Big Data Recruitment in Europe and Around the Globe</h1>
        </div>
        <div className='flex gap-5 py-5 flex-col lg:flex-row'>
          <div className='lg:w-1/2 w-full flex flex-col gap-2'>
            <p>BE Consultancy specializes in providing IT staffing consultancy for big data, data science, marketing, and analytics.</p>
            <p>Having made placements for leading companies around the world, our processes are transparent and where we rely on a collaborative approach to make sure that we deliver services of the highest order.</p>
            <p>Source top big data/analytics talent around the world with varying skill levels on permanent or contingent agreements.</p>
            <p>Europe is where predominantly source our employees but as a global IT consultancy with a proven track record in Europe, Asia, and the Middle East, we are able to provide world-className talent for challenging projects in the data science sector.</p>
          </div>
          <div className='lg:w-1/2 w-full flex justify-center'>
            <img src='/images/recruitment/bigdata.jpg' className='rounded-lg'/>
          </div>
        </div>

      <div className='flex flex-col gap-4 py-5 border-t'>
          <h4 className='text-2xl '>Big Data Jobs in Europe and Asia (Asia Pacific)</h4>
          <p>BE Consultancy is the go-to option for candidates with varying levels of skills and experience. We screen, interview to understand what the candidate is capable of. Our consultants work hard to find the perfect balance between skill sets and cultural alignment to increase candidates' chances of landing that perfect job.</p>
      </div>
      </div>

    </div>
  )
}
