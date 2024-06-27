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
<div class="py-10 text-center">
    <div class="flex justify-center py-5">
        <div class="w-3/4 text-center flex flex-col items-center gap-3">
            <h1 class="text-xl">Our Consultancy Expertise</h1>
        </div>
    </div>
    <div class="flex justify-center py-5">
        <div class="w-full justify-between flex lg:flex-row flex-col gap-3 ">
            <div class="w-full lg:w-1/2 flex lg:flex-row flex-col gap-3">
                <a href="/recruitment/java-recruitment" class="lg:w-1/2 w-full transition-all rounded-md ">
                    <div class="rounded-xl border bg-card text-card-foreground shadow w-full h-full flex py-3 flex-col items-center justify-center hover:border-primary">
                        <div class="flex justify-center items-center">
                            <img src="/images/tech/java.png" class="w-[100px]" alt='java logo'/></div>
                            <div class="flex flex-col justify-center items-center gap-3">
                                <h6 class="text-xl">Java</h6>
                            </div>
                        </div>
                    </a>
                    <a href="/recruitment/angular-recruitment" class="lg:w-1/2 w-full transition-all rounded-md ">
                        <div class="rounded-xl border bg-card text-card-foreground shadow w-full h-full flex py-3 flex-col items-center justify-center hover:border-primary">
                            <div class="flex justify-center items-center">
                                <img src="/images/tech/angular.png" class="w-[100px]" alt='angular logo'/></div>
                                <div class="flex flex-col justify-center items-center gap-3">
                                    <h6 class="text-xl">Angular</h6>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="w-full lg:w-1/2 flex lg:flex-row flex-col gap-3">
                        <a href="/recruitment/drupal-recruitment" class="lg:w-1/2 w-full transition-all rounded-md ">
                            <div class="rounded-xl border bg-card text-card-foreground shadow w-full h-full flex py-3 flex-col items-center justify-center hover:border-primary">
                                <div class="flex justify-center items-center">
                                    <img src="/images/tech/drupal.png" class="w-[100px]" alt='drupal logo'/></div>
                                    <div class="flex flex-col justify-center items-center gap-3">
                                        <h6 class="text-xl">Drupal</h6>
                                    </div>
                                </div>
                            </a>
                            <a href="/recruitment/net-recruitment" class="lg:w-1/2 w-full transition-all rounded-md ">
                                <div class="rounded-xl border bg-card text-card-foreground shadow w-full h-full flex py-3 flex-col items-center justify-center hover:border-primary">
                                    <div class="flex justify-center items-center">
                                        <img src="/images/tech/net.png" class="w-[100px]" alt='.net logo'/></div>
                                        <div class="flex flex-col justify-center items-center gap-3">
                                            <h6 class="text-xl">.NET</h6>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>  

    </>
  )
}
