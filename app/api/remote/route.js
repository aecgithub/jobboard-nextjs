// import axios from 'axios';

// export async function GET(request) {
//     const response = await axios.post('https://accounts.zoho.com/oauth/v2/token?refresh_token=1000.348b75616f31942e26fb1f2f82625d66.e43cca258ab3050de46a1c7adafcbdb7&client_id=1000.WTB5Q7S5N9WK2WIT9T6TN3JHDGC90V&client_secret=3bb824233454bb3b66115084601306ee8dfad4f611&grant_type=refresh_token')
//     const token = await response
//     const getJobs = await axios.get('https://recruit.zoho.com/recruit/v2/Job_Openings', { headers: { 'Authorization': 'Zoho-oauthtoken ' + token.data.access_token } })
//     const jobs = await getJobs

//     const remoteJobs = jobs.data.data.filter((data) =>{
//       if(data.Remote_Job == true){
//         return data;
//       }
//     })

//     return new Response(JSON.stringify(remoteJobs))
// }