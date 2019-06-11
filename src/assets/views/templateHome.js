import { templateSignUp } from "./templateSignUp.js";

export const templateHome = () =>{
    console.log("hola from home")
    document.getElementById('root').innerHTML = `
    <h4>Benvenid@ a GIVING</h4>
    <input type="button" id="register" value="Registrarse" onclick="signUp()">
    `
document.getElementById("register").addEventListener("click", () =>{
    templateSignUp();
    window.location.hash = "#/signup";
})
}