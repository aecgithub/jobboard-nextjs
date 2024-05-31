import { getJobs } from "./service/getAllJobs"

export default async function sitemap() {

  const allJobs = await getJobs()
    const jobs = allJobs?.map((job)=>{
        return {
            url : `https://all-european-careers.com/jobs/${job.id}`,
            lastModified : job.Modified_Time

        }
    })

  return [
    {
      url: 'https://all-european-careers.com/',
      lastModified: new Date(),
    },
    ...jobs

  ]
}