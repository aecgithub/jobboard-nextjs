import React from 'react'

export default function Footer() {
  return (
    <div className='bg-foreground py-10'>
        <div className='container lg:flex items-center'>
            <div className='lg:w-2/5 w-full flex justify-center pb-4 lg:pb-0'>
                <img src='/images/logo.png' className='w-[200px]'/>
            </div>
              <div className='lg:w-3/5 w-full flex lg:flex-row flex-col text-white gap-3'>
                <div className='lg:w-1/2 w-full flex '>
                    <div className='w-1/2'>
                        <h6 className='text-sm font-semibold'>LINKS</h6>
                        <div className='flex flex-col text-sm py-4 gap-2'>
                            <a className='hover:text-primary' href='/'>Home</a>
                            <a className='hover:text-primary' href='/jobs'>Jobs</a>
                        </div>
                    </div>
                    <div className='w-1/2'>
                        <h6 className='text-sm font-semibold'>RECRUITMENT</h6>
                        <div className='flex flex-col text-sm py-4 gap-2'>
                            <a className='hover:text-primary' href='/java-recruitment'>Java Recruitment</a>
                            <a className='hover:text-primary' href='/angular-recruitment'>Angular Recruitment</a>
                            <a className='hover:text-primary' href='/net-recruitment'>.NET Recruitment</a>
                            <a className='hover:text-primary' href='/drupal-recruitment'>Drupal Recruitment</a>
                            <a className='hover:text-primary' href='/devops-recruitment'>DevOps Recruitment</a>
                            <a className='hover:text-primary' href='/big-data-recruitment'>Big Data Recruitment</a>
                            <a className='hover:text-primary' href='/mobile-developer-recruitment'>Mobile Developer Recruitment</a>
                        </div>
                    </div>
                </div>
                  <div className='lg:w-1/2 w-full flex'>
                    <div className='w-1/2 '>
                        <h6 className='text-sm font-semibold'>TERMS</h6>
                        <div className='flex flex-col text-sm py-4 gap-2'>
                            <a className='hover:text-primary' href='/terms-and-condition'>Terms and Conditions</a>
                            <a className='hover:text-primary' href='/privacy-policy'>Privacy Policy</a>
                        </div>
                    </div>
                    <div className='w-1/2 '>
                        <h6 className='text-sm font-semibold'>ABOUT</h6>
                        <div className='flex flex-col text-sm py-4 gap-2'>
                            <a className='hover:text-primary' href='/about'>About</a>
                            <a className='hover:text-primary' href='/contact'>Contact</a>
                        </div>
                    </div>
                    </div>
              </div>
        </div>

    </div>
  )
}
