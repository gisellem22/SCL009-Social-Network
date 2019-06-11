//debe ser un const registro, que tenga que ver con fb
//aqui van las funciones exportadas 

export const registryUser = (email,password) => {
  //console.log(email);
  //console.log(password);
//la funcion de firebase para crear usuario
firebase.auth().createUserWithEmailAndPassword(email, password)
.then(function(){
  emailVerification()

})

.catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
  //console.log(errorCode);
  //console.log(errorMessage);
});

}

//función para enviar correo de confirmación
function emailVerification(){
let user = firebase.auth().currentUser;

user.sendEmailVerification().then(function() {
  //si sendemail resulta, se ejecuta el then, de lo contrario se ejecuta catch
  // Email sent.
  console.log('enviando correo');
}).catch(function(error) {
  // An error happened.
  console.log(error);
});
}

//función del observador
/*function observer(){
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      console.log('existe usuario activo')
      // User is signed in.
      var displayName = user.displayName;
      var email = user.email;
      var emailVerified = user.emailVerified;
      var photoURL = user.photoURL;
      var isAnonymous = user.isAnonymous;
      var uid = user.uid;
      var providerData = user.providerData;
      // ...
    } else {
      // User is signed out.
      console.log('no existe usuario activo')
      // ...
    }
  });

}*/
