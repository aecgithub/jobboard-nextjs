

export async function getJobs(){
    try {
      const response = await fetch("https://bec-nextjs.netlify.app/api/all", { next: { revalidate: 300 } })
        const data = await response.json()
        // console.log(data)
        return data 
    } catch (error) {
      console.log('get all jobs error', error)
      return false
    }

}




// export async function getCachedJobs() {
//   try {
//     const response = await fetch("https://bec-new.netlify.app/api/all")
//     const data = await response.json()
//     return data
//   } catch (error) {
//     console.log('get job error', error)
//     return false
//   }

// }
// export async function jobsByType(value){
//     const response = await fetch("https://bec-new.netlify.app/api/all")
//     const data = await response.json()

//     const filterJobs = data.filter((data) =>{
//       if(data.Tags == value){
//         return data;
//       }
//     })
//     const jobs = filterJobs?.slice(0, 5)
// 	return jobs
// }

export async function getBlogs(){
  try{
    const response = await fetch('https://bec-new.netlify.app/api/blogs')
    const data = await response.json()
    console.log('posts', data)
    return data
  } catch(error) {
    console.log('get post error', error)
  }
}