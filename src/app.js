import { initRouter } from './route.js';
import { firebaseInit } from './assets/js/firebaseInit.js';

const init = () => {
  firebaseInit();
  initRouter();
  
}

window.addEventListener('load', init);

//unico archivo madre, este hace el llamdo a todo lo demas
//aca llama a route y a inicalizacion de firebase
//llama a initrouter pq es la primera que se ejecuta