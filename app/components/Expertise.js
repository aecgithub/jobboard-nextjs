"use client"
import { Card } from '@/components/ui/card'
import React from 'react'
import { Button } from '@/components/ui/button'
import { Bell, Factory, Captions, ClipboardCheck } from 'lucide-react';

export default function Expertise() {
  return (
    <>
    <div className='py-10 text-center'>
      <div className='flex justify-center py-5'>
        <div className='w-3/4 text-center flex flex-col items-center gap-3'>
          <h1 className='text-xl'>Our Consultancy Expertise</h1>
        </div>
      </div>
      <div className='flex justify-center py-5'>
        <div className='w-full justify-between flex lg:flex-row flex-col gap-3 '>
          <div className='w-full lg:w-1/2 flex lg:flex-row flex-col gap-3'>
            <a href='/recruitment/java-recruitment' className='lg:w-1/2 w-full transition-all rounded-md '>
              <Card className="w-full h-full flex py-3 flex-col items-center justify-center hover:border-primary">
                <div className='flex justify-center items-center'>
                  <img src='/images/tech/java.png' className='w-[100px]' />
                </div>
                <div className='flex flex-col justify-center items-center gap-3'>
                  <h6 className='text-xl'>Java</h6>
                </div>
              </Card>
            </a>
              <a href='/recruitment/angular-recruitment' className='lg:w-1/2 w-full transition-all rounded-md '>
              <Card className="w-full h-full flex py-3 flex-col items-center justify-center hover:border-primary">
                <div className='flex justify-center items-center'>
                  <img src='/images/tech/angular.png' className='w-[100px]' />
                </div>
                <div className='flex flex-col justify-center items-center gap-3'>
                  <h6 className='text-xl'>Angular</h6>
                </div>
              </Card>
            </a>
          </div>
          <div className='w-full lg:w-1/2 flex lg:flex-row flex-col gap-3'>
             <a href='/recruitment/drupal-recruitment' className='lg:w-1/2 w-full transition-all rounded-md '>
            <Card className="w-full h-full flex py-3 flex-col items-center justify-center hover:border-primary">
              <div className='flex justify-center items-center'>
                <img src='/images/tech/drupal.png' className='w-[100px]' />
              </div>
              <div className='flex flex-col justify-center items-center gap-3'>
                <h6 className='text-xl'>Drupal</h6>
              </div>
            </Card>
              </a>
               <a href='/recruitment/net-recruitment' className='lg:w-1/2 w-full transition-all rounded-md '>
            <Card className="w-full h-full flex py-3 flex-col items-center justify-center hover:border-primary">
              <div className='flex justify-center items-center'>
                <img src='/images/tech/net.png' className='w-[100px]' />
              </div>
              <div className='flex flex-col justify-center items-center gap-3'>
                <h6 className='text-xl'>.NET</h6>
              </div>
            </Card>
                </a>
          </div>
          </div>
      </div>
    </div>
    {/* <div className='py-5'>
      <div className='flex justify-center'>
        <div className='w-3/4 text-center py-10 flex flex-col items-center gap-3'>
            <h1 className='text-xl'>Our Consultancy Expertise</h1>
        </div>
      </div>
      <div className='flex flex-col lg:flex-row gap-5 py-5 items-center'>
        <div className='w-full lg:w-1/3 flex flex-col gap-5'>
          <div className='flex flex-col gap-3 items-center justify-center text-center'>
              <img src='/images/tech/java.png' className='w-[100px]' />
            <h1 className='font-semibold text-lg'>Java</h1>
              <p className='text-xs'>Top-tier, comprehensive Java recruitment solution for International institutions and organisations worldwide. We source and place talent across leading markets.</p>
            <Button variant="ghost" className="text-gray-500" asChild>
              <a href='/recruitment/java-recruitment'>Learn More...</a>
              </Button>
          </div>
          <div className='flex flex-col gap-5 items-center justify-center text-center'>
              <img src='/images/tech/angular.png' className='w-[100px]' />
            <h1 className='font-semibold text-lg'>Angular</h1>
              <p className='text-xs'>Angular recruitment services are provided for International institutions and organisations worldwide, we source top talent and place pre-screened Angular consultants, developers, engineers, or architects.</p>
              <Button variant="ghost" className="text-gray-500" asChild>
                <a href='/recruitment/angular-recruitment'>Learn More...</a>
              </Button>
          </div>
        </div>

        <div className='w-full lg:w-1/3 flex flex-col gap-10'>
          <img src='/images/details.jpg' className='rounded-md'/>
        </div>

        <div className='w-full lg:w-1/3 flex flex-col gap-5'>
          <div className='flex flex-col gap-3 items-center justify-center text-center'>
              <img src='/images/tech/drupal.png' className='w-[100px]' />
            <h1 className='font-semibold text-lg'>Drupal</h1>
              <p className='text-xs'>All-inclusive Drupal recruitment solutions for International institutions and organisations worldwide, if you are looking for a one-stop-solution for Drupal recruitment, you have come to the right place.</p>
              <Button variant="ghost" className="text-gray-500" asChild>
                <a href='/recruitment/drupal-recruitment'>Learn More...</a>
              </Button>
          </div>
          <div className='flex flex-col gap-5 items-center justify-center text-center'>
              <img src='/images/tech/net.png' className='w-[100px]' />
            <h1 className='font-semibold text-lg'>.Net</h1>
              <p className='text-xs'>We provide end-to-end .NET (Microsoft) recruitment solutions for International institutions and organisations worldwide.</p>
              <Button variant="ghost" className="text-gray-500" asChild>
                <a href='/recruitment/net-recruitment'>Learn More...</a>
              </Button>
          </div>
        </div>

      </div>
    </div> */}
    </>
  )
}
