import { apiBaseUrl, fetchApi } from "../../../utils/fetchApi";

export default async function handler(req, res) {
    const query = req.query;
    let sendData = {}
    // res.status(201).json({query})
    const lastIndexVal = query.slug.substring(query.slug.lastIndexOf('-') + 1);
    if(!isNaN(lastIndexVal)){
        sendData = {
            postalCode : lastIndexVal,
            page_limit: 100
        }
    }
    else{
        const stateOrProvince = query.slug.substring(query.slug.lastIndexOf('-') + 1);
        const searchKey = query.slug.substring(0, query.slug.lastIndexOf("-"));
        sendData = {
            stateOrProvince : stateOrProvince,
            //search_key : searchKey,
            page_limit: 2500
        }
    }
   
    
    try {
        const payload = {url: `${apiBaseUrl}/properties/search`, method: 'POST', data: sendData}
        const result = await fetchApi(payload)
        res.status(200).json({ result })
    } catch (err) {
        res.status(500).json({ error: 'failed to load data' })
    }
}

export const config = {
    runtime: 'nodejs',
    api: {
        responseLimit: false,
        externalResolver: true,
    },
};