export const apiBaseUrl = process.env.NEXT_PUBLIC_APIBASEURL;

export const fetchApi = async (payload) => {
  return await fetch(payload.url, { 
      method: payload.method,
      headers: {
        "Content-Type": "application/json",
        "x-api-key": process.env.NEXT_PUBLIC_RUSHHOME_API_KEY,
      },
      mode: 'cors' 
    })
    .then((response) => {
      //console.log('response', response);
      let jsonRes = response.json();
      return jsonRes
    })
    .catch((err) => {
      console.log(err)
      return null;
    });
};
