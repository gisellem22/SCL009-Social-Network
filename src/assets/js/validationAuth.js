//aqui importar las funciones de auth que voy a testear en auth.spect

export const validationAuth = (email,password)  => {
    let regEx = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if(email === "" || regEx.test(email) === false){
    document.getElementById('wrong').innerHTML = 'Ingresa email válido';   
    }else if (password ==="" || password.length < 6){
    document.getElementById('wrong').innerHTML = 'Contraseña debe tener mínimo 6 caracteres';  
}else{
    return true;
}

};
