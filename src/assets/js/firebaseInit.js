export const firebaseInit = () =>{

    var firebaseConfig = {
        apiKey: "AIzaSyAxQ3uu2KPOB-dLJmxUA7D7C9SjA2zs19w",
        authDomain: "scl009-social-network-cgc.firebaseapp.com",
        databaseURL: "https://scl009-social-network-cgc.firebaseio.com",
        projectId: "scl009-social-network-cgc",
        storageBucket: "scl009-social-network-cgc.appspot.com",
        messagingSenderId: "344793930814",
        appId: "1:344793930814:web:b8a6a4320387f922"
      };
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
};