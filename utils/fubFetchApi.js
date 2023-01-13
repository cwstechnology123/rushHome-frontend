export const fubApiBaseUrl = process.env.NEXT_PUBLIC_APIFUBURL;

export const fetchFubApi = async (payload) => {
    const data = payload && payload.data ? payload.data : '';
    let headers = {};
    let options = {};
    headers["Content-Type"] = "application/json";
    headers["Accept"] = "application/json";
    headers["Authorization"] = 'Basic ZmthXzBXQlV2emM0MnJpejJiNWltWFBVbHlMSG4ybkdJZE9POFk6';
    // headers["X-System"] = 'RushHome';
    // headers["X-System-Key"] = 'fe518a715e062c50d1a460ec78a2a4d7';

    options.method = payload.method;
    options.headers = headers;
    options.mode = 'cors'; // no-cors, *cors, same-origin
    options.cache = 'no-cache'; // *default, no-cache, reload, force-cache, only-if-cached
    payload.method == "POST" ? options.body =  JSON.stringify(data) : "";

    return await fetch(payload.url, options)
        .then(response => response.json())
        .then(response => {return {'status':true, 'message':response}})
        .catch(err => {console.error(err); return {'status':false, 'message':err.message}});
}