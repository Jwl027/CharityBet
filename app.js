

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

  	var user = firebase.auth().currentUser;
  	console.log(user);
    firebase.database().ref().child('users').child("xd").set('ds');

  	//Login Stuff!
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
      
      
      //var backupEmail =document.getElementById('regEmail').value;
      //var backupPass = document.getElementById().value;
        		var promise = auth.createUserWithEmailAndPassword(txtEmail.value,txtPass.value).then(function(user){
              console.log('SIGNING');
              var adaptEmail = txtEmail.value.substring(0,txtEmail.value.length-4);
              console.log(adaptEmail);
              //firebase.database().ref().child('users').child(adaptEmail).set('ds');
              //firebase.database().ref().child('users').child("xd").set('ds');

            console.log('uid',user.uid);
            var ref = firebase.database().ref().child('users');
            
            ref.child(adaptEmail).child("email").set(txtEmail.value);//This should be

        }).catch(e=> {
            console.log(e.message);
        });
  		console.log(txtEmail.value);
  		console.log(txtPass.value);
  		//promise.catch(e=> console.log(e.message));
  	});

  	


  	firebase.auth().onAuthStateChanged(firebaseUser=>{
  		if (firebaseUser) {
  			console.log(firebaseUser);
  			console.log(document.location.href);
  			txtEmail.style.visibility = 'hidden';
  			txtPass.style.visibility = 'hidden';
  			document.location.href='./dashboard.html';
  		}
  		else{
  			console.log('not logged in');
  			txtEmail.style.visibility = 'visible';
  			txtPass.style.visibility = 'visible';
  		}

  	});










}());

