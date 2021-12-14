function firstNameChecker(firstNameArray,errorState){

    if(firstNameArray.length <= 0){

        errorState(formErrors => ({...formErrors, firstName: `First Name cannot be blank`}))

    }
    else if(firstNameArray.length > 20 || firstNameArray.length < 2){


        errorState(formErrors => ({...formErrors, firstName: `First Name cannot be more than 20 characters or less than 2 characters`}))

    }
    else{

        errorState(formErrors => ({...formErrors, firstName: null}))

    }

}

function lastNameChecker(lastNameArray,errorState){

    if(lastNameArray.length <= 0){

        errorState(formErrors => ({...formErrors, lastName: `Last Name cannot be blank`}))

    }
    else if(lastNameArray.length > 20 || lastNameArray.length < 2){


        errorState(formErrors => ({...formErrors, lastName: `Last Name cannot be more than 20 characters or less than 2 characters`}))

    }
    else{

        errorState(formErrors => ({...formErrors, lastName: null}))

    }

}

function emailChecker(emailArray,errorState){

    let emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g
     
    if(emailArray.length <= 0){

        errorState(formErrors => ({...formErrors, email: `Email cannot be blank`}))

    }
    else if(emailArray.length > 40){

        errorState(formErrors => ({...formErrors, email: `Email cannot be more than 40 characters`}))

    }
    else if(!emailRegex.test(emailArray)){

        errorState(formErrors => ({...formErrors, email: `Email must be valid`}))

    }
    else{

        errorState(formErrors => ({...formErrors, email: null}))

    }

}

function passwordChecker(passwordArray,errorState){

    if(passwordArray.length <= 0){

        errorState(formErrors => ({...formErrors, password: `Password cannot be blank`}))

    }
    else if(passwordArray.length < 6 || passwordArray.length > 30){

        errorState(formErrors => ({...formErrors, password: `Password cannot be less than 6 characters or more than 30 characters`}))

    }
    else{

        errorState(formErrors => ({...formErrors, password: null}))

    }

}

function repeatPasswordChecker(repeatPasswordArray,errorState,ogPassword){


    if(repeatPasswordArray !== ogPassword){

        errorState(formErrors => ({...formErrors, repeatPassword: `Password and Repeat Password must match`}))

    }
    else{

        errorState(formErrors => ({...formErrors, repeatPassword: null}))

    }

}

function formAlbumChecker(albumDataArray,formName,errorState){

    if(albumDataArray.length <= 0){

        errorState(formErrors => ({...formErrors, [formName]: `${formName} cannot be blank`}))

    }
    else{

        errorState(formErrors => ({...formErrors, [formName]: null}))

    }

}

const errorHelper ={

    firstNameChecker,
    lastNameChecker,
    emailChecker,
    passwordChecker,
    repeatPasswordChecker,
    formAlbumChecker,


}


export default errorHelper;