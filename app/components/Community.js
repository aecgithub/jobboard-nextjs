import React from 'react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'


export default function Community() {
  return (
      <div className='flex flex-col lg:flex-row py-16 items-center'>
          <div className='w-full lg:w-1/2 flex flex-col gap-3'>
              <div className='flex flex-col gap-3 pb-10'>
                  <h1 className='text-xl'>Join Our LinkedIn Communities with over 100,000 Professionals</h1>
              </div>
              <div className='flex space-between gap-5'>
                  <div className='w-1/2 flex justify-center items-center'>
                      <Image src="/images/communities/grn.png" className="rounded-md" width={200} height={50}  />
                  </div>
                  <div className='w-1/2 flex justify-center items-center'>
                      <Image src="/images/communities/ein.png" className="rounded-md" width={200} height={50} />
                  </div>
              </div>
                <div className='flex space-between gap-5'>
                  <div className='w-1/2 flex justify-center items-center'>
                      <Image src="/images/communities/ejn.png" className="rounded-md" width={200} height={50}  />
                  </div>
                  <div className='w-1/2 flex justify-center items-center'>
                      <Image src="/images/communities/bin.png" className="rounded-md" width={200} height={50} />
                  </div>
              </div>
              <div className='flex space-between gap-5'>
                  <div className='w-1/2 flex justify-center items-center'>
                      <Image src="/images/communities/ln.png" className="rounded-md" width={200} height={50} />
                  </div>
                  <div className='w-1/2 flex justify-center items-center'>
                      <Image src="/images/communities/bsmn.png" className="rounded-md" width={200} height={50} />
                  </div>
              </div>
              <div className='flex space-between gap-5'>
                  <div className='w-1/2 flex justify-center items-center'>
                      <Image src="/images/communities/bhrn.png" className="rounded-md" width={200} height={50} />
                  </div>
                  <div className='w-1/2 flex justify-center items-center'>
                      <Image src="/images/communities/bif.png" className="rounded-md" width={200} height={50} />
                  </div>
              </div>
          </div>
          <div className='w-full lg:w-1/2 lg:flex flex-col gap-3 hidden'>
              <img src='/images/communities/community.jpg' className='rounded-md' />
          </div>

      </div>
  )
}
