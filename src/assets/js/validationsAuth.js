//aqui importar las funciones de auth que voy a testear en auth.spect

export const registry = (email,password)  => {
    //console.log(email);
    //console.log(password);
    if(email === "" || password ==="" || password.length < 6){
    return false;
}else{
    return true;
}

};