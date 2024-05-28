import React from 'react'

export default function page() {
  return (
    <div className=''>
        <div className='flex justify-center py-6'>
            <h1 className='text-3xl'>About Us</h1>
        </div>
        <div className='lg:flex gap-5 justify-center items-center'>
            <div className='lg:w-1/2 w-full'>
                <p>As an organization we stand for the following values: a positive attitude, service mindedness, taking pleasure from our work. Add to the mix flexibility, open communication, action-focused and you have everything you need to understand our motto: CAN DO.</p>
                <div className='py-5'>
                    <h6 className='font-semibold'>A Happy Partner</h6>
                    <p>We are well aware that our work is not judged based solely on the final result. Our way of communicating and our interaction with you are as important as well. Our ambition is to build a long-term relationship. We are not just any recruitment organization, but a proactive and contributing partner.</p>
                </div>
            </div>
            <div className='lg:w-1/2 w-full flex justify-center items-center lg:justify-start'>
                <img src='images/recruitment/about.jpg' className=' rounded-lg'/>
            </div>
        </div>

          <div className='text-center py-10 gap-5 flex flex-col my-10'>
              <h1 className='text-3xl'>Vision & Mission Statements</h1>
              <h6 className='font-semibold'>“To become the preferred and strategic recruitment partner for all of our customers by providing high quality, flexible, cost efficient and innovative recruitment services”.</h6>
              <p>With an ever more complex business market as well as an aging working population in mind, we stay on top of every HR and Recruitment development in both the technical and conceptual field.</p>
              <p>This will allow us to continuously provide correct advice and support for our customers.</p>
              <p>Everything we do, we do with high quality and dedication.</p>
          </div>

    </div>
  )
}
