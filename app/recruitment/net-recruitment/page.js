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
          <h1 className='text-3xl'>.NET (Microsoft) Recruitment in Europe and Around the Globe</h1>
        </div>
        <div className='flex gap-5 py-5 flex-col lg:flex-row'>
          <div className='lg:w-1/2 w-full flex flex-col gap-2'>
            <p>End-to-end .NET Recruitment Solutions in Europe, where we source talent for leading markets across the region.</p>
            <p>Pre-screened, top-tier .NET consultants, developers, engineers, or architects.</p>
            <p>You can rely on BE Consultancy to provide dedicated expertise on permanent or contingent agreements for your development projects.</p>
            <p>In addition, BE Consultancy is a global recruitment company and our .NET placements now extend across different regions of the globe including but not limited to the Asia Pacific Region, Australia, and the Middle East.</p>
          </div>
          <div className='lg:w-1/2 w-full flex justify-center'>
            <img src='/images/recruitment/net.jpg' className='rounded-lg'/>
          </div>
        </div>

      <div className='flex flex-col gap-4 py-5 border-t'>
          <h4 className='text-2xl '>.NET Jobs in Europe and Asia (Asia Pacific)</h4>
          <p>BE Consultancy lists .NET jobs for candidates with varying levels of experience. We screen, interview, and recruit talent for top companies across the European region. Upon the successful placement of hundreds of Angular professionals from the Netherlands, Belgium, Spain, Portugal, Ireland, and Germany, the process is streamlined. Recruitment is not restricted to the countries above, a global entity, .NET jobs are offered in Asia (Asia Pacific), Australia, the Middle East, Australia, and beyond. Consultancy is provided to selected candidates on accommodation, finances, and anything else that helps them transition into their new jobs smoothly. Listings include full-time, freelance, and remote job opportunities.</p>
      </div>
      </div>

    </div>
  )
}
