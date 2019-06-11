import { templateHome } from './templateHome.js';
import { registryUser } from './../js/firebaseAuth.js';
import { validationAuth } from './../js/validationsAuth.js';

export const templateRegistry = () => {
  document.getElementById('root').innerHTML = `       
  
  <div class="screen-sign-up">
  <div class="logo-name">
  <img class="logoRegistry" src="assets/img/Group.png">
  </div>
  <div class="registry-div">
    <h1 class="title-sign-up">Registro</h1>
    <input id="input-email" type="email" placeholder="Correo electrónico"></input><br>
    <input id="input-password" type="password" placeholder="Contraseña"></input><br>
    <p id="wrong"></p>
    <button id="btn-create">Crear una cuenta</button>
    <button id="btn-back-home">Volver a Inicio</button>
  </div>
  </div>

 `
 document.getElementById('btn-create').addEventListener('click', () => {
  let email = document.getElementById('input-email').value;
  let password = document.getElementById('input-password').value;
 // console.log(email);
  //console.log(password);

  //registryUser(email,password);

 let confirmRegistry = validationAuth(email,password);
 console.log(confirmRegistry);

 if(confirmRegistry === true){
  Swal.fire('Estás registrado.Te hemos enviado un correo de confirmación')
   registryUser(email,password);
 }else{
  document.getElementById('wrong').innerHTML = 'Datos no válidos';
 }

  /*templateHome();
  window.location.hash = '#/home';*/
})

  document.getElementById('btn-back-home').addEventListener('click', () => {
    templateHome();
    window.location.hash = '#/home';
  })

}