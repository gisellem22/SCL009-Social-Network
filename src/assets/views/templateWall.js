import { templateHome } from './templateHome.js';

export const templateWall = () => {
  document.getElementById('root').innerHTML = `       
 
  <div class="wall">
    <h1 class="hello-wall">Esto es el muro</h1>
    <h1 class="hello-wall">Publica aquí</h1>
    <button class="btn-botones" id="btn-close">Cerrar sesión</button>
  </div>

 `

  document.getElementById('btn-close').addEventListener('click', () => {
    templateHome();
    window.location.hash = '#/home';
  })

}