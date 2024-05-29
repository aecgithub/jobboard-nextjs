import React from 'react'

export const metadata = {
  title: "Drupal Staffing Solutions Worldwide | Drupal Jobs | Worldwide | Part/Full-time",
  description: "Top-tier Drupal Consultancy/staffing solutions, recruitment remote and across Europe, Africa, Asia and the USA. Hire staff or get hired, contractor/full-time. Drupal jobs offered.",
}

export default function page() {
  return (
    <div className='flex justify-center mb-10'>
      <div className='lg:w-4/5 w-full'>
        <div className='flex justify-center py-6 text-center'>
          <h1 className='text-3xl'>Drupal Recruitment in Europe and Around the Globe</h1>
        </div>
        <div className='flex gap-5 py-5 flex-col lg:flex-row'>
          <div className='lg:w-1/2 w-full flex flex-col gap-2'>
            <p> End-to-end Drupal Recruitment Solutions in Europe, where we source talent for leading markets across the region.</p>
            <p>Pre-screened, top-tier Drupal consultants, developers, engineers, or architects.</p>
            <p>You can rely on BE Consultancy to provide dedicated expertise on permanent or contingent agreements for your development projects.</p>
            <p>In addition, BE Consultancy is a global recruitment company and our Drupal placements now extend different regions of the globe including but not limited to the Asia Pacific Region, Australia, and the Middle East.</p>
          </div>
          <div className='lg:w-1/2 w-full flex justify-center'>
            <img src='/images/recruitment/drupal.jpg' className='rounded-lg'/>
          </div>
        </div>

      <div className='flex flex-col gap-4 py-5 border-t'>
          <h4 className='text-2xl '>Drupal Jobs in Europe and Asia (Asia Pacific)</h4>
          <p>BE Consultancy lists Drupal jobs for candidates with varying levels of experience. Screening, interviews, and recruitment is handled for top companies across the European region. Having successfully placed hundreds of professionals from the Netherlands, Belgium, Spain, Portugal, Ireland, and Germany, the process is streamlined. Consultancy is not restricted to these countries nevertheless, as part of a global expansion drive, we provide Drupal jobs in Asia (Asia Pacific), Australia, the Middle East, Australia, and beyond. Advice is provided for selected candidates on accommodation, finances, and anything else that helps them transition into their new jobs smoothly. Our listings include full-time, freelance, and remote job opportunities.</p>
      </div>
      </div>

    </div>
  )
}
