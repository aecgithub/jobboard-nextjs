import React from 'react'

export const metadata = {
  title: "Java Staffing Solutions Worldwide | Java Jobs | Worldwide | Part/Full-time",
  description: "Top-tier Java Consultancy/staffing solutions, recruitment remote and across Europe, Africa, Asia and the USA. Hire staff or get hired, contractor/full-time. Java jobs offered.",
}

export default function page() {
  return (
    <div className='flex justify-center mb-10'>
      <div className='lg:w-4/5 w-full'>
        <div className='flex justify-center py-6 text-center'>
          <h1 className='text-3xl'>Java Recruitment worldwide</h1>
        </div>
        <div className='flex gap-5 py-5 flex-col lg:flex-row'>
          <div className='lg:w-1/2 w-full'>
          <p>Top-tier, comprehensive Java recruitment solution for International institutions and organisations worldwide. We source and place talent across leading markets. Our pre-screened consultants, developers, system engineers, or developers could take your tech stack and development workforce to the next level. Rely on expert consultants to provide dedicated Java talent on permanent, contract, or contingent agreements.</p>
          </div>
          <div className='lg:w-1/2 w-full flex justify-center'>
            <img src='/images/recruitment/java.jpg' className='rounded-lg'/>
          </div>
        </div>

      <div className='flex flex-col gap-4 py-5 border-t'>
          <h4 className='text-2xl '>Java Jobs</h4>
          <p>If you&apos;re looking to get hired at one of the International institutions and organisations worldwide, you&apos;ve come to the right place. Apply through BE Consultancy Group and receive comprehensive career guidance for Java positions, whether you are a developer, system engineer, or architect. We have contractor and full-time opportunities giving you the flexibility to maintain an optimum work-life balance. Perks are offered for jobs requiring relocation with bonus incentives and assistance to help you settle into your new job.</p>
          <p>Our vacancies are varied which means we go beyond traditional employment and contractor Java opportunities. We&apos;ve got a range of remote java positions for you to choose from, across leading International institutions and organisations .</p>
      </div>
      </div>

    </div>
  )
}
