"use client"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React, { useState } from 'react'
import { Textarea } from "@/components/ui/textarea"
import { LoaderCircle, CircleCheck } from 'lucide-react';

export default function ContactForm() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [sent, setSent] = useState(false)

    function sendContactEmail(event) {
        event.preventDefault();
        setIsLoading(true)
        sendEmail()
    }

    function sendEmail() {
        try {
            const data = fetch('https://bec-new.netlify.app/api/contact', {
                method: 'POST',
                body: JSON.stringify({
                    name: name,
                    email: email,
                    subject: subject,
                    message: message
                })
            }).then((res) => res.json()).then((data) => {
                console.log(data)
                if (data.messageId) {
                    sendReply()
                }
            })
        } catch (error) {
            console.log('email send error', error)

        }
        setSent(true)
    }

    function sendReply() {
        try {
            const data = fetch('https://bec-new.netlify.app/api/reply', {
                method: 'POST',
                body: JSON.stringify({
                    name: name,
                    email: email,
                })
            }).then((res) => res.json()).then((data) => {
                console.log(data)
                if (data.messageId) {
                    setSent(true)
                    location.reload()
                }
            })
        } catch (error) {
            console.log(error)
        }
    }
  return (
      <div>
          <div className='flex justify-center py-5'>
              <h6 className='text-3xl'>Get in Touch</h6>
          </div>
          <div className='flex justify-center'>
              <div className='lg:w-2/4 w-full' >
                  <form className='flex flex-col gap-2' onSubmit={sendContactEmail}>
                      <div className='flex flex-col lg:flex-row gap-2'>
                          <Input onChange={(e) => setName(e.target.value)} type="text" name="name" placeholder="Name" required />
                          <Input onChange={(e) => setEmail(e.target.value)} type="email" name="email" placeholder="Email Address" required />
                      </div>
                      <div className='flex flex-col gap-2'>
                          <Input onChange={(e) => setSubject(e.target.value)} type="text" name="subject" placeholder="Subject" required />
                          <Textarea onChange={(e) => setMessage(e.target.value)} name="message" rows="10" placeholder="Your Message" required />
                      </div>
                      <div className='flex justify-center py-5'>

                          {sent ?
                              <div className='inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium  bg-white border shadow h-9 px-4 py-2'>
                                  <CircleCheck className='w-5 h-5 mr-3 text-green-500' />
                                  Message Sent
                              </div>
                              :
                              <>
                                  {isLoading ?
                                      <div className='inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium  bg-white border shadow h-9 px-4 py-2'>
                                          <svg class="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                                              <LoaderCircle />
                                          </svg>
                                          Processing...
                                      </div>
                                      :

                                      <Button>Submit</Button>
                                  }
                              </>
                          }
                      </div>
                  </form>
              </div>
          </div>
      </div>
  )
}
