import { Layers, Monitor, Smile, TrophyIcon } from 'lucide-react'
import React from 'react'

export default function page() {
  return (
    <div className=''>
        <div className='flex justify-center py-6'>
            <h1 className='text-3xl'>About Us</h1>
        </div>
        <div className='lg:flex gap-5 justify-center items-center'>
            <div className='lg:w-1/2 w-full flex flex-col gap-2'>
                  <p>A set of passionate and creative IT staffing consultants relentless in our efforts to bring together top-tier talent with leading brands across Europe and the Asia Pacific region. BE Consultancy is a dynamic recruitment network specializing in tech. Headquartered in Europe, we have expanded to the Asia Pacific region and the Middle East.</p>
                  <p>Our expanding team of former industry professionals and enthusiasts has decades of combined experience in IT consulting, headhunting, and staffing.</p>
                  <p>Our ethos is based on the principles of proactive research and the deep understanding of evolving markets. We evaluate and analyze trends to build substantial, lasting relationships with clients and candidates alike.</p>
                  <p>A network of talent eagerly awaits their next assignment. From freelancing, contracting, remote working to permanent placements.</p>
            </div>
            <div className='lg:w-1/2 w-full flex justify-center items-center lg:justify-start'>
                <img src='images/recruitment/about.jpg' className=' rounded-lg'/>
            </div>
        </div>

          <div className='text-center py-10 gap-5 flex flex-col my-10'>
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

          <div className='py-10'>
                  <div className='flex justify-center py-6'>
                      <h1 className='text-3xl'>Core Values</h1>
                  </div>
                  <div className='flex gap-5 flex-col lg:flex-row'> 

                    <div className='flex flex-col justify-center lg:w-1/4 w-full items-center gap-2'>
                        <div className='border border-black rounded-full p-5'>
                        <TrophyIcon />
                        </div>
                          <h6 className='font-semibold'>Passion</h6>
                          <p>We are extremely passionate about tech, our business, and our roles.</p>
                    </div>

                      <div className='flex flex-col justify-center lg:w-1/4 w-full items-center gap-2'>
                          <div className='border border-black rounded-full p-5'>
                              <Monitor />
                          </div>
                          <h6 className='font-semibold'>Transparency</h6>
                          <p>Our organizational culture revolves around open discussion, honesty, and reliability.</p>
                      </div>

                      <div className='flex flex-col justify-center lg:w-1/4 w-full items-center gap-2'>
                          <div className='border border-black rounded-full p-5'>
                              <Layers/>
                          </div>
                          <h6 className='font-semibold'>Flexibility</h6>
                          <p>Adaptable, open to change, new ideas, and willing to accept change for the better.</p>
                      </div>

                      <div className='flex flex-col justify-center lg:w-1/4 w-full items-center gap-2'>
                          <div className='border border-black rounded-full p-5'>
                              <Smile />
                          </div>
                          <h6 className='font-semibold'>Collaboration</h6>
                          <p>BE Consultancy goes the extra mile to ensure that clients and candidates achieve.</p>
                      </div>

                  </div>
          </div>

          </div>

    </div>
  )
}
