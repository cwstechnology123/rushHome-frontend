export default async function handler(req, res) {
    // Fetch data from external API
    const data = await fetch(`https://rushhome.com/wp-json/wp/v2/posts/1`)
    const properties = await data.json()

    res.status(200).json({ properties: properties })
}