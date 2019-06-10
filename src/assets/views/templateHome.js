import { templateRegistry } from './templateRegistry.js';
import { templateWall } from './templateWall.js';

export const templateHome = () => {
  document.getElementById('root').innerHTML = `       
  
  <div class="screen-home">
      <h1 class="name">GIVING</h1>
      <img class="logoHome" src="assets/img/Group.png">
      <input id="input-email" type="email" placeholder="Correo electrónico"></input>
      <input id="input-password" type="password" placeholder="Contraseña"></input>
      <button id="btn-sign-in">Iniciar Sesión</button> 
      <button id="btn-sign-in-google">Ingresar con Google</button>
      <p>¿No tienes cuenta?</p>
      <button id="btn-registry">Regístrate</button>
   </div>


 `

  document.getElementById('btn-registry').addEventListener('click', () => {
    templateRegistry();
    window.location.hash = '#/registry';
  })

  /*document.getElementById('btn-sign-in').addEventListener('click', () => {
    templateWall();
    window.location.hash = '#/wall';
  })*/
}
