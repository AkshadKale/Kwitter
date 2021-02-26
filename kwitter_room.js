var firebaseConfig = {
      apiKey: "AIzaSyCHm-tNFtN_k3X6jt37RojpA66tVXaeAyM",
      authDomain: "kwitter-room-eaa07.firebaseapp.com",
      databaseURL: "https://kwitter-room-eaa07-default-rtdb.firebaseio.com",
      projectId: "kwitter-room-eaa07",
      storageBucket: "kwitter-room-eaa07.appspot.com",
      messagingSenderId: "121122180813",
      appId: "1:121122180813:web:715c87a97949742937e384",
      measurementId: "G-5562PBCL7D"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "Welcome" + user_name + "!" ;
//ADD YOUR FIREBASE LINKS HERE
function addRoom(){
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
      purpose : "adding room name"
      });
      localStorage.setItem("room_name" , room_name);
      window.location="kwitter_page.html";

  
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      row = "<div class='room_name'  id="+Room_names+"  onclick='redirectToRoomName(this.id)'>#" + Room_names + "</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name)
{
      localStorage.setItem("room_name" , name);
      window.location = "kwitter_page.html";
}

function logout(){
 localStorage.removeItem("user_name");
 localStorage.removeItem("room_name");
 window.location="index.html";
}