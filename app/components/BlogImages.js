'use client'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function BlogImages(props) {
    const [banner, setBanner] = useState()
    const blog = props?.data

    useEffect(() => {
        // const getBanner = axios.get(`https://blog.all-european-careers.com/wp-json/wp/v2/media/${blog?.featured_media}`)
        const getBanner = axios.get(`https://aec-nextjs.netlify.app/api/blogs/${blog?.featured_media}`)
        const banner = getBanner.then(function (image) {
            setBanner( image.data.source_url)
            console.log(image.data.source_url)
        })
    }, [])
  return (
    <a href={blog.link} target='_blank rounded-lg '>
        <div>
            <img src={banner} className='rounded-lg w-full h-full' />
        </div>
    </a>
  )
}
