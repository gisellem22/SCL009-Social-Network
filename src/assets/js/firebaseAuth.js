import { templateHome } from './../views/templateHome.js';

export const registryUser = (email,password) => {
  //console.log(email);
  //console.log(password);
//la funcion de firebase para crear usuario

firebase.auth().createUserWithEmailAndPassword(email, password)
.then(()=>{
  emailVerification()
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
  if (errorCode === "auth/email-already-in-use"){
    document.getElementById('wrong').innerHTML = 'Correo ya está siendo utilizado';  
  }
});

}
//función para enviar correo de confirmación
function emailVerification(){
let user = firebase.auth().currentUser;

user.sendEmailVerification().then(function() {
 //si sendemail resulta, se ejecuta el then, de lo contrario se ejecuta catch
 // Email sent.
 Swal.fire('Un mensaje de confirmación fue enviado a tu correo');
 console.log('enviando correo');
}).catch(function(error) {
 // An error happened.
 console.log(error);
});
}

// iniciar sesión con google
export const authGoogle = () => {
  let provider = new firebase.auth.GoogleAuthProvider();

  firebase.auth().signInWithPopup(provider)
  .then(function(result) {
    // This gives you a Google Access Token. You can use it to access the Google API.
    let token = result.credential.accessToken;
    // The signed-in user info.
    let user = result.user;
    // ...
  
  }).catch(function(error) {
    // Handle Errors here.
    let errorCode = error.code;
    let errorMessage = error.message;
    // The email of the user's account used.
    let email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    let credential = error.credential;
    // ...
  });
  

}