import { templateRegistry } from './templateRegistry.js';
import { templateWall } from './templateWall.js';

export const templateHome = () => {
  document.getElementById('root').innerHTML = ` 

  <div class="flex-center">
  <div class="screen-home">
  <div class="flex-center">
      <h1 class="name">GIVING</h1>
      <img class="logoHome" src="assets/img/Group.png">
   </div>  
   <div class="flex-center"> 
      <input class="inputs-entrada" id="input-email" type="email" placeholder="Correo electrónico"></input>
      <input class="inputs-entrada" id="input-password" type="password" placeholder="Contraseña"></input>
   </div> 
   <div class="flex-center"> 
      <button class="btn-botones" id="btn-sign-in">Iniciar Sesión</button> 
      <button class="btn-botones" id="btn-sign-in-google">Ingresar con Google</button>
      <p>¿No tienes cuenta?</p>
      <button class="btn-botones" id="btn-registry">Regístrate</button>
      </div>    
   </div>
</div>

 `

 /*<div class="flex-center">
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
   <input id="input-email" type="email" placeholder="Correo electrónico"></input><br>
   <input id="input-password" type="password" placeholder="Contraseña"></input><br>
   <p id="wrong"></p>
 </div> 
   <button id="btn-create">Crear una cuenta</button>
   <button id="btn-back-home">Volver a Inicio</button>
 </div>
 </div>
 </div>*/



  document.getElementById('btn-registry').addEventListener('click', () => {
    templateRegistry();
    window.location.hash = '#/registry';
  })

  document.getElementById('btn-sign-in').addEventListener('click', () => {
    templateWall();
    window.location.hash = '#/wall';
  })
}
