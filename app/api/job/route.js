import axios from "axios"

export async function POST(request) {

      const id = await request.json()
//   const response = await axios.post('https://accounts.zoho.com/oauth/v2/token?refresh_token=1000.348b75616f31942e26fb1f2f82625d66.e43cca258ab3050de46a1c7adafcbdb7&client_id=1000.WTB5Q7S5N9WK2WIT9T6TN3JHDGC90V&client_secret=3bb824233454bb3b66115084601306ee8dfad4f611&grant_type=refresh_token')
//       const token = await response
    const getJob = await axios.get('https://recruit.zoho.com/recruit/v2/Job_Openings/' + id.id, { headers: { 'Authorization': 'Zoho-oauthtoken ' + '1000.74e69d786525c3ee02e77095141ea07f.a8f9ba80d7a8f91f5f450ee83ef87ae4' } })
      const job = await getJob.data.data

    return new Response(JSON.stringify(job))
}