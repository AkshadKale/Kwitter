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
//YOUR FIREBASE LINKS
user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function sent()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value= "";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
