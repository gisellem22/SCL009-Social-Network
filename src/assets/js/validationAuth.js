//aqui importar las funciones de auth que voy a testear en auth.spect

export const validationAuth = (email,password)  => {
    let regEx = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if(email === "" || regEx.test(email) === false|| password ==="" || password.length < 6){
    return false;
}else{
    return true;
}

};
