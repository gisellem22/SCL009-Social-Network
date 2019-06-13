
export const validationAuth = (password) => {
    if (password === "" || password.length < 6) {
        return false;
    } else {
        return true;
    }

}

export const validationEmail = (email) => {
    let regEx = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (email === "" || regEx.test(email) === false) {
        return false;
    } else {
        return true;
    }
}