import axios from "axios"

export async function GET(){
    const response = await axios.get('https://blog.all-european-careers.com/wp-json/wp/v2/posts')
    const blogs = await response.data
    return new Response(JSON.stringify(blogs))
}