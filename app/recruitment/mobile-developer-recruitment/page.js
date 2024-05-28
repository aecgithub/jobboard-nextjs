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
          <h1 className='text-3xl'>Mobile Developer Recruitment</h1>
        </div>
        <div className='flex gap-5 py-5 flex-col lg:flex-row'>
          <div className='lg:w-1/2 w-full'>
            <p>
              BE Consultancy Group strives to stay on top of the recruitment game and mobile developer staffing has become an integral part of this endeavor. The advancement of technology demands sophisticated technology, talent, and organizational workflows. We stay ahead of the curve when it comes to the mobile app development industry and have the ability to source Android and iOs developers with the know-how to deliver tomorrow&apos;s tech needs. We work with an extensive network of Android and iOS developers worldwide. We do not simply fill roles, we listen, screen, and employ tried-and-tested methods to acquire the best possible talent for your project.</p>
          </div>
          <div className='lg:w-1/2 w-full flex justify-center'>
            <img src='/images/recruitment/mobile.jpg' className='rounded-lg'/>
          </div>
        </div>

      <div className='flex flex-col gap-4 py-5 border-t'>
          <h4 className='text-2xl '>Android and iOS Developer Jobs</h4>
          <p>We list vacancies for mobile developers worldwide. Our opportunities give candidates growth, job satisfaction, and work-life balance. With a strong focus on employee welfare and long-term growth, we place you in top International institutions and organisations worldwide. Go ahead and explore our permanent, freelance, or contractor opportunities and get your dream job today!</p>
      </div>
      </div>

    </div>
  )
}
