import { fetchFubApi, fubApiBaseUrl } from "./fubFetchApi"

export default async function fubApiCall(leadObj){
    const payload = {url : `${fubApiBaseUrl}/events`, method : 'POST', data: leadObj}
    return await fetchFubApi(payload);    
}