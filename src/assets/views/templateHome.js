import { templateRegistry } from './templateRegistry.js';
import { templateWall } from './templateWall.js';

export const templateHome = () => {
  document.getElementById('root').innerHTML = `       
  <section alt="root">
  <div class="screen-home">
      <button id="btn-registry">Registrarse</button> 
      <h1>GIVING</h1>
      <button id="btn-sign-in-google">Ingresar con Google</button>
      <div class="line-home"></div>
      <input id="input-email-home" type="email" placeholder="Correo electrónico"></input>
      <input id="input-password-home" type="password" placeholder="Contraseña"></input>
      <button id="btn-sign-in">Iniciar Sesión</button>  
  </div>
</section>

 `

  document.getElementById('btn-registry').addEventListener('click', () => {
    templateRegistry();
    window.location.hash = '#/registry';
  })

  document.getElementById('btn-sign-in').addEventListener('click', () => {
    templateWall();
    window.location.hash = '#/wall';
  })
}
