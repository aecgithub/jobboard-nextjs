import React from 'react'

export const metadata = {
  title: "DevOps Staffing Solutions Worldwide | DevOps Jobs | Worldwide | Part/Full-time",
  description: "Top-tier DevOps Consultancy/staffing solutions, recruitment remote and across Europe, Africa, Asia and the USA. Hire staff or get hired, contractor/full-time. DevOps jobs offered.",
}

export default function page() {
  return (
    <div className='flex justify-center mb-10'>
      <div className='lg:w-4/5 w-full'>
        <div className='flex justify-center py-6 text-center'>
          <h1 className='text-3xl'>DevOps Recruitment in Europe</h1>
        </div>
        <div className='flex gap-5 py-5 flex-col lg:flex-row'>
          <div className='lg:w-1/2 w-full'>
          <p>If you are looking for all-encompassing DevOps recruitment solutions in Europe, AEC is the right partner for your organization. AEC specializes in sourcing talent for leading companies across Europe. We provide pre-screened, top-tier consultants, developers, engineers, and system architects specializing in DevOps. You can rely on AEC to provide dedicated expertise on permanent or flexible agreements for development projects of different size or scale.</p>
          </div>
          <div className='lg:w-1/2 w-full flex justify-center'>
            <img src='/images/recruitment/bigdata.jpg' className='rounded-lg'/>
          </div>
        </div>

      <div className='flex flex-col gap-4 py-5 border-t'>
          <h4 className='text-2xl '>DevOps Jobs in Europe</h4>
          <p>AEC lists DevOps jobs for candidates with different levels of experience across Europe. We handle screening, interviews, and onboarding. Our vacancies come from the best companies in Europe with top remuneration. Our track record of placing hundreds of DevOps professionals across the Netherlands, Belgium, Spain, Portugal, Ireland, Germany, and the United Kingdom is something that we have built over the years. AEC provides advice on accommodation, finances, or anything else that ensures a seamless transition into their new jobs. Explore our full-time, part-time, or contractor DevOps vacancies and get your dream job today!</p>
      </div>
      </div>

    </div>
  )
}
