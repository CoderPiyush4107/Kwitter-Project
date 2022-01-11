
const firebaseConfig = {
    apiKey: "AIzaSyAh1VSGAzyeY_gglhg2hiF6Z_usV5ZaeUk",
    authDomain: "class94project.firebaseapp.com",
    databaseURL: "https://class94project-default-rtdb.firebaseio.com",
    projectId: "class94project",
    storageBucket: "class94project.appspot.com",
    messagingSenderId: "940933196889",
    appId: "1:940933196889:web:947ab472e656a95bc11548"
  };
  
  firebase.initializeApp(firebaseConfig);
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
function addUser() {
    user_name= document.getElementById("user_name").value;
    localStorage.setItem("user_name",user_name);
     window.location = "kwitter_room.html"
}

