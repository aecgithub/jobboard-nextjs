import React from 'react'

export const metadata = {
  title: ".NET Staffing Solutions Worldwide | .NET Jobs | Worldwide | Part/Full-time",
  description: "Top-tier .NET Consultancy/staffing solutions, recruitment remote and across Europe, Africa, Asia and the USA. Hire staff or get hired, contractor/full-time. .NET jobs offered.",
}

export default function page() {
  return (
    <div className='flex justify-center mb-10'>
      <div className='lg:w-4/5 w-full'>
        <div className='flex justify-center py-6 text-center'>
          <h1 className='text-3xl'>.NET (Microsoft) Recruitment worldwide</h1>
        </div>
        <div className='flex gap-5 py-5 flex-col lg:flex-row'>
          <div className='lg:w-1/2 w-full'>
            <p>
              We provide end-to-end .NET (Microsoft) recruitment solutions for International institutions and organisations worldwide. BE Consultancy Group specializes in sourcing and placing pre-screened Microsoft or .NET consultants, developers, engineers, architects, and more. Rely on us for dedicated expertise on permanent or contingent agreements. Get your .NET development project completed with seasoned professionals today.</p>
          </div>
          <div className='lg:w-1/2 w-full flex justify-center'>
            <img src='/images/recruitment/net.jpg' className='rounded-lg'/>
          </div>
        </div>

      <div className='flex flex-col gap-4 py-5 border-t'>
          <h4 className='text-2xl '>.Net Jobs</h4>
          <p>Access hand-picked .NET jobs at International institutions worldwide, we have openings for varying levels of experience and provide placements in top companies. We have placed hundreds of .NET professionals worldwide. Apply today by exploring our permanent, contractor, or remote .NET opportunities.</p>
      </div>
      </div>

    </div>
  )
}
