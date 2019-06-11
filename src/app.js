import { initRoute } from './route.js';
import { firebaseInit } from './assets/js/firebaseinit.js';

const init = () => {
initRoute();
firebaseInit();
};

window.addEventListener('load', init);