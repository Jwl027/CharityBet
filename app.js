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
  	console.log('xd');
  	var txtEmail=document.getElementById('txtEmail');
  	var txtPass=document.getElementById('txtPass');
  	var buttonSignUp=document.getElementById('btnSignUp');
  	var buttonLogin=document.getElementById('btnLogin');
  	var buttonLogOut=document.getElementById('btnLogOut');

  	buttonLogin.addEventListener('click',e=>{
  		console.log('lel');
  		var auth = firebase.auth();
  		var promise =auth.signInWithEmailAndPassword(txtEmail.value,txtPass.value);
  		promise.catch(e=> console.log(e.message));
  	});

  	buttonSignUp.addEventListener('click',e=>{
  		var auth = firebase.auth();
  		var promise = auth.createUserWithEmailAndPassword(txtEmail.value,txtPass.value);
  		console.log(txtEmail.value);
  		console.log(txtPass.value);
  		promise.catch(e=> console.log(e.message));
  	});

  	buttonLogOut.addEventListener('click',e=>{
  		var auth = firebase.auth();
  		firebase.auth().signOut();
  	});


  	firebase.auth().onAuthStateChanged(firebaseUser=>{
  		if (firebaseUser) {
  			console.log(firebaseUser);
  		}
  		else{
  			console.log('not logged in');
  		}

  	});



}());