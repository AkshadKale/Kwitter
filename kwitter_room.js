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
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
