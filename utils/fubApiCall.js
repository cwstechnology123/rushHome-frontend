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

export async function getAgentFubDetails(email) {
    // const options = {
    //     method: 'GET',
    //     url: 'https://api.followupboss.com/v1/users?limit=10&offset=0&includeDeleted=false',
    //     headers: {
    //       accept: 'application/json',
    //       authorization: 'Basic ZmthXzBXQlV2emM0MnJpejJiNWltWFBVbHlMSG4ybkdJZE9POFk6'
    //     }
    //   };url: 'https://api.followupboss.com/v1/users?limit=10&offset=0&email=noreply%40gmail.com&includeDeleted=false',

    return await fetchFubApi({url : `${fubApiBaseUrl}/users?limit=1&offset=0&email=${email}&includeDeleted=false`, method : 'GET'});  
}