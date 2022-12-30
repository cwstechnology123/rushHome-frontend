import { apiBaseUrl, fetchApi } from "../../utils/fetchApi";

export default async function handler(req, res) {
    // const { slug } = req.query;
    // console.log(res)
    let sendData = req.body;
    // console.log(sendData)
    // res.status(201).json(sendData)
    try {
        const payload = {url: `${apiBaseUrl}/properties/search`, method: 'POST', data: JSON.parse(sendData)}
        const result = await fetchApi(payload)
        res.status(200).json({ result })
    } catch (err) {
        res.status(500).json({ error: 'failed to load data' })
    }
}

export const config = {
    runtime: 'edge',
    api: {
        bodyParser: false,
        responseLimit: false,
    },
};