import { Hammer, Layers, Monitor, MoveDiagonal2, PiggyBank, Smile, Timer, TrophyIcon } from 'lucide-react'
import React from 'react'

export default function page() {
  return (
    <div className=''>
        <div className='flex justify-center py-6'>
              <h1 className='text-3xl'>Our Approach</h1>
        </div>
        <div className='flex flex-col lg:flex-row gap-5 justify-center items-center'>
            <div className='lg:w-1/2 w-full flex flex-col gap-2'>
                  <p>BE Consultancy take IT staffing consulting to a whole new level. It’s not just talent you need; you need goal-oriented professionals engaged in your business. Our IT staffing consultants maintain high standards when sourcing, screening, and on boarding. Having catered to many companies in the European, Middle Eastern, and Asia Pacific regions we have the expertise to offer tried and tested solutions.</p>
                  <p>Acquiring the right talent is a challenge that many companies face today. Our services ensure that the operational challenges of the recruitment process don’t divert your focus from achieving business objectives. Outsourcing the IT staffing process is ideal if you believe that recruitment is a process that drives your business instead of being a roadblock.</p>
            </div>
            <div className='lg:w-1/2 w-full flex justify-center items-center lg:justify-start'>
                <img src='images/about/approach.jpg' className=' rounded-lg'/>
            </div>
        </div>

          {/* <div className='text-center py-10 gap-5 flex flex-col my-10'>
              <h1 className='text-3xl'>Vision & Mission Statements</h1>
              <p>At BE Consultancy Group, we work hard to achieve goals as a team with smart and achievable targets in mind. We adapt to changing business requirements from clients and the market as a whole to ensure growth for clients and candidates alike.</p>
          
          <div className='flex flex-col lg:flex-row gap-5'>
            <div className='w-full lg:w-1/2 flex flex-col text-center gap-2'>
                <img src='/images/about/vision.jpg' className='rounded-md'/>
                <h6 className='font-semibold'>Vision</h6>
                <p>"We aspire to become the preferred strategic IT staffing consultancy for customers across the globe through flexible, cost-effective, and innovative recruitment services".</p>
            </div>
            <div className='w-full lg:w-1/2 flex flex-col text-center gap-2'>
                <img src='/images/about/mission.jpg' className='rounded-md' />
                <h6 className='font-semibold'>Mission</h6>
                      <p>We achieve our vision by collaborating with our clients to recruit, manage and retain top-tier talent using our dynamic network of individuals.</p>
            </div>
          </div>

          </div> */}

          <div className='py-10'>
                  <div className='flex justify-center py-6'>
                      <h1 className='text-3xl'>How We Can Help</h1>
                  </div>
                  <div className='flex gap-5 flex-col lg:flex-row text-center'> 

                    <div className='flex flex-col justify-center lg:w-1/4 w-full items-center gap-2'>
                        <div className='border border-black rounded-full p-5'>
                        <Timer />
                        </div>
                      <h6 className='font-semibold'>Cost and time savings</h6>
                      <p>Save on HR, administrative, and other costs with in-house hiring.</p>
                    </div>

                      <div className='flex flex-col justify-center lg:w-1/4 w-full items-center gap-2'>
                          <div className='border border-black rounded-full p-5'>
                              <MoveDiagonal2 />
                          </div>
                      <h6 className='font-semibold'>Flexibility in scaling</h6>
                      <p>Ramp up resources for a given project or reduce resources quickly.</p>
                      </div>

                      <div className='flex flex-col justify-center lg:w-1/4 w-full items-center gap-2'>
                          <div className='border border-black rounded-full p-5'>
                              <Hammer/>
                          </div>
                      <h6 className='font-semibold'>Access to specialized skills</h6>
                      <p>A dynamic pool of connections with specialized skill sets.</p>
                      </div>

                      <div className='flex flex-col justify-center lg:w-1/4 w-full items-center gap-2'>
                          <div className='border border-black rounded-full p-5'>
                              <PiggyBank />
                          </div>
                      <h6 className='font-semibold'>Fixed price recruitment</h6>
                      <p>Pricing models are transparent and agreed upon by all parties.</p>
                      </div>

                  </div>
          </div>

    </div>
  )
}
