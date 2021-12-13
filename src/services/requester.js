export const request = async (method,url,data) => {

    let result = null;

    if(method === 'GET'){

        result = fetch(url);

    }
    else{

        let token = getToken();

        result = fetch(url, {

            method,
            headers: {

                'content-type': 'application/json',
                'X-Authorization': token,

            },
            body: JSON.stringify(data),

        });

    }

    return result.then(responseHandler)

}

async function responseHandler(res){

    let jsonData = await res.json();

    if(res.ok){

        return Object.values(jsonData);

    }
    else{

        throw jsonData.message

    }

}

function getToken(){

    try{

        let user = localStorage.getItem('user');

        if(!user){

            const errorMEssage = {message: 'You must be logged in for this action'}
            throw errorMEssage;

        }
        let userData = JSON.parse(user)

        return userData.accessToken;

    }
    catch(err){

        console.log(err)

    }

}

export const get = request.bind(null, 'GET');
export const put = request.bind(null, 'PUT');