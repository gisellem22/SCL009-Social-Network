import { templateHome } from './templateHome.js';
import { registryUser } from './../js/firebaseAuth.js';
import { validationAuth } from './../js/validationAuth.js';
import { validationEmail } from './../js/validationAuth.js';

export const templateRegistry = () => {
  document.getElementById('root').innerHTML = `       
  <div class="flex-center">
  <div class="screen-sign-up">
  <div class="logo-name">
  <img class="logoRegistry" src="assets/img/Group.png">
  </div>
  </div>

  <div class="flex-center">
  <div class="registry-div">
  <div class="title-div">
    <h1 class="title-sign-up">Registro</h1>
  </div>
  <div class="inputs-div">
    <input class="inputs-entrada" id="input-email" type="email" placeholder="Correo electrónico"></input><br>
    <input class="inputs-entrada" id="input-password" type="password" placeholder="Contraseña"></input><br>
    <p id="wrong"></p>
  </div> 
    <button class="btn-botones" id="btn-create">Crear una cuenta</button><br>
    <button class="btn-botones" id="btn-back-home">Volver a Inicio</button>
  </div>
  </div>
  </div>

 `
  document.getElementById('btn-create').addEventListener('click', () => {
    let email = document.getElementById('input-email').value;
    let password = document.getElementById('input-password').value;
    // console.log(email);
    //console.log(password);

    let confirmRegistry = validationAuth(password);
    //console.log(confirmRegistry);
    let confirmEmail =  validationEmail(email);

    if (confirmRegistry) {
      registryUser(email, password)
    } else {
      document.getElementById('wrong').innerHTML = 'Contraseña debe tener mínimo 6 caracteres';
    }

    if (confirmEmail) {
      registryUser(email, password)
    } else {
      document.getElementById('wrong').innerHTML = 'Ingresa email válido';
    }

    /*templateHome();
    window.location.hash = '#/home';*/
  })

  document.getElementById('btn-back-home').addEventListener('click', () => {
    templateHome();
    window.location.hash = '#/home';
  })

}