const baseUrl = 'http://localhost:3030/users'


async function login(email,password){

    let res = await fetch(`${baseUrl}/login`, {
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

    fetch(`${baseUrl}/logout`)
    .then()

}

const authService = {

    login,
    logout,

}

export default authService;