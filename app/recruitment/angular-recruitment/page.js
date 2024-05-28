import React from 'react'

export const metadata = {
  title: "Angular Staffing Solutions Worldwide | Angular Jobs | Worldwide | Part/Full-time",
  description: "Top-tier Angular Consultancy/staffing solutions, recruitment remote and across Europe, Africa, Asia and the USA. Hire staff or get hired, contractor/full-time. Java jobs offered.",
}

export default function page() {
  return (
    <div className='flex justify-center mb-10'>
      <div className='lg:w-4/5 w-full'>
        <div className='flex justify-center py-6 text-center'>
          <h1 className='text-3xl'>Angular Recruitment worldwide</h1>
        </div>
        <div className='flex gap-5 py-5 flex-col lg:flex-row'>
          <div className='lg:w-1/2 w-full'>
            <p>
              Angular recruitment services are provided for International institutions and organisations worldwide, we source top talent and place pre-screened Angular consultants, developers, engineers, or architects. If you are looking for dedicated Angular expertise on permanent or contingent agreements, you can rely on BE Consultancy Group to get the job done. As a strategic IT staffing consultant, we build lasting relationships with clients and candidates alike.</p>
          </div>
          <div className='lg:w-1/2 w-full flex justify-center'>
            <img src='/images/recruitment/angular.jpg' className='rounded-lg'/>
          </div>
        </div>

      <div className='flex flex-col gap-4 py-5 border-t'>
          <h4 className='text-2xl '>Angular Jobs</h4>
          <p>We provide hand-picked Angular jobs worldwide for candidates, where we screen, interview, and place applicants in some of the best jobs in the region. Worldwide, we have matched Angular professionals with top positions in leading institutions. We guide candidates on accommodation, finances that help candidates carry out their jobs with minimal hassle. We provide vacancies for full-time angular professionals, contractors, remote workers, and contractors.</p>
      </div>
      </div>

    </div>
  )
}
