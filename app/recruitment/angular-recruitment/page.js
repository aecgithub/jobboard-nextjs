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
          <h1 className='text-3xl'>Angular Recruitment in Europe and Around the Globe</h1>
        </div>
        <div className='flex gap-5 py-5 flex-col lg:flex-row'>
          <div className='lg:w-1/2 w-full flex flex-col gap-2'>
            <p> Comprehensive Angular Recruitment Solutions in Europe, where we source talent for leading markets across the region.</p>
            <p>Pre-screened, top-tier angular consultants, developers, engineers, or architects.</p>
            <p>You can rely on BE Consultancy to provide dedicated Angular expertise on permanent or contingent agreements for your development projects.</p>
            <p>In addition, BE Consultancy is a global IT staffing consultant and our Angular placements now extend different regions of the globe including but not limited to the Asia Pacific Region, Australia, and the Middle East.</p>
          </div>
          <div className='lg:w-1/2 w-full flex justify-center'>
            <img src='/images/recruitment/angular.jpg' className='rounded-lg'/>
          </div>
        </div>

      <div className='flex flex-col gap-4 py-5 border-t'>
          <h4 className='text-2xl '>Angular Jobs in Europe and Asia (Asia Pacific)</h4>
          <p>BE Consultancy lists Angular jobs for candidates with varying levels of experience. We screen, interview, and recruit talent for top companies across the European region. We have successfully placed hundreds of Angular professionals from the Netherlands, Belgium, Spain, Portugal, Ireland, and Germany. Services are not however, restricted to these countries, European residents or those with work permits for the region are welcome to apply. A global entity, BE consultancy lists angular jobs in Asia (Asia Pacific), Australia, the Middle East, Australia, and beyond. Consultancy and advice is provided to selected candidates on accommodation, finances, and anything else that helps them carry out their new jobs with ease. Our Angular developer jobs include listings for full-time employees, freelancers, and remote workers.</p>
      </div>
      </div>

    </div>
  )
}
