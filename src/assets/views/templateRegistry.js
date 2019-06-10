import { templateHome } from './templateHome.js';
import { registryUser } from './../js/firebaseAuth.js';
import { registry } from './../js/validationsAuth.js';
//import { registry } from './validations.js';

export const templateRegistry = () => {
  document.getElementById('root').innerHTML = `       
  <section alt="root">
  <div class="screen-sign-up">
    <h1 class="title-sign-up">Registrarse</h1>
    <input id="input-email" type="email" placeholder="Correo electrónico"></input><br>
    <input id="input-password" type="password" placeholder="Contraseña"></input><br>
    <p id="wrong"></p>
    <button id="btn-create">Crear una cuenta</button>
    <button id="btn-back-home">Volver</button>
  </div>
</section>
 `
 document.getElementById('btn-create').addEventListener('click', () => {
  let email = document.getElementById('input-email').value;
  let password = document.getElementById('input-password').value;
 // console.log(email);
  //console.log(password);

  //registryUser(email,password);

 let confirmRegistry = registry(email,password);
 console.log(confirmRegistry);

 if(confirmRegistry === true){
   registryUser(email,password);
 }else{
  document.getElementById('wrong').innerHTML = 'Datos no válidos';
 }

 /* templateHome();
  window.location.hash = '#/home';*/
})

 /*document.getElementById('btn-create').addEventListener('click', () => {
 let email = document.getElementById('input-email').value;
 let password = document.getElementById('input-password').value;
 console.log(email);
 console.log(password);
 })*/
 /*if(email === true && password === true){
  registryUser(email,password);
 }
 if(email === false && passwrod === false){}
    document.getElementById('wrong').innerHTML = "No válido";
})*/

  document.getElementById('btn-back-home').addEventListener('click', () => {
    templateHome();
    window.location.hash = '#/home';
  })

}