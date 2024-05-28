import axios from "axios";

export async function GET(request, { params }) {
    const { id } = params;
    const response = axios.get(`https://blog.all-european-careers.com/wp-json/wp/v2/media/${id}`)
    const banner = await response
    return new Response(JSON.stringify(banner.data))
}