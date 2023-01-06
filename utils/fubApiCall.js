import { fetchFubApi, fubApiBaseUrl } from "./fubFetchApi"

export async function sendFubLeads(leadObj){
    return await fetchFubApi({url : `${fubApiBaseUrl}/events`, method : 'POST', data: leadObj});
}

export async function checkClientHasFub(email){
    return await fetchFubApi({url : `${fubApiBaseUrl}/people?sort=created&limit=1&offset=0&email=${email}&includeTrash=true&includeUnclaimed=true`, method : 'GET'});  

    // RESPOND:==>
    // {
    //     status: false/true,
    //     message: errorMessage / people[{
    //         id: --,
    //         firstName: ---,
    //         lastName: ---
    //     }]
    // }
    // to get ID, use: res.message.people[0].id;
}