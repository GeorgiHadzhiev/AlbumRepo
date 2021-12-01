const baseUrl = 'http://localhost:3030'


async function login(email,password){

    let res = await fetch(`${baseUrl}/users/login`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({email, password})
    })  

    let jsonResult = await res.json();

    if(res.ok){

        return jsonResult;

    }
    else{

        throw jsonResult.message;

    }


}

async function logout(){

    fetch(`${baseUrl}/users/logout`)
    .then()

}

const authService = {

    login,
    logout,

}

export default authService;