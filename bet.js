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

  	var user ="";

  	firebase.auth().onAuthStateChanged(firebaseUser=>{
  		if (firebaseUser) {
  			console.log(firebaseUser.email);
  			user = firebaseUser.email.substring(0,firebaseUser.email.length-4);
  		}
  		else{
  			console.log('not logged in');
  		}

  	});

  	


  	//Storage Firebase!
  	var dbRefObject = firebase.database().ref().child('object');

  	//First lets do your bet info
  	//on final button click of the last person it makes a tab for it


  	//request  - hard cause access others 
  	//middleman


  	//Bet portion
  	var titleBet = document.getElementById('betTitle');
  	var requestButton = document.getElementById('b3');
  	var middleman =document.getElementById('middleManName');
  	var betty =document.getElementById('bettyName');
  	var moneyBet = document.getElementById('moneyBet');
  	var percentageBet =document.getElementById('moneyPercent');
  	var charityOfChoice =document.getElementById('charityChoice');
  	
  	//Click part of request
  	requestButton.addEventListener('click',e=>{
  		console.log(user);
  		console.log(titleBet.value);
  		console.log(middleman.value);
  		console.log(percentageBet.value);
  		console.log(moneyBet.value);
  		var auth = firebase.auth();
  		var ref = firebase.database().ref().child('users').child(user);
            //Sets up money side of bet

            ref.child("bets").child(titleBet.value).child('price').child('each').set(moneyBet.value);
            ref.child("bets").child(titleBet.value).child('price').child('percent').set(percentageBet.value);

            //Check if betty and middle are true for both
            //One false kicks out from the list
            //betty
			ref.child("bets").child(titleBet.value).child('betty').child('name').set(betty.value);  
			ref.child("bets").child(titleBet.value).child('betty').child('accept').set('pending');

			//middle
			ref.child("bets").child(titleBet.value).child('middle').child('name').set(middleman.value); 
			ref.child("bets").child(titleBet.value).child('middle').child('accept').set('pending');

			//Finally add sending the requests!
		ref = firebase.database().ref().child('users').child(middleman.value.substring(0,middleman.value.length-4));
			ref.child("requests").child(titleBet.value).child('price').child('each').set(moneyBet.value);
			ref.child("requests").child(titleBet.value).child('price').child('percent').set(percentageBet.value);
			//set the better and betty for middleman to see
			ref.child("requests").child(titleBet.value).child('better').set(user);
			ref.child("requests").child(titleBet.value).child('betty').set(betty.value);
			ref.child("requests").child(titleBet.value).child('pending').set('pending');

		ref = firebase.database().ref().child('users').child(betty.value.substring(0,middleman.value.length-4));
			ref.child("requests").child(titleBet.value).child('price').child('each').set(moneyBet.value);
			ref.child("requests").child(titleBet.value).child('price').child('percent').set(percentageBet.value);
			ref.child("requests").child(titleBet.value).child('better').set(user);
			ref.child("requests").child(titleBet.value).child('middle').set(middleman.value);
			ref.child("requests").child(titleBet.value).child('pending').set('pending');

  	});
  	//Need a checker for the pending requests!
  	//Or we can check 

  	//Requests

  	//Middle

}());