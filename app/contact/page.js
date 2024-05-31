
import React from 'react'
import ContactForm from '../components/ContactForm'

export const metadata = {
    title: "Contact Us | All European Careers",
    description: "Do not hesitate to get in touch with us for all your Java, Angular, and Microsoft recruitment needs in Europe.",
}

export default function page() {
  
  return (
    <div>
        <div className='text-center py-5'>
            <h6 className='text-3xl'>Contact Us</h6>
            <p>Please do not hesitate to get in touch with us if you need more information on the vacancies or if you need to hire staff.</p>
        </div>
        <div className='flex justify-center'>
              <div className='flex py-5 lg:w-4/5 w-full flex-col lg:flex-row items-center gap-5'>
                <div className='w-full lg:w-1/2 flex flex-col items-center '>
                    <div className='flex gap-5 lg:text-2xl '>
                        <div className='space-y-3'>
                            <p>Belgium</p>
                            <p>Spain</p>
                            <p>UK</p>
                            <p>Singapore</p>
                            <p>Australia</p>
                        </div>
                        <div className='space-y-3'>
                            <p>:</p>
                            <p>:</p>
                            <p>:</p>
                            <p>:</p>
                            <p>:</p>
                        </div>
                        <div className='space-y-3'>
                            <p>+32 16 981 000</p>
                            <p>+34 96502 0606</p>
                            <p>+44 020 4502 6116</p>
                            <p>+65 3163 4500</p>
                            <p>+61 399 173 455</p>
                        </div>
                    </div>
                </div>
                <div className='w-full lg:w-1/2 flex justify-center'>
                    <img src='images/logo.png' className=''/>
                </div>
            </div>
        </div>


    <ContactForm/>

    </div>
  )
}
