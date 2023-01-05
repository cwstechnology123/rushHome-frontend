import axios from "axios";

export const fubApiBaseUrl = process.env.NEXT_PUBLIC_APIFUBURL;

export const fetchFubApi = async (payload) => {
    const options = {
        method: payload.method,
        url: payload.url,
        headers: {
          accept: 'application/json',
          'content-type': 'application/json',
          authorization: 'Basic ZmthXzBXQlV2emM0MnJpejJiNWltWFBVbHlMSG4ybkdJZE9POFk6'
        },
        data: JSON.stringify(payload.data)
    };
     // headers: {
    //     "Accept": 'application/json',
    // 	'Content-Type': 'application/json',
    // 	"Authorization": 'Basic ZmthXzBXQlV2emM0MnJpejJiNWltWFBVbHlMSG4ybkdJZE9POFk6',
    //     "X-System": "AwesomeWebsiteBuilder",
    //     "X-System-Key": "560270f7914b5b4a5f4dc1793ebc2796"
    // },
      
    return await axios
        .request(options)
        .then(function (response) {
            //console.log(response)
            return {'status':true, 'message':response.data};
        })
        .catch(function (error) {
            console.error("Error",error.message);
            return {'status':false, 'message':error.message};
        });
};