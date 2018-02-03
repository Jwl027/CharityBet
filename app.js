(function(){
	var config = {
    	apiKey: "AIzaSyBPUnQS_FdP70ras4xGGB20GCezMuy2_kY",
    	authDomain: "charitybet-c4eb6.firebaseapp.com",
    	databaseURL: "https://charitybet-c4eb6.firebaseio.com",
    	projectId: "charitybet-c4eb6",
    	storageBucket: "",
    	messagingSenderId: "545734531716"
  	};
  	firebase.initializeApp(config);

  	var txtEmail=document.getElementById('');
  	var txtPass=document.getElementById('');
  	var buttonSignUp=document.getElementById('');
  	var buttonLogin=document.getElementById('');

  	buttonLogin.addEventListener('click',e=>{
  		var auth = firebase.auth();
  		auth.signInWithEmailAndPassword(txtEmail.value,txtPass.value);
  	});

  	buttonLogin.addEventListener('click',e=>{
  		var auth = firebase.auth();
  		auth.signInWithEmailAndPassword(txtEmail.value,txtPass.value);
  	});
});