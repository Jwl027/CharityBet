<<<<<<< HEAD
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
  		var promise = auth.createUserWithEmailAndPassword(txtEmail.value,txtPass.value).then(function(user){
            console.log('uid',user.uid);   
            var ref = firebase.database().ref().child('users');
            ref.child(user.email).child("email").set(user.email);//This should be
                       
        }).catch(e=> {
            console.log(e.message);
        });
  		console.log(txtEmail.value);
  		console.log(txtPass.value);
  		//promise.catch(e=> console.log(e.message));
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
=======
// (function(){
// 	var config = {
//     	apiKey: "AIzaSyBPUnQS_FdP70ras4xGGB20GCezMuy2_kY",
//     	authDomain: "charitybet-c4eb6.firebaseapp.com",
//     	databaseURL: "https://charitybet-c4eb6.firebaseio.com",
//     	projectId: "charitybet-c4eb6",
//     	storageBucket: "",
//     	messagingSenderId: "545734531716"
//   	};
//   	firebase.initializeApp(config);
//   	console.log('xd');
//   	var txtEmail=document.getElementById('txtEmail');
//   	var txtPass=document.getElementById('txtPass');
//   	var buttonSignUp=document.getElementById('btnSignUp');
//   	var buttonLogin=document.getElementById('btnLogin');
//   	var buttonLogOut=document.getElementById('btnLogOut');
//
//   	buttonLogin.addEventListener('click',e=>{
//   		console.log('lel');
//   		var auth = firebase.auth();
//   		var promise =auth.signInWithEmailAndPassword(txtEmail.value,txtPass.value);
//   		promise.catch(e=> console.log(e.message));
//   	});
//
//   	buttonSignUp.addEventListener('click',e=>{
//   		var auth = firebase.auth();
//   		var promise = auth.createUserWithEmailAndPassword(txtEmail.value,txtPass.value);
//   		console.log(txtEmail.value);
//   		console.log(txtPass.value);
//   		promise.catch(e=> console.log(e.message));
//   	});
//
//   	buttonLogOut.addEventListener('click',e=>{
//   		var auth = firebase.auth();
//   		firebase.auth().signOut();
//   	});
//
//
//   	firebase.auth().onAuthStateChanged(firebaseUser=>{
//   		if (firebaseUser) {
//   			console.log(firebaseUser);
//   		}
//   		else{
//   			console.log('not logged in');
//   		}
//
//   	});
//
//
//
// }());
// betCount is number of bets currently active
function creator(){
	//DYNAMICLLY CREATES CARDS FOR MIDDLE ACTIVE BETS
	//TODO
	//CHANGE I TO ARRAY SIZE OF ACTIVE BETS
	for(var i = 0; i < 10; i++) {
		// var $divUserName = $("<div>", {"class": "userNameL"});
		// var $divOponentName = $("<div>", {"class": "userNameR"});
		var $divDescription = $("<div>", {"class": "description"});
		var $divMiddleMan = $("<div>", {"class": "middleMan"});
		// var $divAmount = $("<div>", {"class": "amount"});
		var $divDetails = $("<div>", {"class": "details"});

		var $userName = $("<h3>", {"class": "userNameText"});
		var $oponentName = $("<h3>", {"class": "oponentNameText"});
		var $middleManName = $("<h3>", {"class": "middleManText"});
		var $amount = $("<h3>", {"class": "amountText","id" : "amount" + i});
		var $description = $("<h3>", {"class" : "descriptionText", "id" : "description" + i});

		//TODO:CHANGE OPPONENT NAME and MIDDLE MAN NAME DYNAMIC
		$oponentName.append("OPPENT_NAME_AT_I");
		$userName.append('USERNAME');
		$middleManName.append("MIDDLE MAN AT " + i);
		$description.append("DESCRIPTION AT " + i);
		$amount.append("AMOUNT AT " + i);
		// $divUserName.append($userName);
		// $divOponentName.append($oponentName);
		$divDescription.append($description);
		// $divAmount.append($amount);
		$divMiddleMan.append($middleManName);

		//TODO: CHANGE DESCRIPTION DYNAMIC
		//		Change AMOUNT DYNAMIC

		$divDetails.append($userName);
		$divDetails.append($amount);
		$divDetails.append($oponentName);


		var $div = $("<div>", {id: "card" + i, "class": "card"});
		var $div2 = $("<div>", {id: "innerCard" + i, "class": "inner"});

		// $div2.append($divDescription);

		// $div2.append($divUserName);
		// $div2.append($divAmount);
		// $div2.append($divOponentName);


		$div2.append($divDescription);
		$div2.append($divDetails);
		$div2.append($divMiddleMan);
		$div.append($div2);
		$("#middle").append($div);




	}



}
>>>>>>> 9659adddbe576d5a5f53f427008cfcd141ead278
