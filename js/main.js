// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDzoC5ny85WY-e3lSTmS_HpNPDnauDrgLw",
    authDomain: "dlgconsulting-5548f.firebaseapp.com",
    databaseURL: "https://dlgconsulting-5548f.firebaseio.com",
    projectId: "dlgconsulting-5548f",
    storageBucket: "dlgconsulting-5548f.appspot.com",
    messagingSenderId: "506145647686",
    appId: "1:506145647686:web:2f32e21dd43605fdba2e47",
    measurementId: "G-VCTNG0Z29F"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  
  //Reference messages collection step 5
  var messagesRef = firebase.database().ref('messages');
  
  //step 1 add event listener submit
  
  document.getElementById('contactForm').addEventListener('submit',
  submitForm);
  
  function submitForm(e) {
    e.preventDefault();
  
  
  //step 3 - get values
  var name = getInputVal('name');
  var email = getInputVal('email');
  var phone= getInputVal('phone');
  var message = getInputVal('message');
  //step 4 test console.log
  
  //step 7 call it
  saveMessage(name, email, phone, message);
  
  // step 8 alert
  document.querySelector('.alert').style.display = 'block';
  
  //step 9 hide alert
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  
  }, 3000);
  //step 10 get clear form data
  document.getElementById('contactForm').reset();
  }
  
  // step 2 - function to get form values
  function getInputVal(id) {
    return document.getElementById(id).value;
  
  }
  
  // step 6 save message to fire base
  function saveMessage(name, email, phone, message) {
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    email: email,
    phone: phone,
    message: message,
  
  });
  }
  