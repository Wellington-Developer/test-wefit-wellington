const API_URL = "https://wefit-movies.vercel.app"

export function PRODUCTS_GET() {
    return {
        url: API_URL + '/api/movies',
    }
}