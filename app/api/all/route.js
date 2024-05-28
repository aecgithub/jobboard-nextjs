import axios from 'axios';

export async function GET(request) {

    const response = await axios.post('https://accounts.zoho.com/oauth/v2/token?refresh_token=1000.348b75616f31942e26fb1f2f82625d66.e43cca258ab3050de46a1c7adafcbdb7&client_id=1000.WTB5Q7S5N9WK2WIT9T6TN3JHDGC90V&client_secret=3bb824233454bb3b66115084601306ee8dfad4f611&grant_type=refresh_token')
    const token = await response.data.access_token
    const getJobs = await axios.get('https://recruit.zoho.com/recruit/v2/Job_Openings', { headers: { 'Authorization': 'Zoho-oauthtoken ' + token } })
    const jobs = await getJobs.data.data

    
    // filter BEC jobs
    const becJobs = jobs.filter((data) => {
        if (data.Department_Name.id == 609729000004595026) {
            return data
        }
    })
    // filter BEC jobs
    // filter active jobs
    const activeJobs = becJobs.filter((data)=>{
      if(data.Job_Opening_Status != "Inactive"){
        return data
      }
    })
    // filter active jobs

    // Department_Name.id: 609729000004595026

  // filter publish jobs
  const publishedJobs = activeJobs.filter((data) => {
    if (data.Publish === true) {
      return data
    }
  })
  // filter publish jobs

    // filter featured job
  const featuredJobs = publishedJobs.filter((data) =>{
      if(data.Featured == true){
        return data;
      }
    })
    // filter featured job

    // filter non featured jobs 
  const nonFeaturedJobs = publishedJobs.filter((data) =>{
      if(data.Featured != true){
        return data;
      }
    })
    // filter non featured jobs 

    // merge featured jobs and non featured jobs
    const allJobs = featuredJobs.concat(nonFeaturedJobs)

    // return data as JSON with status:200
    return new Response(JSON.stringify(allJobs))
}



// {
//   access_token: '1000.218ca443d7c8590b2783e39f2cbbe946.54575d57b034c3fc471ccb7d1a8696ff',
//     api_domain: 'https://www.zohoapis.com',
//       token_type: 'Bearer',
//         expires_in: 3600
// }