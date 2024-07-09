import { getJobs } from "./service/getAllJobs"

export default async function sitemap() {

  const allJobs = await getJobs()
    const jobs = allJobs?.map((job)=>{
        return {
            url : `https://be-consultancy-group.com/jobs/${job.id}`,
            lastModified : job.Modified_Time

        }
    })

  return [
    {
      url: 'https://be-consultancy-group.com/',
      lastModified: new Date(),
    },
    ...jobs

  ]
}