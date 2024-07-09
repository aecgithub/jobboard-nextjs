import React from 'react'
import { Badge } from '@/components/ui/badge'
import { DotFilledIcon, DotIcon, ExternalLinkIcon, PinBottomIcon } from '@radix-ui/react-icons'
import { MapPin } from 'lucide-react'
import { Button } from '@/components/ui/button'
async function getJobDescription(props) {
    try {
        const id = props.params.id
        return await (await fetch('https://aec-new.netlify.app/api/job', {
            method: 'POST',
            body: JSON.stringify({ id: id })
        })).json();
    } catch (error) {
        console.log('fetch job description error', error)
    }
}
export async function generateMetadata(props) {
    const singleJob = await getJobDescription(props)
    const job = singleJob[0]
    return {
        title: job.Job_Opening_Name,
        description: job.Job_Sum_up,
    };

}
export default async function page(props) {
    const singleJob = await getJobDescription(props)
    const job = singleJob[0]

  return (
    <>
          <head>
              {job?.Remote_Job ?
                  <script type="application/ld+json">
                      {`{
                            "@context": "https://schema.org/",
                            "@type": "JobPosting",
                            "title": "${job.Job_Opening_Name}",
                            "description": "${job.Job_Sum_up}",
                            "hiringOrganization": {
                                "@type" : "Organization",
                                "name" : "All European Careers",
                                "sameAs" : "https://all-european-careers.com",
                                "logo" : "https://all-european-careers.com/images/logo_mini.png"
                            },
                            "datePosted": "${job.Date_Opened}T00:00",
                            "validThrough": "2023-012-18T00:00",
                            "employmentType": "${job.Job_Type}",
                            "applicantLocationRequirements": [{
                                    "@type": "Country",
                                    "name": "USA"
                                },{
                                    "@type": "Country",
                                    "name": "India"
                                }],
                            "jobLocationType": "TELECOMMUTE"
                        }`}
                  </script>
                  :
                  <script type="application/ld+json">
                      {`{
                            "@context" : "https://schema.org/",
                            "@type" : "JobPosting",
                            "title" : "${job.Job_Opening_Name}",
                            "description" : "${job.Job_Sum_up}",
                            "identifier": {
                                "@type": "PropertyValue",
                                "name": "All European Careers",
                                "value": "ae5527b68b77cad20e-2"
                            },
                            "datePosted" : "${job.Date_Opened}T00:00",
                            "validThrough" : "2023-012-18T00:00",
                            "applicantLocationRequirements": {
                                "@type": "Country",
                                "name": "${job.Country}"
                            },
                            "jobLocationType": "TELECOMMUTE",
                            "employmentType": "${job.Job_Type}",
                            "hiringOrganization" : {
                                "@type" : "Organization",
                                "name" : "All European Careers",
                                "sameAs" : "https://all-european-careers.com",
                                "logo" : "https://all-european-careers.com/images/logo_mini.png"
                            }

                            }`}
                  </script>
              }
          </head>
    <div className='flex justify-center py-10'>

        <div className='md:w-4/5 w-full '> 
            <h1 className='text-2xl text-center'> 
            {job?.Job_Opening_Name}
            </h1> 
            <div className='flex justify-between py-5 border-b mb-10'>
                  <div className='flex gap-1 items-center '>
                      <Badge className="bg-blue-500 text-white hover:bg-blue-500">{job.Job_Type}</Badge>
                      {job.Remote_Job === true ? <Badge className="bg-red-500 text-white hover:bg-red-500">Remote</Badge> : null}

                      {job.Remote_Job === true ?
                          null
                          :
                          <div className='flex items-center'>
                              <div><DotFilledIcon /></div>
                              <div className='flex gap-2 items-center justify-center text-sm' >
                                  <MapPin strokeWidth={1} className='w-5 h-5' />
                                  <span className='hidden md:flex'>{job.City},</span> {job.Country}
                              </div>
                          </div>
                      }
                  </div>
              <div className=''>
                  <Button asChild>
                      <a href={job.Url}>Apply Now</a>
                  </Button>
              </div>
            </div>
            <div className=''>
                  <div dangerouslySetInnerHTML={{ __html: job?.Job_Description }}></div>

            </div>
            <div className='flex justify-center'>
                <Button asChild>
                    <a href={job.Url}>Apply Now</a>
                </Button>
            </div>
        </div>
    </div>
    </>
  )
}
