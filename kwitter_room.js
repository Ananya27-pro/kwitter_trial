
 // Your web app's Firebase configuration
 const firebaseConfig = {
  apiKey: "AIzaSyCJY8XJu2jLQmNSIb4eBHfJV6LJl-XT03I",
  authDomain: "database-ad54f.firebaseapp.com",
  databaseURL: "https://database-ad54f-default-rtdb.firebaseio.com",
  projectId: "database-ad54f",
  storageBucket: "database-ad54f.appspot.com",
  messagingSenderId: "999191762961",
  appId: "1:999191762961:web:cf7a3db71338f43fe3b9b0",
  measurementId: "G-GS15N59XW5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
    user_name=localStorage.getItem("user_name")
    document.getElementById("user_name").innerHTML="Welcome "+ user_name;
function addRoom(){
  room_name=document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
    purpose:"adding room name"
  });
  localStorage.setItem("room_name",room_name);
  window.location="kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room Name-"+Room_names);
row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
document.getElementById("output").innerHTML+=row;

      //End code
      });});}
getData();
function redirectToRoomName(name){
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location="kwitter_page.html";
}
