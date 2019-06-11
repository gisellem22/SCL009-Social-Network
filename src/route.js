//import todas las vistas
//el orden da lo mismo

import { templateHome } from './assets/views/templateHome.js';
import { templateRegistry } from './assets/views/templateRegistry.js';
import { templateWall } from './assets/views/templateWall.js';


const changeRoute = (hash) => {
  if (hash === '#/home' || hash === '#/registry' || hash === '#/wall' || hash === '' || hash === '#/' || hash === '/#') {
    return showTemplate(hash)
  }
  return showTemplate(hash)
}

// segunda función showTemplate(hash)

const showTemplate = (hash) => {
  // #/about
  const router = hash.substring(2); // home about project
  const containerRoot = document.getElementById('root');
  containerRoot.innerHTML = '';

  switch (router) {
    case 'home':
      templateHome();
      break;
    case 'registry':
      templateRegistry();
      break;
    case 'wall':
      templateWall();
      break;
    case '':
      templateHome();
      break;
    default:
      containerRoot.innerHTML = `<h1>Error 404</h1>`
  }
}
 //esta funcion es la primera que se ejecuta, reconoce los cambios del hash,
 //cuando carga y si es que hay cualquier cambio en ek navegador, escibir en la barra del navegador
 //cada vez que encuntra un cambio lo pasa a changeroute
export const initRouter = () => {
  // cuando la ventana se carga saca el hash y se lo pasa a changeRoute
  window.addEventListener('load', changeRoute(window.location.hash));

  // si encuentra un cambio en el hash lo vuelve a sacar y pasar como parámetro a changeRoute
 
  if ('onhashchange' in window) {
    window.onhashchange = () => {
      changeRoute(window.location.hash);
    }
  }
}