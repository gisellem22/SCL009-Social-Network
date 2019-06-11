import { templateSignIn } from "./templateSignIn.js";
export const templateSignUp = () => {

    document.getElementById('root').innerHTML = `
    <h4>Registro de Usuario</h4>
    <input type="email" id="email" placeholder="Ingresa email">
    <input type="password" id="password" placeholder="Ingresa contraseña">
    <input type="button" id="signup" value="Enviar">
    
    `
    document.getElementById("signup").addEventListener("click", ()=>{
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    console.log(password);
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(()=>{
        templateSignIn();
        window.location.hash = '#/signin';
    })
    .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
        // ...
    })
});
};
