import router from './routes';
/* Lógica que carga */
window.addEventListener('load', router);
/* Lógica para cuando hay un cambio en el hash */
window.addEventListener('hashchange', router);