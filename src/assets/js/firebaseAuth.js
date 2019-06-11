import { templateHome } from './../views/templateHome.js';

export const registryUser = (email,password) => {
  //console.log(email);
  //console.log(password);
//la funcion de firebase para crear usuario

firebase.auth().createUserWithEmailAndPassword(email, password)
.then(()=>{
  templateHome();
  window.location.hash = '#/home';
})
.catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
  console.log(errorCode);
  console.log(errorMessage);
});

}

