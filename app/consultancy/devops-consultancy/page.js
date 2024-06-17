import React from 'react'

export const metadata = {
  title: "DevOps Staffing Solutions Worldwide | DevOps Jobs | Worldwide | Part/Full-time",
  description: "Top-tier DevOps Consultancy/staffing solutions, recruitment remote and across Europe, Africa, Asia and the USA. Hire staff or get hired, contractor/full-time. DevOps jobs offered.",
}

export default function page() {
  const technology = "DevOps"
  return (
    <div className='flex justify-center mb-10'>
      <div className='lg:w-4/5 w-full'>
        <div className='flex justify-center py-6 text-center'>
          <h1 className='text-3xl'>{technology} Solutions</h1>
        </div>
        <div className='flex gap-5 py-5 flex-col lg:flex-row'>
          <div className='lg:w-1/2 w-full flex flex-col gap-2'>
            <p>Comprehensive {technology} Consultancy, where we source talent for leading international institutions and organizations across the globe. </p>
            <p>Pre-screened, top-tier {technology} consultants, developers, engineers and architects.</p>
            <p>You can rely on our expert staffing consultants to provide dedicated {technology} expertise on permanent or contingent agreements for your development projects.</p>
            <p>As an established {technology} Consultancy for over a decade, we locate and source talent and have access to a diverse pool of talent.</p>
            <p>BE Consultancy is a global company and our services now extend to different regions including but not limited to Asia Pacific, Europe, North and South America, Australia, and the Middle East.</p>
          </div>
          <div className='lg:w-1/2 w-full flex justify-center'>
            <img src='/images/recruitment/bigdata.jpg' className='rounded-lg'/>
          </div>
        </div>

      <div className='flex flex-col gap-4 py-5 border-t'>
          <h4 className='text-2xl '>{technology} Jobs in Europe and Asia (Asia Pacific)</h4>
          <p>We specialize in providing recruitment services for top clients across Europe, Asia, and around the globe. We provide comprehensive career guidance and consultancy services for candidates looking for {technology} jobs with different levels of work experience. We frequently post openings for top {technology} developer jobs for full-time employees and freelancers. Perks are provided for positions that require relocation with incentives and assistance to help candidates settle down before commencing employment.</p>
          <p>Wages are provided in line with skills and experience and, more importantly, allow candidates to broaden their horizons. We ensure that our clients give candidates a clear and rewarding career path in addition to excellent remuneration. The organizations we recruit for nurture creativity by encouraging research, learning, and professional development. If you’ve got a new idea, a unique style of development, we encourage that as we understand the value of keeping abreast of industry trends in the evolving world of software development.</p>
      </div>
      </div>

    </div>
  )
}
