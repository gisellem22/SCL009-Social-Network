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

  document.getElementById('btn-registry').addEventListener('click', () => {
    templateRegistry();
    window.location.hash = '#/registry';
  })

  document.getElementById('btn-sign-in').addEventListener('click', () => {
    templateWall();
    window.location.hash = '#/wall';
  })
}
