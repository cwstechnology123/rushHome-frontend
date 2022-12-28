import axios from "axios";

export const fubApiBaseUrl = process.env.NEXT_PUBLIC_APIFUBURL;

export const fetchFubApi = async (payload) => {
    const options = {
        method: payload.method,
        url: payload.url,
        headers: {
            "Accept": 'application/json',
			'Content-Type': 'application/json',
			"Authorization": 'Basic ZmthXzBXQlV2emM0MnJpejJiNWltWFBVbHlMSG4ybkdJZE9POFk6',
            "X-System": "AwesomeWebsiteBuilder",
            "X-System-Key": "560270f7914b5b4a5f4dc1793ebc2796"
        },
        data: payload.data
    };
      
    return await axios
        .request(payload.url, options)
        .then(function (response) {
            //console.log(response)
            return response.data;
        })
        .catch(function (error) {
          //console.error(error);
        });
    // return await fetch(payload.url, options)
    //     .then(response => response.json())
    //     .then(returnData => {
    //       //console.log('returnData', returnData);
    //       return returnData
    //     })
    //     .catch((err) => {
    //       console.log(err)
    //       return null;
    //     });
};