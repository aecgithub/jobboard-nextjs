"use client"
import { Card } from '@/components/ui/card'
import React from 'react'
import { Button } from '@/components/ui/button'
import { Bell, Factory, Captions, ClipboardCheck } from 'lucide-react';

export default function Expertise() {
  return (
    <>
    {/* <div className='py-10 text-center'>
      <h1 className='text-xl'>Our Consultancy Expertise</h1>
      <div className='flex justify-center py-5'>
        <div className='flex w-full justify-between gap-2 '>

          <div className='w-1/4 transition-all rounded-md p-1'>
            <Card className="w-full h-full flex flex-col items-center justify-center hover:border-primary ">
              <div className='flex justify-center items-center transition ease-in-out group-hover:absolute group-hover:-translate-y-12 group-hover:translate-x-12  duration-700'>
                <img src='/images/tech/java.png' className='w-[100px]'/>
              </div>
              <div className='w-full p-2 flex-col justify-start items-start hidden group-hover:flex transition delay-150 duration-700'>
                  <h6>Java</h6>
                  <p className='w-full text-xs text-left'>Top-tier, comprehensive Java recruitment solution for International institutions and organisations worldwide.</p>
               <a>Learn More </a>
              </div>
            </Card>
          </div>
          <div className='w-1/4 transition-all rounded-md p-1'>
            <Card className="w-full h-full flex flex-col items-center justify-center hover:border-primary">
              <div className='flex justify-center items-center'>
                <img src='/images/tech/angular.png' className='w-[100px]' />
              </div>
              <div className='flex flex-col justify-center items-center'>
                <h6 className='text-xl'>Angular</h6>
                <Button variant="ghost" className="py-1 text-xs" asChild>
                  <a href='/'>Learn More</a>
                </Button>
              </div>
            </Card>
          </div>
          <div className='w-1/4 transition-all rounded-md p-1'>
            <Card className="w-full h-full flex flex-col items-center justify-center hover:border-primary">
              <div className='flex justify-center items-center'>
                <img src='/images/tech/drupal.png' className='w-[100px]' />
              </div>
              <div className='flex flex-col justify-center items-center'>
                <Button variant="ghost" className="py-1 text-xs" asChild>
                  <a href='/'>Learn More</a>
                </Button>
              </div>
            </Card>
          </div>

          <div className='w-1/4 transition-all rounded-md p-1'>
            <Card className="w-full h-full flex flex-col items-center justify-center rounded-md">
              <div className='flex justify-center items-center'>
                <img src='/images/tech/net.png' className='w-[100px]' />
              </div>
              <div className='flex flex-col justify-center items-center'>
                <h6 className='text-xl'>.NET</h6>
                <Button variant="ghost" className="py-1 text-xs" asChild>
                  <a href='/'>Learn More</a>
                </Button>
              </div>
            </Card>
          </div>

          </div>
     


      </div>
    </div> */}
    <div className='py-5'>
      <div className='flex justify-center'>
        <div className='w-3/4 text-center py-10 flex flex-col items-center gap-3'>
            <h1 className='text-xl'>Our Consultancy Expertise</h1>
          {/* <p>At Quick-board, we offer a wide range of benefits for job seekers. From a variety of industries to job alert subscriptions and resources, we have everything you need to find your dream job.</p> */}
        </div>
      </div>
      <div className='flex flex-col lg:flex-row gap-5 py-5 items-center'>
        <div className='w-full lg:w-1/3 flex flex-col gap-5'>
          <div className='flex flex-col gap-3 items-center justify-center text-center'>
              <img src='/images/tech/java.png' className='w-[100px]' />
            <h1 className='font-semibold text-lg'>Java</h1>
              <p className='text-xs'>Comprehensive Java Recruitment Solutions in Europe, where we source talent for leading markets across the region. Pre-screened, top-tier java consultants, developers, engineers, or architects.</p>
            <Button variant="ghost" className="text-gray-500" asChild>
              <a href='/recruitment/java-recruitment'>Learn More...</a>
              </Button>
          </div>
          <div className='flex flex-col gap-5 items-center justify-center text-center'>
              <img src='/images/tech/angular.png' className='w-[100px]' />
            <h1 className='font-semibold text-lg'>Angular</h1>
              <p className='text-xs'>Comprehensive Angular Recruitment Solutions in Europe, where we source talent for leading markets across the region.Pre-screened, top-tier angular consultants, developers, engineers, or architects.</p>
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
              <p className='text-xs'>End-to-end Drupal Recruitment Solutions in Europe, where we source talent for leading markets across the region.Pre-screened, top-tier Drupal consultants, developers, engineers, or architects.</p>
              <Button variant="ghost" className="text-gray-500" asChild>
                <a href='/recruitment/drupal-recruitment'>Learn More...</a>
              </Button>
          </div>
          <div className='flex flex-col gap-5 items-center justify-center text-center'>
              <img src='/images/tech/net.png' className='w-[100px]' />
            <h1 className='font-semibold text-lg'>.Net</h1>
              <p className='text-xs'>End-to-end .NET Recruitment Solutions in Europe, where we source talent for leading markets across the region.Pre-screened, top-tier .NET consultants, developers, engineers, or architects.</p>
              <Button variant="ghost" className="text-gray-500" asChild>
                <a href='/recruitment/net-recruitment'>Learn More...</a>
              </Button>
          </div>
        </div>

      </div>
    </div>
    </>
  )
}
