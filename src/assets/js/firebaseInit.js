export const firebaseInit = () => {

  // Your web app's Firebase configuration
  let firebaseConfig = {
    apiKey: "AIzaSyAxQ3uu2KPOB-dLJmxUA7D7C9SjA2zs19w",
    authDomain: "scl009-social-network-cgc.firebaseapp.com",
    databaseURL: "https://scl009-social-network-cgc.firebaseio.com",
    projectId: "scl009-social-network-cgc",
    storageBucket: "scl009-social-network-cgc.appspot.com",
    messagingSenderId: "344793930814",
    appId: "1:344793930814:web:3196f64137b7e1bc"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  };
