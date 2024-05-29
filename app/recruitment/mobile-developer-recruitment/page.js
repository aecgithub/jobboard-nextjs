import React from 'react'

export const metadata = {
  title: "Mobile Developer Staffing Solutions Worldwide | Mobile Developer Jobs | Worldwide | Part/Full-time",
  description: "Top-tier Mobile Developer Consultancy/staffing solutions, recruitment remote and across Europe, Africa, Asia and the USA. Hire staff or get hired, contractor/full-time. Mobile Developer jobs offered.",
}

export default function page() {
  return (
    <div className='flex justify-center mb-10'>
      <div className='lg:w-4/5 w-full'>
        <div className='flex justify-center py-6 text-center'>
          <h1 className='text-3xl'>Mobile Developer Recruitment in Europe and Around the Globe</h1>
        </div>
        <div className='flex gap-5 py-5 flex-col lg:flex-row'>
          <div className='lg:w-1/2 w-full flex flex-col gap-2'>
            <p>BE Consultancy, strive hard to stay on top of the recruitment game in a world where the advancement of technology demands more sophisticated talent and work models. Our consultants have their finger on the pulse when it comes to the mobile app development industry.</p>
            <p>Source Android and iOS developers capable of catering to tomorrow’s tech needs. Staying abreast of market trends, question methodologies that don’t work, and working with an extensive network of Android and iOS developers across Asia, the Middle East, Europe, Australia is what we do.</p>
            <p>Not focused on simply filling roles, we listen, consult, advise, and take a data-driven approach to acquire the best possible talent for your organization.</p>
          </div>
          <div className='lg:w-1/2 w-full flex justify-center'>
            <img src='/images/recruitment/mobile.jpg' className='rounded-lg'/>
          </div>
        </div>

      <div className='flex flex-col gap-4 py-5 border-t'>
          <h4 className='text-2xl '>Android and iOS Developer Jobs in Europe and Asia (Asia Pacific)</h4>
          <p>BE Consultancy lists vacancies for mobile developers across Europe, Asia Pacific, and the Middle East. Our opportunities contribute to client and candidate growth alike. With a strong focus on long-term growth, we take great care to make a perfect placement to ensure clients' and candidates' requirements are met.</p>
      </div>
      </div>

    </div>
  )
}
