
import React from 'react'
import axios from 'axios'
import BlogContent from './BlogContent';
import { Button } from '@/components/ui/button';
import { ExternalLinkIcon } from '@radix-ui/react-icons';
import { getBlogs } from '../service/getAllJobs';


export default async function Blogs() {

  let blogs = []
    try {
      blogs = await getBlogs()
    } catch (error) {
      console.log(error)
    }
    console.log(blogs)
  return (
    <div className='py-10 '>
      <div className='flex justify-center py-5'>
        <div className='w-3/4 text-center  flex flex-col items-center gap-3'>
          <h1 className='text-xl'>Enhance your knowledge by checking out our latest blog posts</h1>
        </div>
      </div>
      <>
      <BlogContent blogs={blogs}/>
        <div className='flex justify-center py-5'>
          <Button className="flex justify-center gap-2 items-center" asChild>
            <a href='https://blog.all-european-careers.com/'>Read more Blogs <ExternalLinkIcon/></a>
          </Button>
        </div>
      </>
    </div>
  )
}
