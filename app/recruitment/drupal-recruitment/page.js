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
          <h1 className='text-3xl'>Drupal Recruitment in Europe</h1>
        </div>
        <div className='flex gap-5 py-5 flex-col lg:flex-row'>
          <div className='lg:w-1/2 w-full'>
          <p> All-inclusive Drupal recruitment solutions in Europe, if you are looking for a one-stop-solution for Drupal recruitment, you have come to the right place. AEC specializes in sourcing talent across leading European markets. We provide pre-screened, top-tier professionals, consultants, developers, engineers, and system architects specializing in Drupal. We operate an expansive network across Europe and have made hundreds of Drupal placements in Spain, Ireland, Germany, the United Kingdom, Portugal and more.</p>
          </div>
          <div className='lg:w-1/2 w-full flex justify-center'>
            <img src='/images/recruitment/drupal.jpg' className='rounded-lg'/>
          </div>
        </div>

      <div className='flex flex-col gap-4 py-5 border-t'>
          <h4 className='text-2xl '>Drupal Jobs in Europe</h4>
          <p>If you are looking for your next challenge, a top Drupal job in Europe, we have plenty for you to choose from. We handle screening, interviews for top companies in the European Union. We have placed hundreds of professionals across the Netherlands, Belgium, Spain, Portugal, Ireland, Germany, the UK and more. We have a streamlined hiring process that helps candidates seamlessly transition into their new jobs. We provide advice and perks for vacancies that require travel, your accommodation, finances and other formalities will be sorted out for you. Go ahead and explore our vacancies today!</p>
      </div>
      </div>

    </div>
  )
}
