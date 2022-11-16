export default async function handler(req, res) {
    // res.setHeader(
    // 'Cache-Control',
    // 'public, s-maxage=10, stale-while-revalidate=59'
    // )
    // Fetch data from external API
    const data = await fetch(`https://rushhome.com/wp-json/wp/v2/posts`)
    const properties = await data.json()

    res.status(200).json({ properties: properties })
}