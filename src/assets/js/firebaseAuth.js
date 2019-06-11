//debe ser un const registro, que tenga que ver con fb
//aqui van las funciones exportadas 

export const registryUser = (email,password) => {
  //console.log(email);
  //console.log(password);
//la funcion de firebase para crear usuario
firebase.auth().createUserWithEmailAndPassword(email, password)
.catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
  //console.log(errorCode);
  //console.log(errorMessage);
});

}
